import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

const gdpData = [
  { year: 2019, value: 16769.34, growth: 8.3 },
  { year: 2020, value: 17826.56, growth: 4.5 },
  { year: 2021, value: 19597.56, growth: 8.1 },
  { year: 2022, value: 21000.00, growth: 5.3 },
];

export function GDPChart() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <TrendingUp className="mr-2" />
        贵州省GDP趋势
      </h2>
      <div className="w-full overflow-x-auto">
        <BarChart width={600} height={300} data={gdpData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name="GDP (亿元)" fill="#4F46E5" />
          <Bar dataKey="growth" name="增长率 (%)" fill="#10B981" />
        </BarChart>
      </div>
    </div>
  );
}