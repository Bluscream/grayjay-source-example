import { ISourcePluginSettings } from '../types/types';
import { DEFAULT_HEADERS, PLATFORM_SHORT } from './constants';

enum LogLevel {
  None,
  Critical,
  Error,
  Warning,
  Notice,
  Information,
  Debug,
  Trace
}

export class Logger {
  private static instance: Logger;
  private settings: ISourcePluginSettings;


  private constructor(settings: ISourcePluginSettings) {this.settings = settings}

  public static getInstance(settings: ISourcePluginSettings): Logger {
    if (!Logger.instance) Logger.instance = new Logger(settings);
    return Logger.instance;
  }

  public log(message: any, log_level: LogLevel = LogLevel.Information): string {
    message = JSON.stringify(message);
    const formattedMessage: string = `[${new Date().toISOString()}] [${PLATFORM_SHORT}] ${message}`;
    
    if (log_level >= this.settings.log_level_log_index) {
      console.log(formattedMessage);
      bridge.log(formattedMessage);
    }
    if (log_level >= this.settings.log_level_toast_index) {
      bridge.toast(message);
    }    
    return formattedMessage;
  }

  public none(message: any): string {
    return this.log(message, LogLevel.Information);
  }

  public critical(message: any): string {
    return this.log(message, LogLevel.Critical);
  }

  public error(message: any): string {
    return this.log(message, LogLevel.Error);
  }

  public warning(message: any): string {
    return this.log(message, LogLevel.Warning);
  }

  public info(message: any): string {
    return this.log(message, LogLevel.Information);
  }

  public debug(message: any): string {
    return this.log(message, LogLevel.Debug);
  }

  public trace(message: any): string {
    return this.log(message, LogLevel.Trace);
  }
}

export const prepend = (array: any[], value: any): any[] => {
  const newArray: any[] = array.slice();
  newArray.unshift(value);
  return newArray;
}

export const isNullOrEmpty = (str: string | null): boolean => {
  return str === null || str === "";
}

export const isObjectEmpty = (obj: object): boolean => {
  return obj !== null && Object.keys(obj).length === 0;
}

export const atob = (encodedData: string): string => {
  return String.fromCharCode(...utility.fromBase64(encodedData)); // type: ignore
}

export const btoa = (decodedData: string): string => utility.toBase64(decodedData)

export const objectToUrlEncodedString = (obj: Record<string, string>): string => {
  const encodedParams: string[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(obj[key]);
      encodedParams.push(`${encodedKey}=${encodedValue}`);
    }
  }

  return encodedParams.join('&');
};

export function getChannelNameFromUrl(url: string) {
  const channel_name = url.split('/').pop();
  return channel_name;
}

export const parseUploadDateFilter = (filter: string): string | null => {
  let createdAfterVideos: string | null = null;
  const now = new Date();

  switch (filter) {
    case 'today': {
      // Last 24 hours from now
      const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      createdAfterVideos = yesterday.toISOString();
      break;
    }
    case 'thisweek': {
      // Adjusts to the start of the current week (assuming week starts on Sunday)
      const startOfWeek = new Date(now.getTime());
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
      createdAfterVideos = new Date(
        startOfWeek.getFullYear(),
        startOfWeek.getMonth(),
        startOfWeek.getDate(),
      ).toISOString();
      break;
    }
    case 'thismonth': {
      // Adjusts to the start of the month
      createdAfterVideos = new Date(
        now.getFullYear(),
        now.getMonth(),
        1,
      ).toISOString();
      break;
    }
    case 'thisyear': {
      // Adjusts to the start of the year
      createdAfterVideos = new Date(now.getFullYear(), 0, 1).toISOString();
      break;
    }
  }

  return createdAfterVideos;
};

export const parseSort = (order: string) => {
  let sort;
  switch (order) {
    //TODO: refact this to use constants
    case 'Most Recent':
      sort = 'RECENT';
      break;
    case 'Most Viewed':
      sort = 'VIEW_COUNT';
      break;
    case 'Most Relevant':
      sort = 'RELEVANCE';
      break;
    default:
      sort = order; // Default to the original order if no match
  }
  return sort;
};

export const getQuery = (context: any) => {
  context.sort = parseSort(context.order);

  if (!context.filters) {
    context.filters = {};
  }

  if (!context.page) {
    context.page = 1;
  }

  // if (context?.filters.duration) {
  //   context.filters.durationMinVideos =
  //     DURATION_THRESHOLDS[context.filters.duration].min;
  //   context.filters.durationMaxVideos =
  //     DURATION_THRESHOLDS[context.filters.duration].max;
  // } else {
    context.filters.durationMinVideos = null;
    context.filters.durationMaxVideos = null;
  // }

  if (context.filters.uploaddate) {
    context.filters.createdAfterVideos = parseUploadDateFilter(
      context.filters.uploaddate[0],
    );
  }

  return context;
};

export function generateUUIDv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function applyCommonHeaders(headers: Record<string, string>={}) : Record<string, string>{
  return { ...DEFAULT_HEADERS, ...headers };
}

/**
 * Converts SRT subtitle format to VTT format.
 *
 * @param {string} srt - The SRT subtitle string.
 * @returns {string} - The converted VTT subtitle string.
 */
export const convertSRTtoVTT = (srt: string) => {
  // Initialize the VTT output with the required header
  const vtt = ['WEBVTT\n\n'];
  // Split the SRT input into blocks based on double newlines
  const srtBlocks = srt.split('\n\n');

  // Process each block individually
  srtBlocks.forEach((block) => {
    // Split each block into lines
    const lines = block.split('\n');
    if (lines.length >= 3) {
      // Extract and convert the timestamp line
      const timestamp = lines[1].replace(/,/g, '.');
      // Extract the subtitle text lines
      const subtitleText = lines.slice(2).join('\n');
      // Add the converted block to the VTT output
      vtt.push(`${timestamp}\n${subtitleText}\n\n`);
    }
  });

  // Join the VTT array into a single string and return it
  return vtt.join('');
};
