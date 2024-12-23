import React from 'react';
import { useWeather } from '../../hooks/useWeather';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';
import { WeatherInfo } from './WeatherInfo';

export function WeatherCard() {
  const { weather, error, isLoading } = useWeather('guiyang');

  if (error) return <ErrorState />;
  if (isLoading || !weather) return <LoadingState />;
  
  return <WeatherInfo weather={weather} />;
}