import { Video, Live } from "./CodeGen";

type PlatformStreamingContent = Video | Live | null;

interface ISourcePluginSettings {
  enable: boolean;
  prefered_country_code_index: number;
  log_level_log_index: number;
  log_level_toast_index: number;
}

interface IPlatformSubtitle {
  data: Map<string, string, { urls: string[]; label: string }>;
  enable: boolean;
}

interface IPlatformSystemPlaylist {
  pluginId: string;
  httpClient: IHttp;
  query: string;
  operationName: string;
  rootObject: string;
  playlistName: string;
  usePlatformAuth: boolean;
  thumbnailResolutionIndex: number;
}

type AnonymousUserAuthorization = {
  anonymousUserAuthorizationToken?: string,
  anonymousUserAuthorizationTokenExpirationDate?: number,
  isValid: boolean
} 