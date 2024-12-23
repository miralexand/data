import useSWR from 'swr';
import { WeatherData } from '../types/weather';
import { WEATHER_API_BASE_URL, WEATHER_API_KEY } from '../config/api';
import { transformWeatherData } from '../utils/weatherTransform';

const fetcher = async (url: string): Promise<WeatherData> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  return transformWeatherData(data);
};

export function useWeather(city: string) {
  const { data, error, isLoading } = useSWR<WeatherData>(
    `${WEATHER_API_BASE_URL}/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`,
    fetcher,
    {
      refreshInterval: 300000, // 刷新间隔5分钟
      revalidateOnFocus: false
    }
  );

  return {
    weather: data,
    error,
    isLoading
  };
}