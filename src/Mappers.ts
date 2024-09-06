import {
  Maybe,
} from '../types/CodeGen';

import {

} from '../types/types';

import {
  BASE_URL,
  BASE_URL_PLAYLIST,
  BASE_URL_VIDEO,
  BASE_URL_CHANNEL,
  PLATFORM,
  PLATFORM_CLAIMTYPE,
  DEFAULT_SETTINGS
} from './constants';

import {
  convertSRTtoVTT,
  Logger
} from './util'

const logger = Logger.getInstance(DEFAULT_SETTINGS);

export const SourceChannelToGrayjayChannel = (
  pluginId: string,
  sourceChannel: <Channel>,
): PlatformChannel => {

  return new PlatformChannel({
    id: new PlatformID(
      PLATFORM,
      <CHANNEL_ID> ?? '',
      pluginId,
      PLATFORM_CLAIMTYPE,
    ),
    name: <CHANNEL_TITLE> ?? '',
    thumbnail: <CHANNEL_AVATAR_URL> ?? '',
    banner: <CHANNEL_BANNER_URL> ?? '',
    subscribers: <CHANNEL_SUBSCRIBERS_COUNT> ?? 0,
    description,
    url: <CHANNEL_URL>,
    links,
  });
};

export const SourceAuthorToGrayjayPlatformAuthorLink = (
  pluginId: string,
  creator?: Maybe<Channel>,
): PlatformAuthorLink => {
  return new PlatformAuthorLink(
    new PlatformID(PLATFORM, <CHANNEL_ID> ?? '', pluginId, PLATFORM_CLAIMTYPE),
    <CHANNEL_TITLE> ?? '',
    <CHANNEL_NAME> ?? '',
    <CHANNEL_AVATAR_URL> ?? '',
    <CHANNEL_SUBSCRIBERS_COUNT> ?? 0,
  );
};

export const SourceVideoToGrayjayVideo = (
  pluginId: string,
  sourceVideo?: <Video>,
): PlatformVideo => {
  const isLive = getIsLive(sourceVideo);
  const viewCount = getViewCount(sourceVideo);

  const video: PlatformVideoDef = {
    id: new PlatformID(
      PLATFORM,
      <ID> ?? '',
      pluginId,
      PLATFORM_CLAIMTYPE,
    ),
    description: <VIDEO_DESCRIPTION> ?? '',
    name: <VIDEO_TITLE> ?? '',
    thumbnails: new Thumbnails([
      new Thumbnail(<THUMBNAIL_URL> ?? '', 0),
    ]),
    author: SourceAuthorToGrayjayPlatformAuthorLink(
      pluginId,
      <CREATOR>,
    ),
    uploadDate: Math.floor(new Date(<VIDEO_UPLOAD_DATE>.getTime() / 1000),
    datetime: Math.floor(new Date(<VIDEO_UPLOAD_DATE>).getTime() / 1000),
    url: <VIDEO_URL>,
    duration: (sourceVideo as Video)<VIDEO_DURATION> ?? -1,
    viewCount,
    isLive,
  };

  return new PlatformVideo(video);
};

export const SourceCollectionToGrayjayPlaylistDetails = (
  pluginId: string,
  sourceCollection: Collection,
  videos: PlatformVideo[] = [],
): PlatformPlaylistDetails => {
  return new PlatformPlaylistDetails({
    url: <COLLECTION_URL> ?? '',
    id: new PlatformID(
      PLATFORM,
      <COLLECTION_ID> ?? '',
      pluginId,
      PLATFORM_CLAIMTYPE,
    ),
    author: <COLLECTION_AUTHOR>
      ? SourceAuthorToGrayjayPlatformAuthorLink(
          pluginId,
          <COLLECTION_AUTHOR>,
        )
      : {},
    name: <COLLECTION_NAME>,
    thumbnail: <COLLECTION_THUMBNAIL_URL>,
    videoCount: <COLLECTION_COUNT> ?? 0,
    contents: new VideoPager(videos),
  });
};

export const SourceCollectionToGrayjayPlaylist = (
  pluginId: string,
  sourceCollection?: Maybe<Collection>,
): PlatformPlaylist => {
  return new PlatformPlaylist({
    url: <COLLECTION_URL> ?? '',
    id: new PlatformID(
      PLATFORM,
      <COLLECTION_ID> ?? '',
      pluginId,
      PLATFORM_CLAIMTYPE,
    ),
    author: SourceAuthorToGrayjayPlatformAuthorLink(
      pluginId,
      <COLLECTION_AUTHOR>,
    ),
    name: <COLLECTION_NAME>,
    thumbnail: <COLLECTION_THUMBNAIL_URL>,
    videoCount: <COLLECTION_COUNT>
  });
};

const getIsLive = (sourceVideo?: <VIDEO_DETAILS>): boolean => {
  return (
    (sourceVideo as Live)?.isOnAir === true ||
    (sourceVideo as Video)?.duration == undefined
  );
};

const getViewCount = (sourceVideo?: <VIDEO_DETAILS>): number => {
  let viewCount = 0;

  if (getIsLive(sourceVideo)) {
    const live = sourceVideo as Live;

    //TODO: live?.audienceCount and live.stats.views.total are deprecated
    //live?.metrics?.engagement?.audience?.edges?.[0]?.node?.total is still empty
    viewCount =
      live?.metrics?.engagement?.audience?.edges?.[0]?.node?.total ??
      live?.audienceCount ??
      live?.stats?.views?.total ??
      0;
  } else {
    const video = sourceVideo as Video;

    // TODO: both fields are deprecated.
    // video?.stats?.views?.total replaced video?.viewCount
    // now video?.viewCount is deprecated too but there replacement is not accessible yet
    viewCount = video?.viewCount ?? video?.stats?.views?.total ?? 0;
  }

  return viewCount;
};

export const SourceVideoToPlatformVideoDetailsDef = (
  pluginId: string,
  sourceVideo: Video | Live,
  player_metadata,
): PlatformVideoDetailsDef => {
  let positiveRatingCount = 0;

  let negativeRatingCount = 0;

  const ratings = sourceVideo?.metrics?.engagement?.likes?.edges ?? [];

  for (const edge of ratings) {
    const ratingName = edge?.node?.rating as string;
    const ratingTotal = edge?.node?.total as number;

    if (POSITIVE_RATINGS_LABELS.includes(ratingName)) {
      positiveRatingCount += ratingTotal;
    } else if (NEGATIVE_RATINGS_LABELS.includes(ratingName)) {
      negativeRatingCount += ratingTotal;
    }
  }

  const isLive = getIsLive(sourceVideo);
  const viewCount = getViewCount(sourceVideo);
  const duration = isLive ? 0 : ((sourceVideo as Video)?.duration ?? 0);

  const source = new HLSSource({
    name: 'HLS',
    duration,
    url: player_metadata?.qualities?.auto[0]?.url,
  });

  const sources = [source];

  const platformVideoDetails: PlatformVideoDetailsDef = {
    id: new PlatformID(
      PLATFORM,
      sourceVideo?.id ?? '',
      pluginId,
      PLATFORM_CLAIMTYPE,
    ),
    name: sourceVideo?.title ?? '',
    thumbnails: new Thumbnails([
      new Thumbnail(sourceVideo?.thumbnail?.url ?? '', 0),
    ]),
    author: SourceAuthorToGrayjayPlatformAuthorLink(
      pluginId,
      sourceVideo?.creator,
    ),
    //TODO: sourceVideo?.createdAt is deprecated but sourceVideo?.createDate requires authentication
    uploadDate: Math.floor(new Date(sourceVideo?.createdAt).getTime() / 1000),
    datetime: Math.floor(new Date(sourceVideo?.createdAt).getTime() / 1000),
    duration,
    viewCount,
    url: sourceVideo?.xid ? `${BASE_URL_VIDEO}/${sourceVideo.xid}` : '',
    isLive,
    description: sourceVideo?.description ?? '',
    video: new VideoSourceDescriptor(sources),
    rating: new RatingLikesDislikes(positiveRatingCount, negativeRatingCount),
    dash: null,
    live: null,
    hls: null,
    subtitles: [],
  };

  const sourceSubtitle = player_metadata?.subtitles as IDailymotionSubtitle;

  if (sourceSubtitle?.enable && sourceSubtitle?.data) {
    Object.keys(sourceSubtitle.data).forEach((key) => {
      const subtitleData = sourceSubtitle.data[key];

      if (subtitleData) {
        const subtitleUrl = subtitleData.urls[0];

        platformVideoDetails.subtitles.push({
          name: subtitleData.label,
          url: subtitleUrl,
          format: 'text/vtt',
          getSubtitles() {
            try {
              const subResp = http.GET(subtitleUrl, {});

              if (!subResp.isOk) {
                if (IS_TESTING) {
                  logger.error(`Failed to fetch subtitles from ${subtitleUrl}`);
                }
                return '';
              }
              return convertSRTtoVTT(subResp.body);
            } catch (error: any) {
              if (IS_TESTING) {
                logger.error(`Error fetching subtitles: ${error?.message}`);
              }
              return '';
            }
          },
        });
      }
    });
  }

  return platformVideoDetails;
};