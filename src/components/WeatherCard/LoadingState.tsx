import React from 'react';
import { Cloud, Loader2 } from 'lucide-react';
import { CardWrapper } from './CardWrapper';

export function LoadingState() {
  return (
    <CardWrapper>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Cloud className="mr-2" />
        贵阳天气
      </h2>
      <div className="flex items-center justify-center p-4">
        <Loader2 className="animate-spin" />
        <span className="ml-2">加载中...</span>
      </div>
    </CardWrapper>
  );
}