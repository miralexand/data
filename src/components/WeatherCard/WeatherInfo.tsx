import React from 'react';
import { Cloud, Droplets, Thermometer } from 'lucide-react';
import { WeatherData } from '../../types/weather';
import { CardWrapper } from './CardWrapper';

interface WeatherInfoProps {
  weather: WeatherData;
}

export function WeatherInfo({ weather }: WeatherInfoProps) {
  return (
    <CardWrapper>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Cloud className="mr-2" />
        {weather.location}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Thermometer className="mr-2 text-red-500" />
          <div>
            <p className="text-sm text-gray-600">温度</p>
            <p className="text-xl font-bold">{Math.round(weather.temperature)}°C</p>
          </div>
        </div>
        <div className="flex items-center">
          <Droplets className="mr-2 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">湿度</p>
            <p className="text-xl font-bold">{weather.humidity}%</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <img src={weather.iconUrl} alt={weather.condition} className="w-12 h-12" />
        <span className="ml-2 text-gray-700">{weather.condition}</span>
      </div>
    </CardWrapper>
  );
}