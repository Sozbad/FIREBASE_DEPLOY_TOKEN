// src/components/NavTabs.jsx
import { Search, BookText, Upload } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
  const { pathname } = useLocation();

  const tabs = [
    { to: '/', label: 'Search', icon: <Search size={20} /> },
    { to: '/blog', label: 'Blog', icon: <BookText size={20} /> },
    { to: '/admin-import', label: 'Admin', icon: <Upload size={20} /> }
  ];

  return (
    <nav className="fixed bottom-0 w-full border-t bg-white flex justify-around py-2 z-50">
      {tabs.map(({ to, label, icon }) => (
        <Link
          key={to}
          to={to}
          className={`flex flex-col items-center text-xs ${
            pathname === to ? 'text-black' : 'text-gray-400'
          }`}
        >
          {icon}
          {label}
        </Link>
      ))}
    </nav>
  );
}
