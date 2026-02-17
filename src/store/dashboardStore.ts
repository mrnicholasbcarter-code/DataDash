import { create } from 'zustand';
import type { FilterOptions, DashboardMetric, MetricData } from '../types';

interface DashboardStore {
  isDarkMode: boolean;
  filters: FilterOptions;
  metrics: DashboardMetric[];
  chartData: MetricData[];
  toggleDarkMode: () => void;
  setFilter: (key: keyof FilterOptions, value: any) => void;
  setMetrics: (metrics: DashboardMetric[]) => void;
  setChartData: (data: MetricData[]) => void;
}

// Sample data
const sampleMetrics: DashboardMetric[] = [
  {
    label: 'Total Revenue',
    value: '$124,520',
    change: 12.5,
    changeType: 'positive',
    icon: '💰',
  },
  {
    label: 'Active Users',
    value: '8,234',
    change: 5.2,
    changeType: 'positive',
    icon: '👥',
  },
  {
    label: 'Total Orders',
    value: '1,458',
    change: -2.1,
    changeType: 'negative',
    icon: '📦',
  },
  {
    label: 'Conversion Rate',
    value: '3.24%',
    change: 0.8,
    changeType: 'positive',
    icon: '📈',
  },
];

const sampleChartData: MetricData[] = [
  { timestamp: 'Jan', revenue: 45000, users: 5200, orders: 320, conversionRate: 2.8 },
  { timestamp: 'Feb', revenue: 52000, users: 5800, orders: 385, conversionRate: 2.9 },
  { timestamp: 'Mar', revenue: 48000, users: 5400, orders: 358, conversionRate: 2.7 },
  { timestamp: 'Apr', revenue: 61000, users: 6800, orders: 420, conversionRate: 3.1 },
  { timestamp: 'May', revenue: 55000, users: 6200, orders: 390, conversionRate: 3.0 },
  { timestamp: 'Jun', revenue: 67000, users: 7400, orders: 450, conversionRate: 3.2 },
  { timestamp: 'Jul', revenue: 72000, users: 8234, orders: 485, conversionRate: 3.24 },
];

export const useDashboardStore = create<DashboardStore>((set) => ({
  isDarkMode: false,
  filters: {
    timeRange: 'month',
    metric: 'revenue',
  },
  metrics: sampleMetrics,
  chartData: sampleChartData,

  toggleDarkMode: () =>
    set((state) => ({
      isDarkMode: !state.isDarkMode,
    })),

  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),

  setMetrics: (metrics) => set({ metrics }),
  setChartData: (data) => set({ chartData: data }),
}));
