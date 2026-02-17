import React from 'react';
import type { DashboardMetric } from '../types';

interface MetricCardProps {
  metric: DashboardMetric;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const changeColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600',
  };

  const changeArrow = {
    positive: '📈',
    negative: '📉',
    neutral: '→',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-600 text-sm font-medium">{metric.label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
        </div>
        <div className="text-3xl">{metric.icon}</div>
      </div>

      <div className={`flex items-center gap-2 ${changeColor[metric.changeType]}`}>
        <span>{changeArrow[metric.changeType]}</span>
        <span className="text-sm font-semibold">
          {Math.abs(metric.change)}% {metric.change > 0 ? 'increase' : 'decrease'}
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-2">from last month</p>
    </div>
  );
};
