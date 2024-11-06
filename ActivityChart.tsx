// src/components/ActivityChart.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const ActivityChart: React.FC<{ data: ActivityData[] }> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Activities</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Bar dataKey="users" fill="#4ade80" name="Users" />
            <Bar dataKey="guests" fill="#f87171" name="Guests" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export {};

