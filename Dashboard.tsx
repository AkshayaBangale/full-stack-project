// src/pages/Dashboard.tsx
import { useState } from 'react';
import { DollarSign, Users, ShoppingCart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [isAddProfileOpen, setIsAddProfileOpen] = useState(false);

  const metrics: MetricCard[] = [
    {
      title: 'Total Revenue',
      value: '$2,129,430',
      change: 2.5,
      icon: <DollarSign size={24} className="text-green-600" />,
    },
    {
      title: 'Total Transactions',
      value: '1,520',
      change: 1.7,
      icon: <ShoppingCart size={24} className="text-yellow-600" />,
    },
    {
      title: 'Total Users',
      value: '9,721',
      change: 1.4,
      icon: <Users size={24} className="text-blue-600" />,
    },
  ];

  const activityData: ActivityData[] = [
    { week: 1, users: 500, guests: 400 },
    { week: 2, users: 350, guests: 450 },
    { week: 3, users: 200, guests: 300 },
    { week: 4, users: 400, guests: 350 },
  ];

  const products: Product[] = [
    { name: 'Basic Tees', percentage: 55, color: '#4ade80' },
    { name: 'Custom Short Pants', percentage: 31, color: '#facc15' },
    { name: 'Super Hoodies', percentage: 14, color: '#f87171' },
  ];

  const handleAddProfile = (data: Partial<User>) => {
    console.log('New profile data:', data);
    // Here you would typically make an API call to save the profile
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={() => setIsAddProfileOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <ActivityChart data={activityData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductsChart products={products} />
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
          <button
            onClick={() => setIsAddProfileOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            + Add Profile
          </button>
        </div>
      </div>

      <AddProfileModal
        isOpen={isAddProfileOpen}
        onClose={() => setIsAddProfileOpen(false)}
        onSubmit={handleAddProfile}
      />
    </div>
  );
};

export default Dashboard;