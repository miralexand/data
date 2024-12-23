import React, { ReactNode } from 'react';

interface CardWrapperProps {
  children: ReactNode;
}

export function CardWrapper({ children }: CardWrapperProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {children}
    </div>
  );
}