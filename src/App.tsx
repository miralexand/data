import React from 'react';
import { WeatherCard } from './components/WeatherCard';
import { GDPChart } from './components/GDPChart';
import { PopulationStats } from './components/PopulationStats';
import { MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-green-600 to-green-800 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <MapPin className="w-8 h-8 mr-2" />
            <h1 className="text-3xl font-bold">贵州省数据大看板</h1>
          </div>
          <p className="mt-2 text-green-100">实时数据监控与分析平台</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WeatherCard />
          <PopulationStats />
          <div className="lg:col-span-3">
            <GDPChart />
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>数据来源：国家统计局、贵州省统计局、OpenWeatherMap</p>
          <p>最后更新时间：{new Date().toLocaleString('zh-CN')}</p>
        </div>
      </main>
    </div>
  );
}

export default App;