// src/components/Layout.tsx
import React from 'react';
import { Settings, Users, Calendar, BarChart2, Home } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/' },
    { icon: <BarChart2 size={20} />, label: 'Transactions', path: '/transactions' },
    { icon: <Calendar size={20} />, label: 'Schedules', path: '/schedules' },
    { icon: <Users size={20} />, label: 'Users', path: '/users' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-blue-600 text-white p-6">
        <div className="text-2xl font-bold mb-8">Board.</div>
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center space-x-3 p-2 rounded hover:bg-blue-700"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
};
export{};