import React from 'react';
import { Cloud, Droplets, Thermometer, Loader2 } from 'lucide-react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function WeatherCard() {
  const { data, error, isLoading } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=guiyang&units=metric&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
    fetcher
  );

  // 错误处理
  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Cloud className="mr-2" />
          贵阳天气
        </h2>
        <div className="text-red-500">获取天气数据失败</div>
      </div>
    );
  }

  // 加载中处理
  if (isLoading || !data) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Cloud className="mr-2" />
          贵阳天气
        </h2>
        <div className="flex items-center justify-center p-4">
          <Loader2 className="animate-spin" />
          <span className="ml-2">加载中...</span>
        </div>
      </div>
    );
  }

  // 确保数据有效后才渲染
  if (!data?.main || typeof data.main.temp === 'undefined') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Cloud className="mr-2" />
          贵阳天气
        </h2>
        <div className="text-red-500">天气数据不可用</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Cloud className="mr-2" />
        贵阳天气
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Thermometer className="mr-2 text-red-500" />
          <div>
            <p className="text-sm text-gray-600">温度</p>
            <p className="text-xl font-bold">{Math.round(data.main.temp)}°C</p>
          </div>
        </div>
        <div className="flex items-center">
          <Droplets className="mr-2 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">湿度</p>
            <p className="text-xl font-bold">{data.main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
