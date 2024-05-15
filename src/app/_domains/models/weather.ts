export interface Weather {
  lat: string;
  lon: string;
  elevation: number;
  timezone: string;
  units: string;
  current: Current;
}

export interface Current {
  icon: string;
  icon_num: number;
  summary: string;
  temperature: number;
  feels_like: number;
  wind_chill: number;
  dew_point: number;
  wind: Wind;
  precipitation: Precipitation;
  cloud_cover: number;
  ozone: number;
  pressure: number;
  uv_index: number;
  humidity: number;
  visibility: number;
}

export interface Wind {
  speed: number;
  gusts: number;
  angle: number;
  dir: string;
}

export interface Precipitation {
  total: number;
  type: string;
}
