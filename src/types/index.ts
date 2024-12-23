export interface WeatherData {
  temp: number;
  humidity: number;
  description: string;
  icon: string;
}

export interface GDPData {
  year: number;
  value: number;
  growth: number;
}

export interface PopulationData {
  year: number;
  total: number;
  urban: number;
  rural: number;
}