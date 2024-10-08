let config: Config;
let _settings: ISourcePluginSettings;

const state = {
  channelsCache: {} as Record<string, PlatformChannel>
};

let logger: Logger;

// region Imports
import {
  BASE_URL,
  SEARCH_CAPABILITIES,
  BASE_URL_PLAYLIST,
  BASE_URL_API,
  ERROR_TYPES,
  PLATFORM,
  BASE_URL_COMMENTS,
  REGEX_VIDEO_URL,
  REGEX_CHANNEL_URL,
  REGEX_PLAYLIST_URL,
  PRIVATE_PLAYLIST_QUERY_PARAM_FLAGGER,
  DEFAULT_SETTINGS
} from './constants';

import { getChannelNameFromUrl, getQuery, generateUUIDv4, applyCommonHeaders, Logger } from './util';

import {
  Maybe,
} from '../types/CodeGen';

import {
  SearchPagerAll,
  SearchChannelPager,
  ChannelVideoPager,
  SearchPlaylistPager,
  ChannelPlaylistPager,
} from './pagers';

import {
  SourceChannelToGrayjayChannel,
  SourceCollectionToGrayjayPlaylist,
  SourceCollectionToGrayjayPlaylistDetails,
  SourceVideoToGrayjayVideo,
  SourceVideoToPlatformVideoDetailsDef,
} from './mappers';

import {
  ISourcePluginSettings,
  IPlatformSystemPlaylist,
} from '../types/types';

import {

} from './extraction';

import {
  Countries,
  CountryData
} from './countries'
// endregion Imports



// region Source Methods
source.setSettings = function (settings) {
  logger.trace(`source.setSettings(settings=${settings})`);
  _settings = settings;
  logger = Logger.getInstance(_settings);
};

source.saveState = () => {
  logger.trace(`source.saveState()`);
  return JSON.stringify(state);
};

source.enable = function (conf, settings, saveStateStr) {
  logger.debug(`source.enable(conf=${conf}, settings=${settings}, saveStateStr=${saveStateStr})`);
  config = conf ?? {};

  _settings = { ...DEFAULT_SETTINGS, ...settings };
  logger = Logger.getInstance(_settings);

  if (IS_TESTING) {
    config.id = '9c87e8db-e75d-48f4-afe5-2d203d4b95c5';
  }

  let didSaveState = false;

  try {
    if (saveStateStr) {
      const saveState = JSON.parse(saveStateStr);
      if (saveState) {

        Object
        .keys(state)
        .forEach((key) => {
          state[key] = saveState[key];
        });

        if (!isTokenValid()) {
          log('Token expired. Fetching a new one.');
        } else {
          didSaveState = true;
          log('Using save state');
        }
      }
    }
  } catch (ex) {
    log('Failed to parse saveState:' + ex);
    didSaveState = false;
  }

  if (!didSaveState) {
    if(IS_TESTING){
      log('Getting a new tokens');
    }

    const clientCredentials = extractClientCredentials(http);

    const {
      anonymousUserAuthorizationToken,
      anonymousUserAuthorizationTokenExpirationDate,
      isValid,
    } = getTokenFromClientCredentials(http, clientCredentials);

    if (!isValid) {
      console.error('Failed to get token');
      throw new ScriptException(null, 'Failed to get authentication token');
    }

    state.channelsCache = {};

    state.anonymousUserAuthorizationToken =
      anonymousUserAuthorizationToken ?? '';
    state.anonymousUserAuthorizationTokenExpirationDate =
      anonymousUserAuthorizationTokenExpirationDate ?? 0;

    if (config.allowAllHttpHeaderAccess) {
      // get token for message service api-2-0.spot.im
      try {
        const authenticateIm = http.POST(
          BASE_URL_COMMENTS_AUTH,
          '',
          applyCommonHeaders({
            'x-spot-id': FALLBACK_SPOT_ID,//
            'x-post-id': 'no$post',
          }),
          false,
        );
  
        if (!authenticateIm.isOk) {
          log('Failed to authenticate to comments service');
        }
  
        state.commentWebServiceToken = authenticateIm?.headers?.['x-access-token']?.[0];
      } catch (error) {
        log('Failed to authenticate to comments service:' + error);
      }
    }
  }
  return `Source ${PLATFORM} enabled`;
};

source.disable = function () {
  logger.trace(`source.disable()`);
  return `Source ${PLATFORM} disabled`;
};

source.getHome = function () {
  logger.trace(`source.getHome()`);
  return getHomePager({}, 0);
};

source.searchSuggestions = function (query): string[] {
  logger.trace(`source.searchSuggestions(query=${query})`);
  try {
    const gqlResponse = executeGqlQuery(http, {
      operationName: 'AUTOCOMPLETE_QUERY',
      variables: {
        query,
      },
      query: AUTOCOMPLETE_QUERY,
    });

    return (
      (
        gqlResponse?.data?.search?.suggestedVideos as SuggestionConnection
      )?.edges?.map((edge) => edge?.node?.name ?? '') ?? []
    );
  } catch (error: any) {
    log('Failed to get search suggestions:' + error?.message);
    return [];
  }
};

source.getSearchCapabilities = (): ResultCapabilities => {
  logger.trace(`source.getSearchCapabilities()`);
  return SEARCH_CAPABILITIES;
};

source.search = function (query: string, type: string, order: string, filters) {
  logger.trace(`source.search(query=${query}, type=${type}, order=${order}, filters=${filters})`);
  return getSearchPagerAll({ q: query, page: 1, type, order, filters });
};

source.searchChannels = function (query) {
  logger.trace(`source.searchChannels(query=${query})`);
  return getSearchChannelPager({ q: query, page: 1 });
};

//region Channel
source.isChannelUrl = function (url) {
  logger.trace(`source.isChannelUrl(url=${url})`);
  return REGEX_CHANNEL_URL.test(url);
};

source.getChannel = function (url) {
  logger.trace(`source.getChannel(url=${url})`);

  if(!state?.channelsCache){
    state.channelsCache = {};
  }

  if(state.channelsCache[url]){
    return state.channelsCache[url];
  }

  const channel_name = getChannelNameFromUrl(url);

  const channelDetails = executeGqlQuery(http, {
    operationName: 'CHANNEL_QUERY_DESKTOP',
    variables: {
      channel_name,
      avatar_size: CREATOR_AVATAR_HEIGHT[_settings?.avatarSizeOptionIndex],
    },
    query: CHANNEL_QUERY_DESKTOP,
  });

  state.channelsCache[url] = SourceChannelToGrayjayChannel(
    config.id,
    channelDetails.data.channel as Channel,
  );

  return state.channelsCache[url];
};

source.getChannelContents = function (url, type, order, filters) {
  logger.trace(`source.getChannelContents(url=${url}, type=${type}, order=${order}, filters=${filters})`);
  const page = 1;
  return getChannelContentsPager(url, page, type, order, filters);
};

source.getChannelPlaylists = (url): SearchPlaylistPager => {
  logger.trace(`source.getChannelPlaylists(url=${url})`);
  try {
    return getChannelPlaylists(url, 1);
  } catch (error) {
    log('Failed to get channel playlists:' + error);
    return new ChannelPlaylistPager([]);
  }
};

source.getChannelCapabilities = (): ResultCapabilities => {
  logger.trace(`source.getChannelCapabilities()`);
  return {
    types: [Type.Feed.Mixed],
    sorts: [Type.Order.Chronological, 'Popular'],
    filters: [],
  };
};

// region Video
source.isContentDetailsUrl = function (url) {
  logger.trace(`source.isContentDetailsUrl(url=${url})`);
  return [REGEX_VIDEO_URL].some((r) =>
    r.test(url),
  );
};

source.getContentDetails = function (url) {
  logger.trace(`source.getContentDetails(url=${url})`);
  return getSavedVideo(url, false);
};
// endregion Video

// region Comments
source.getSubComments = (comment) => {
  logger.trace(`source.getSubComments(comment=${comment})`);
  const params = {
    count: 5,
    offset: 0,
    parent_id: comment.context.id,
    sort_by: 'best',
    child_count: comment.replyCount,
  };
  return getCommentPager(comment.contextUrl, params, 0);
};

source.getComments = (url) => {
  logger.trace(`source.getComments(url=${url})`);
  if (!config.allowAllHttpHeaderAccess) {
    return new PlatformCommentPager([], false, url, {}, 0);
  }

  const params = {
    sort_by: 'best',
    offset: 0,
    count: 10,
    message_id: null,
    depth: 2,
    child_count: 2,
  };
  return getCommentPager(url, params, 0);
};

function getCommentPager(url: string, params: Record<string, any>, page: number) {
  try {
    const xid = url.split('/').pop();

    const commentsHeaders = applyCommonHeaders({
      'x-access-token': state.commentWebServiceToken,
      'x-spot-id': FALLBACK_SPOT_ID,
      'x-post-id': xid,
    });

    const commentRequest = http.POST(
      BASE_URL_COMMENTS,
      JSON.stringify(params),
      commentsHeaders,
      false,
    );

    if (!commentRequest.isOk) {
      throw new UnavailableException(
        'Failed to authenticate to comments service',
      );
    }

    const comments = JSON.parse(commentRequest.body);

    const users = comments.conversation.users;

    const results = comments.conversation.comments.map((v) => {
      const user = users[v.user_id];

      return new Comment({
        contextUrl: url,
        author: new PlatformAuthorLink(
          new PlatformID(PLATFORM, user.id ?? '', config.id),
          user.display_name ?? '',
          '',
          `${BASE_URL_COMMENTS_THUMBNAILS}/${user.image_id}`,
        ),
        message: v.content[0].text,
        rating: new RatingLikes(v.stars),
        date: v.written_at,
        replyCount: v.total_replies_count ?? 0,
        context: { id: v.id },
      });
    });

    return new PlatformCommentPager(
      results,
      comments.conversation.has_next,
      url,
      params,
      ++page,
    );
  } catch (error) {
    logger.error('Failed to get comments:' + error);
    return new PlatformCommentPager([], false, url, params, 0);
  }
}

class PlatformCommentPager extends CommentPager {
  constructor(results, hasMore, path, params, page) {
    super(results, hasMore, { path, params, page });
  }

  nextPage() {
    return getCommentPager(
      this.context.path,
      this.context.params,
      (this.context.page ?? 0) + 1,
    );
  }
}
// endregion Comments

//region Playlists
source.isPlaylistUrl = (url): boolean => {
  logger.trace(`source.isPlaylistUrl(url=${url})`);
  return (
    REGEX_VIDEO_PLAYLIST_URL.test(url) || [
      LIKED_VIDEOS_PLAYLIST_ID, 
      FAVORITE_VIDEOS_PLAYLIST_ID, 
      RECENTLY_WATCHED_VIDEOS_PLAYLIST_ID
    ].includes(url)
  );
};

source.searchPlaylists = (query, type, order, filters) => {
  logger.trace(`source.searchPlaylists(query=${query},type=${type},order=${order},filters=${filters})`);
  return searchPlaylists({ q: query, type, order, filters });
};

source.getPlaylist = (url: string): PlatformPlaylistDetails => {
  logger.trace(`source.getPlaylist(url=${url})`);
  const thumbnailResolutionIndex = _settings.thumbnailResolutionOptionIndex;

  if (url === LIKED_VIDEOS_PLAYLIST_ID) {
    return getLikePlaylist(
      config.id,
      http,
      true, //usePlatformAuth,
      thumbnailResolutionIndex,
    );
  }

  if (url === FAVORITE_VIDEOS_PLAYLIST_ID) {
    return getFavoritesPlaylist(
      config.id,
      http,
      true, //usePlatformAuth,
      thumbnailResolutionIndex,
    );
  }

  if (url === RECENTLY_WATCHED_VIDEOS_PLAYLIST_ID) {
    return getRecentlyWatchedPlaylist(
      config.id,
      http,
      true, //usePlatformAuth,
      thumbnailResolutionIndex,
    );
  }

  const isPrivatePlaylist = url.includes(PRIVATE_PLAYLIST_QUERY_PARAM_FLAGGER);

  if(isPrivatePlaylist){
    url = url.replace(PRIVATE_PLAYLIST_QUERY_PARAM_FLAGGER, '');  //remove the private flag
  }

  const xid = url.split('/').pop();

  const variables = {
    xid,
    avatar_size: CREATOR_AVATAR_HEIGHT[_settings.avatarSizeOptionIndex],
    thumbnail_resolution: THUMBNAIL_HEIGHT[thumbnailResolutionIndex],
  };

  const gqlResponse = executeGqlQuery(http, {
    operationName: 'PLAYLIST_VIDEO_QUERY',
    variables,
    query: PLAYLIST_DETAILS_QUERY,
    usePlatformAuth: isPrivatePlaylist,
  });

  const videos: PlatformVideo[] =
    gqlResponse?.data?.collection?.videos?.edges.map((edge) => {
      return SourceVideoToGrayjayVideo(config.id, edge.node as Video);
    });

  return SourceCollectionToGrayjayPlaylistDetails(
    config.id,
    gqlResponse?.data?.collection as Collection,
    videos,
  );
};

source.getUserSubscriptions = (): string[] => {
  logger.trace(`source.getUserSubscriptions()`);
  if (!bridge.isLoggedIn()) {
    log('Failed to retrieve subscriptions page because not logged in.');
    throw new ScriptException('Not logged in');
  }

  const usePlatformAuth = true;

  const fetchSubscriptions = (page, first): string[] => {
    const gqlResponse = executeGqlQuery(http, {
      operationName: 'SUBSCRIPTIONS_QUERY',
      variables: {
        first: first,
        page: page,
      },
      headers: applyCommonHeaders(),
      query: GET_USER_SUBSCRIPTIONS,
      usePlatformAuth,
    });

    return (
      (gqlResponse?.data?.me?.channel as Channel)?.followings?.edges?.map(
        (edge) => edge?.node?.creator?.name ?? '',
      ) ?? []
    );
  };

  const first = 100; // Number of records to fetch per page
  let page = 1;
  const subscriptions: string[] = [];

  // There is a totalCount ($.data.me.channel.followings.totalCount) property but it's not reliable.
  // For example, it may return 0 even if there are subscriptions, or it may return a number that is not the actual number of subscriptions.
  // For now, it's better to fetch until no more results are returned

  let items: string[] = [];

  do {
    const response = fetchSubscriptions(page, first);

    items = response.map((creatorName) => `${BASE_URL}/${creatorName}`);

    subscriptions.push(...items);
    page++;
  } while (items.length);

  return subscriptions;
};

source.getUserPlaylists = (): string[] => {
  logger.trace(`source.getUserPlaylists()`);
  if (!bridge.isLoggedIn()) {
    log('Failed to retrieve subscriptions page because not logged in.');
    throw new ScriptException('Not logged in');
  }

  const headers = applyCommonHeaders();

  const gqlResponse = executeGqlQuery(http, {
    operationName: 'SUBSCRIPTIONS_QUERY',
    headers,
    query: SUBSCRIPTIONS_QUERY,
    usePlatformAuth: true,
  });

  const userName = (gqlResponse?.data?.me?.channel as Channel)?.name;

  const playlists = getPlaylistsByUsername(userName, headers, true);

  // Used to trick migration "Import Playlists" to import "Favorites", "Recently Watched" and "Liked Videos"
  [
    LIKED_VIDEOS_PLAYLIST_ID,
    FAVORITE_VIDEOS_PLAYLIST_ID,
    RECENTLY_WATCHED_VIDEOS_PLAYLIST_ID,
  ]
  .forEach((playlistId) => {
    if (!playlists.includes(playlistId)) {
      playlists.push(playlistId);
    }
  });

  return playlists;
};

source.getChannelTemplateByClaimMap = () => {
  logger.trace(`source.getChannelTemplateByClaimMap()`);
  return {
    //Dailymotion claim type
    27: {
      0: BASE_URL + '/{{CLAIMVALUE}}',
    },
  };
};
// endregion Playlists
// endregion Source Methods

function getPlaylistsByUsername(
  userName,
  headers,
  usePlatformAuth = false,
): string[] {
  const collections = executeGqlQuery(http, {
    operationName: 'CHANNEL_PLAYLISTS_QUERY',
    variables: {
      channel_name: userName,
      sort: 'recent',
      page: 1,
      first: 99,
      avatar_size: CREATOR_AVATAR_HEIGHT[_settings.avatarSizeOptionIndex],
      thumbnail_resolution:
        THUMBNAIL_HEIGHT[_settings.thumbnailResolutionOptionIndex],
    },
    headers,
    query: GET_CHANNEL_PLAYLISTS_XID,
    usePlatformAuth,
  });

  const playlists: string[] = (collections.data.channel as Maybe<Channel>)?.collections?.edges?.map(
    (edge) => {
      
      let playlistUrl = `${BASE_URL_PLAYLIST}/${edge?.node?.xid}`;
      
      const isPrivatePlaylist = edge?.node?.isPrivate ?? false;

      if(isPrivatePlaylist){
        playlistUrl += PRIVATE_PLAYLIST_QUERY_PARAM_FLAGGER;
      }

      return playlistUrl;
    },
  ) || [];

  return playlists;
}

function searchPlaylists(contextQuery) {
  const context = getQuery(contextQuery);

  const variables = {
    query: context.q,
    sortByVideos: context.sort,
    durationMaxVideos: context.filters?.durationMaxVideos,
    durationMinVideos: context.filters?.durationMinVideos,
    createdAfterVideos: context.filters?.createdAfterVideos, //Represents a DateTime value as specified by iso8601
    shouldIncludePlaylists: true,
    shouldIncludeVideos: false,
    shouldIncludeLives: false,
    page: context.page,
    limit: VIDEOS_PER_PAGE_OPTIONS[_settings.videosPerPageOptionIndex],
    thumbnail_resolution:
      THUMBNAIL_HEIGHT[_settings?.thumbnailResolutionOptionIndex],
    avatar_size: CREATOR_AVATAR_HEIGHT[_settings?.avatarSizeOptionIndex],
  };

  const gqlResponse = executeGqlQuery(http, {
    operationName: 'SEARCH_QUERY',
    variables: variables,
    query: SEARCH_QUERY,
    headers: undefined,
  });

  const playlistConnection = gqlResponse?.data?.search
    ?.playlists as CollectionConnection;

  const searchResults = playlistConnection?.edges?.map((edge) => {
    return SourceCollectionToGrayjayPlaylist(config.id, edge?.node);
  });

  const hasMore = playlistConnection?.pageInfo?.hasNextPage;

  if (!searchResults || searchResults.length === 0) {
    return new PlaylistPager([]);
  }

  const params = {
    query: context.q,
    sort: context.sort,
    filters: context.filters,
  };

  return new SearchPlaylistPager(
    searchResults,
    hasMore,
    params,
    context.page,
    searchPlaylists,
  );
}

// region Internals

function getHomePager(params, page) {
  const count = VIDEOS_PER_PAGE_OPTIONS[_settings.videosPerPageOptionIndex];

  if (!params) {
    params = {};
  }

  params = { ...params, count };

  const headersToAdd = applyCommonHeaders({
    'X-DM-Preferred-Country': getPreferredCountry(_settings?.preferredCountryOptionIndex),
  });

  let obj;

  try {
    obj = executeGqlQuery(http, {
      operationName: 'SEACH_DISCOVERY_QUERY',
      variables: {
        avatar_size: CREATOR_AVATAR_HEIGHT[_settings?.avatarSizeOptionIndex],
        thumbnail_resolution:
          THUMBNAIL_HEIGHT[_settings?.thumbnailResolutionOptionIndex],
      },
      query: SEACH_DISCOVERY_QUERY,
      headers: headersToAdd,
    });
  } catch (error) {
    return new VideoPager([], false, { params });
  }

  const results =
    obj?.data?.home?.neon?.sections?.edges?.[0]?.node?.components?.edges
      ?.filter((edge) => edge?.node?.id)
      ?.map((edge) => {
        return SourceVideoToGrayjayVideo(config.id, edge.node as Video);
      });

  const hasMore =
    obj?.data?.home?.neon?.sections?.edges?.[0]?.node?.components?.pageInfo
      ?.hasNextPage ?? false;

  return new SearchPagerAll(results, hasMore, params, page, getHomePager);
}

function getChannelContentsPager(url, page, type, order, filters) {
  const channel_name = getChannelNameFromUrl(url);

  const shouldLoadVideos =
    type === Type.Feed.Mixed || type === Type.Feed.Videos;

  const shouldLoadLives =
    type === Type.Feed.Mixed ||
    type === Type.Feed.Streams ||
    type === Type.Feed.Live;

  if (IS_TESTING) {
    log(
      `Getting channel contents for ${url}, page: ${page}, type: ${type}, order: ${order}, shouldLoadVideos: ${shouldLoadVideos}, shouldLoadLives: ${shouldLoadLives}, filters: ${JSON.stringify(filters)}`,
    );
  }

  /** 
		Recent = Sort liked medias by most recent.
		Visited - Sort liked medias by most viewed
	*/
  let sort: string;

  if (order == Type.Order.Chronological) {
    sort = LikedMediaSort.Recent;
  } else if (order == 'Popular') {
    sort = LikedMediaSort.Visited;
  } else {
    sort = LikedMediaSort.Recent;
  }

  const gqlResponse = executeGqlQuery(http, {
    operationName: 'CHANNEL_VIDEOS_QUERY',
    variables: {
      channel_name,
      sort,
      page: page ?? 1,
      allowExplicit: !_settings.hideSensitiveContent,
      first: VIDEOS_PER_PAGE_OPTIONS[_settings.videosPerPageOptionIndex],
      avatar_size: CREATOR_AVATAR_HEIGHT[_settings?.avatarSizeOptionIndex],
      thumbnail_resolution:
        THUMBNAIL_HEIGHT[_settings?.thumbnailResolutionOptionIndex],
      shouldLoadLives,
      shouldLoadVideos,
    },
    query: CHANNEL_VIDEOS_QUERY,
  });

  const channel = gqlResponse?.data?.channel as Channel;

  const all: (Live | Video)[] = [
    ...(channel?.lives?.edges
      ?.filter((e) => e?.node?.isOnAir)
      ?.map((e) => e?.node as Live) ?? []),
    ...(channel?.videos?.edges?.map((e) => e?.node as Video) ?? []),
  ];

  const videos = all.map((node) => SourceVideoToGrayjayVideo(config.id, node));

  const videosHasNext = channel?.videos?.pageInfo?.hasNextPage;
  const livesHasNext = channel?.lives?.pageInfo?.hasNextPage;
  const hasNext = videosHasNext || livesHasNext || false;

  const params = {
    url,
    type,
    order,
    page,
    filters,
  };

  return new ChannelVideoPager(
    videos,
    hasNext,
    params,
    getChannelContentsPager,
  );
}

function getSearchPagerAll(contextQuery): VideoPager {
  const context = getQuery(contextQuery);

  const variables = {
    query: context.q,
    sortByVideos: context.sort,
    durationMaxVideos: context.filters?.durationMaxVideos,
    durationMinVideos: context.filters?.durationMinVideos,
    createdAfterVideos: context.filters?.createdAfterVideos, //Represents a DateTime value as specified by iso8601
    shouldIncludePlaylists: false,
    shouldIncludeVideos: true,
    shouldIncludeLives: true,
    page: context.page ?? 1,
    limit: VIDEOS_PER_PAGE_OPTIONS[_settings.videosPerPageOptionIndex],
    avatar_size: CREATOR_AVATAR_HEIGHT[_settings?.avatarSizeOptionIndex],
    thumbnail_resolution:
      THUMBNAIL_HEIGHT[_settings?.thumbnailResolutionOptionIndex],
  };

  const gqlResponse = executeGqlQuery(http, {
    operationName: 'SEARCH_QUERY',
    variables: variables,
    query: SEARCH_QUERY,
    headers: undefined,
  });

  const videoConnection = gqlResponse?.data?.search?.videos as VideoConnection;
  const liveConnection = gqlResponse?.data?.search?.lives as LiveConnection;

  const all: (VideoEdge | LiveEdge | null)[] = [
    ...(videoConnection?.edges ?? []),
    ...(liveConnection?.edges ?? []),
  ];

  const results: PlatformVideo[] = all.map((edge) =>
    SourceVideoToGrayjayVideo(config.id, edge?.node),
  );

  const params = {
    query: context.q,
    sort: context.sort,
    filters: context.filters,
  };

  return new SearchPagerAll(
    results,
    videoConnection?.pageInfo?.hasNextPage,
    params,
    context.page,
    getSearchPagerAll,
  );
}

function getSavedVideo(url, usePlatformAuth = false) {
  const id = url.split('/').pop();

  const player_metadata_url = `${BASE_URL_METADATA}/${id}?embedder=https%3A%2F%2Fwww.dailymotion.com%2Fvideo%2Fx8yb2e8&geo=1&player-id=xjnde&locale=en-GB&dmV1st=ce2035cd-bdca-4d7b-baa4-127a17490ca5&dmTs=747022&is_native_app=0&app=com.dailymotion.neon&client_type=webapp&section_type=player&component_style=_`;

  const headers1 = applyCommonHeaders();

  if (_settings.hideSensitiveContent) {
    headers1['Cookie'] = 'ff=on';
  } else {
    headers1['Cookie'] = 'ff=off';
  }

  const videoDetailsRequestBody = JSON.stringify({
    operationName: 'WATCHING_VIDEO',
    variables: {
      xid: id,
      avatar_size: CREATOR_AVATAR_HEIGHT[_settings?.avatarSizeOptionIndex],
      thumbnail_resolution:
        THUMBNAIL_HEIGHT[_settings?.thumbnailResolutionOptionIndex],
    },
    query: WATCHING_VIDEO,
  });

  const videoDetailsRequestHeaders: Record<string, string> = applyCommonHeaders();

  if (!usePlatformAuth) {
    videoDetailsRequestHeaders.Authorization = state.anonymousUserAuthorizationToken;
  }

  const responses = http
    .batch()
    .GET(player_metadata_url, headers1, usePlatformAuth)
    .POST(
      BASE_URL_API,
      videoDetailsRequestBody,
      videoDetailsRequestHeaders,
      usePlatformAuth,
    )
    .execute();

  const player_metadataResponse = responses[0];
  const video_details_response = responses[1];

  if (!player_metadataResponse.isOk) {
    throw new UnavailableException('Unable to get player metadata');
  }

  const player_metadata = JSON.parse(player_metadataResponse.body);

  if (player_metadata.error) {
    if (
      player_metadata.error.code &&
      ERROR_TYPES[player_metadata.error.code] !== undefined
    ) {
      throw new UnavailableException(ERROR_TYPES[player_metadata.error.code]);
    }

    throw new UnavailableException('This content is not available');
  }

  if (video_details_response.code != 200) {
    throw new UnavailableException('Failed to get video details');
  }

  const video_details = JSON.parse(video_details_response.body);

  const video = video_details?.data?.video as Video;

  const platformVideoDetails: PlatformVideoDetailsDef =
    SourceVideoToPlatformVideoDetailsDef(config.id, video, player_metadata);

  return new PlatformVideoDetails(platformVideoDetails);
}

function getSearchChannelPager(context) {
  const searchResponse = executeGqlQuery(http, {
    operationName: 'SEARCH_QUERY',
    variables: {
      query: context.q,
      page: context.page ?? 1,
      limit: VIDEOS_PER_PAGE_OPTIONS[_settings.videosPerPageOptionIndex],
      avatar_size: CREATOR_AVATAR_HEIGHT[_settings?.avatarSizeOptionIndex],
    },
    query: SEARCH_CHANNEL,
  });

  const results = searchResponse?.data?.search?.channels?.edges.map((edge) => {
    const channel = edge.node as Channel;

    return SourceChannelToGrayjayChannel(config.id, channel);
  });

  const params = {
    query: context.q,
  };

  return new SearchChannelPager(
    results,
    searchResponse?.data?.search?.channels?.pageInfo?.hasNextPage,
    params,
    context.page,
    getSearchChannelPager,
  );
}

function getChannelPlaylists(
  url: string,
  page: number = 1,
): SearchPlaylistPager {

  const headers = applyCommonHeaders();

  const usePlatformAuth = false;
  const channel_name = getChannelNameFromUrl(url);

  const gqlResponse = executeGqlQuery(http, {
    operationName: 'CHANNEL_PLAYLISTS_QUERY',
    variables: {
      channel_name,
      sort: 'recent',
      page,
      first: PLAYLISTS_PER_PAGE_OPTIONS[_settings.playlistsPerPageOptionIndex],
      avatar_size: CREATOR_AVATAR_HEIGHT[_settings.avatarSizeOptionIndex],
      thumbnail_resolution:
        THUMBNAIL_HEIGHT[_settings.thumbnailResolutionOptionIndex],
    },
    headers,
    query: CHANNEL_PLAYLISTS_QUERY,
    usePlatformAuth,
  });

  const channel = gqlResponse.data.channel as Channel;

  const content: PlatformPlaylist[] = (channel?.collections?.edges ?? [])
    .filter(
      (e) => e?.node?.metrics?.engagement?.videos?.edges?.[0]?.node?.total,
    ) //exclude empty playlists. could be empty doe to geographic restrictions
    .map((edge) => {
      return SourceCollectionToGrayjayPlaylist(config.id, edge?.node);
    });

  if (content?.length === 0) {
    return new ChannelPlaylistPager([]);
  }

  const params = {
    url,
  };

  const hasMore = channel?.collections?.pageInfo?.hasNextPage ?? false;

  return new ChannelPlaylistPager(
    content,
    hasMore,
    params,
    page,
    getChannelPlaylists,
  );
}

function isTokenValid() {
  const currentTime = Date.now();
  return state.anonymousUserAuthorizationTokenExpirationDate > currentTime;
}

function getPages<TI, TO>(
  httpClient: IHttp,
  query: string,
  operationName: string,
  variables: any,
  usePlatformAuth: boolean,
  setRoot: (gqlResponse: any) => TI,
  hasNextCallback: (page: TI) => boolean,
  getNextPage: (page: TI, currentPage) => number,
  map: (page: any) => TO[],
): TO[] {
  let all: TO[] = [];

  if (!hasNextCallback) {
    hasNextCallback = () => false;
  }

  let hasNext = true;
  let nextPage = 1;

  do {
    variables = { ...variables, page: nextPage };

    const gqlResponse = executeGqlQuery(httpClient, {
      operationName,
      variables,
      query,
      usePlatformAuth,
    });

    const root = setRoot(gqlResponse);

    nextPage = getNextPage(root, nextPage);

    const items = map(root);

    hasNext = hasNextCallback(root);

    all = all.concat(items);
  } while (hasNext);

  return all;
}

function getLikePlaylist(
  pluginId: string,
  httpClient: IHttp,
  usePlatformAuth: boolean = false,
  thumbnailResolutionIndex: number = 0,
): PlatformPlaylistDetails {
  return getPlatformSystemPlaylist({
    pluginId,
    httpClient,
    query: USER_LIKED_VIDEOS_QUERY,
    operationName: 'USER_LIKED_VIDEOS_QUERY',
    rootObject: 'likedMedias',
    playlistName: 'Liked Videos',
    usePlatformAuth,
    thumbnailResolutionIndex,
  });
}

function getFavoritesPlaylist(
  pluginId: string,
  httpClient: IHttp,
  usePlatformAuth: boolean = false,
  thumbnailResolutionIndex: number = 0,
): PlatformPlaylistDetails {
  return getPlatformSystemPlaylist({
    pluginId,
    httpClient,
    query: USER_WATCH_LATER_VIDEOS_QUERY,
    operationName: 'USER_WATCH_LATER_VIDEOS_QUERY',
    rootObject: 'watchLaterMedias',
    playlistName: 'Favorites',
    usePlatformAuth,
    thumbnailResolutionIndex,
  });
}

function getRecentlyWatchedPlaylist(
  pluginId: string,
  httpClient: IHttp,
  usePlatformAuth: boolean = false,
  thumbnailResolutionIndex: number = 0,
): PlatformPlaylistDetails {
  return getPlatformSystemPlaylist({
    pluginId,
    httpClient,
    query: USER_WATCHED_VIDEOS_QUERY,
    operationName: 'USER_WATCHED_VIDEOS_QUERY',
    rootObject: 'watchedVideos',
    playlistName: 'Recently Watched',
    usePlatformAuth,
    thumbnailResolutionIndex,
  });
}

function getPlatformSystemPlaylist(
  opts: IPlatformSystemPlaylist,
): PlatformPlaylistDetails {
  const videos: PlatformVideo[] = getPages<Maybe<User>, PlatformVideo>(
    opts.httpClient,
    opts.query,
    opts.operationName,
    {
      page: 1,
      thumbnail_resolution: THUMBNAIL_HEIGHT[opts.thumbnailResolutionIndex],
    },
    opts.usePlatformAuth,
    (gqlResponse) => gqlResponse?.data?.me, //set root
    (me) => (me?.[opts.rootObject]?.edges?.length ?? 0) > 0, //hasNextCallback
    (me, currentPage) => ++currentPage, //getNextPage
    (me) =>
      me?.[opts.rootObject]?.edges.map((edge) => {
        return SourceVideoToGrayjayVideo(opts.pluginId, edge.node as Video);
      }),
  );

  const collection = {
    id: generateUUIDv4(),
    name: opts.playlistName,
    creator: {},
  };

  return SourceCollectionToGrayjayPlaylistDetails(
    opts.pluginId,
    collection as Collection,
    videos,
  );
}

function getPreferredCountry(preferredCountryIndex: number = 0): CountryData {
  return Countries[preferredCountryIndex] ?? {name: `Unknown (${name})`, shortname: "US", currency: "Unknown", language: "English", continent: "Unknown"};
}
// endregion Internals

Logger.getInstance(DEFAULT_SETTINGS).info(`Instantiated`);
