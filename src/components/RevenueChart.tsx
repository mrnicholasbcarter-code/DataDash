import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { MetricData } from '../types';

interface RevenueChartProps {
  data: MetricData[];
  darkMode?: boolean;
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data, darkMode = false }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue Trend</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#444' : '#e5e7eb'} />
          <XAxis dataKey="timestamp" stroke={darkMode ? '#999' : '#6b7280'} />
          <YAxis stroke={darkMode ? '#999' : '#6b7280'} />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? '#1f2937' : '#ffffff',
              border: `1px solid ${darkMode ? '#444' : '#e5e7eb'}`,
              color: darkMode ? '#fff' : '#000',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6' }}
            name="Revenue"
          />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981' }}
            name="Orders"
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ fill: '#f59e0b' }}
            name="Users"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
