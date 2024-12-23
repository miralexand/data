export interface WeatherResponse {
  current: {
    temp_c: number;
    humidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  location: {
    name: string;
    region: string;
  };
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  condition: string;
  iconUrl: string;
  location: string;
}