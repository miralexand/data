import React from 'react';
import { Cloud, AlertCircle } from 'lucide-react';
import { CardWrapper } from './CardWrapper';

export function ErrorState() {
  return (
    <CardWrapper>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Cloud className="mr-2" />
        贵阳天气
      </h2>
      <div className="flex items-center justify-center p-4 text-red-500">
        <AlertCircle className="mr-2" />
        <span>获取天气数据失败</span>
      </div>
    </CardWrapper>
  );
}