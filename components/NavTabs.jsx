// src/components/NavTabs.jsx
import { Home, Search, BookText, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
  const { pathname } = useLocation();
  const tabs = [
    { to: '/', icon: <Search />, label: 'Search' },
    { to: '/blog', icon: <BookText />, label: 'Blog' },
    { to: '/admin-import', icon: <User />, label: 'Admin' }
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-2 z-50">
      {tabs.map(tab => (
        <Link key={tab.to} to={tab.to} className={`flex flex-col items-center text-xs ${pathname === tab.to ? 'text-black' : 'text-gray-400'}`}>
          {tab.icon}
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
