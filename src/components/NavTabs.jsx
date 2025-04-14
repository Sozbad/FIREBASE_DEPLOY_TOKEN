import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Info,
  BookOpen,
  Clock,
  Shield,
  Upload
} from 'lucide-react';

const tabs = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'About', path: '/about', icon: Info },
  { label: 'Blog', path: '/blog', icon: BookOpen },
  { label: 'History', path: '/history', icon: Clock },
  { label: 'Admin', path: '/admin', icon: Upload }
];

export default function NavTabs() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-inner px-4 py-2 flex justify-around">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        const Icon = tab.icon;

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`flex flex-col items-center text-xs font-medium ${
              isActive ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
