import { ISourcePluginSettings } from "../types/types";

export const BASE_URL = '<SOURCE_PLATFORM_URL>';
export const BASE_URL_API = '<SOURCE_API_BASE_URL>';
export const BASE_URL_COMMENTS = '<SOURCE_API_BASE_URL>/comments';
export const BASE_URL_VIDEO = `<SOURCE_API_BASE_URL>/video`;
export const BASE_URL_PLAYLIST = `<SOURCE_API_BASE_URL>/playlist`;
export const BASE_URL_CHANNEL = `<SOURCE_API_BASE_URL>/channel`;

export const REGEX_VIDEO_URL = <SOURCE_REGEX_VIDEO_URL>;
export const REGEX_CHANNEL_URL = <SOURCE_REGEX_CHANNEL_URL>;
export const REGEX_PLAYLIST_URL = <SOURCE_REGEX_PLAYLIST_URL>;

export const USER_AGENT = '<SOURCE_USER_AGENT>';

export const PLATFORM = '<SOURCE_TITLE>';
export const PLATFORM_SHORT = '<SOURCE_SHORTNAME>';

export const PLATFORM_CLAIMTYPE = 0;

export const ERROR_TYPES = {

};

export const SEARCH_CAPABILITIES = {
  types: [Type.Feed.Mixed],
  sorts: ['Most Recent', 'Most Viewed', 'Most Relevant'],
  filters: [
    {
      id: 'uploaddate',
      name: 'Upload Date',
      isMultiSelect: false,
      filters: [
        { name: 'Today', value: 'today' },
        { name: 'Past week', value: 'thisweek' },
        { name: 'Past month', value: 'thismonth' },
        { name: 'Past year', value: 'thisyear' },
      ],
    },
    {
      id: 'duration',
      name: 'Duration',
      isMultiSelect: false,
      filters: [

      ],
    },
  ],
};

// Used to on source.getUserPlaylists to specify if the playlist is private or not. This is read by source.getPlaylist to enable the authentication context.
export const PRIVATE_PLAYLIST_QUERY_PARAM_FLAGGER = '&private=1';

export const DEFAULT_HEADERS:Record<string, string> = {
  'User-Agent': USER_AGENT,
  Origin: BASE_URL,
};

export const DEFAULT_SETTINGS:ISourcePluginSettings = {
  enable: true,
  prefered_country_code_index: 0, // Global
  log_level_log_index: 3, // Warning
  log_level_toast_index: 2, // Error
}