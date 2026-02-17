export interface MetricData {
  timestamp: string;
  revenue: number;
  users: number;
  orders: number;
  conversionRate: number;
}

export interface DashboardMetric {
  label: string;
  value: number | string;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
}

export interface FilterOptions {
  timeRange: 'day' | 'week' | 'month' | 'year';
  metric: 'revenue' | 'users' | 'orders';
}
