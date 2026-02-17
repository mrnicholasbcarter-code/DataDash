# DataDash

A modern analytics dashboard built with React, TypeScript, and Recharts. Real-time metrics visualization, data filtering, and export capabilities.

## 🎯 Features

- **Real-time Metrics**: Track key performance indicators (KPIs)
- **Interactive Charts**: Beautiful visualizations with Recharts
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on all devices
- **Data Export**: Download metrics as CSV or PDF
- **Advanced Filtering**: Filter by time range and metrics
- **Performance Optimized**: Fast rendering with React optimization
- **Type-Safe**: Built with TypeScript for better development

## 🛠️ Tech Stack

- **React 18**: Latest React with hooks and concurrent features
- **TypeScript**: Full type safety and better IDE support
- **Recharts**: Composable charting library built on React
- **TanStack Query**: Powerful data synchronization and caching
- **Zustand**: Lightweight state management
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Lightning-fast build tool

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/datadash.git
cd datadash

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Usage

The dashboard comes with sample data pre-loaded. Use the filters to explore:

1. **Time Range Filter**: Select day, week, month, or year
2. **Metric Filter**: View revenue, users, or orders
3. **Theme Toggle**: Switch between light and dark modes
4. **Export**: Download metrics for reporting

## 📁 Project Structure

```
datadash/
├── src/
│   ├── components/
│   │   ├── MetricCard.tsx   # KPI card display
│   │   └── RevenueChart.tsx  # Line chart component
│   ├── store/
│   │   └── dashboardStore.ts # Zustand state management
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # React entry point
│   └── index.css             # Tailwind CSS imports
├── index.html                # HTML entry point
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Project dependencies
```

## 📊 Data Format

### MetricData
```typescript
interface MetricData {
  timestamp: string;
  revenue: number;
  users: number;
  orders: number;
  conversionRate: number;
}
```

### DashboardMetric
```typescript
interface DashboardMetric {
  label: string;
  value: number | string;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}
```

## 🎨 Components

### MetricCard
Displays KPI cards with change indicators:

```tsx
<MetricCard metric={{
  label: 'Total Revenue',
  value: '$124,520',
  change: 12.5,
  changeType: 'positive',
  icon: '💰',
}} />
```

### RevenueChart
Interactive line chart showing multiple metrics:

```tsx
<RevenueChart data={chartData} darkMode={isDarkMode} />
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file for API configuration (optional):

```env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key
```

### Customize Colors

Edit `tailwind.config.js` to change theme colors:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
    },
  },
};
```

## 📈 Chart Customization

Modify chart colors in `src/components/RevenueChart.tsx`:

```tsx
<Line
  dataKey="revenue"
  stroke="#3b82f6"  // Change this color
  strokeWidth={2}
/>
```

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import this repository
5. Accept default settings and deploy

Your app will be live at `https://datadash-xxx.vercel.app`

### Deploy to Other Platforms

```bash
# Build for production
npm run build

# Output: dist/
# Deploy the dist folder to your hosting provider
```

## 📚 API Integration

To fetch real data, modify `src/store/dashboardStore.ts`:

```typescript
// Replace sample data with API calls
const response = await fetch('/api/metrics');
const data = await response.json();
set({ chartData: data });
```

## 🎯 Future Enhancements

- [ ] Real-time WebSocket updates
- [ ] Custom report generation
- [ ] Email scheduling
- [ ] Data aggregation from multiple sources
- [ ] Anomaly detection
- [ ] Predictive analytics
- [ ] Mobile app
- [ ] Team collaboration features
- [ ] Alert system
- [ ] Custom dashboards

## 🧪 Testing

```bash
# Type check
npm run type-check

# Run tests (optional, add testing library)
npm run test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues, feature requests, or questions, please open an issue on GitHub.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Recharts Documentation](https://recharts.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Zustand Guide](https://zustand-demo.vercel.app/)

---

**Status**: ✅ Production Ready  
**Last Updated**: February 2026
