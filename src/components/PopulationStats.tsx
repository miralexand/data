import React from 'react';
import { Users } from 'lucide-react';

const populationData = {
  total: 38.562,
  urban: 23.137,
  rural: 15.425,
  year: 2022
};

export function PopulationStats() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Users className="mr-2" />
        人口统计 ({populationData.year})
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">总人口</p>
          <p className="text-2xl font-bold text-blue-600">{populationData.total}百万</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">城镇人口</p>
          <p className="text-2xl font-bold text-green-600">{populationData.urban}百万</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">农村人口</p>
          <p className="text-2xl font-bold text-yellow-600">{populationData.rural}百万</p>
        </div>
      </div>
    </div>
  );
}