import { WeatherResponse, WeatherData } from '../types/weather';

export function transformWeatherData(data: WeatherResponse): WeatherData {
  return {
    temperature: data.current.temp_c,
    humidity: data.current.humidity,
    condition: data.current.condition.text,
    iconUrl: `https:${data.current.condition.icon}`,
    location: `${data.location.name}, ${data.location.region}`
  };
}