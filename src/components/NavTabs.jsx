import { Search, BookText, Upload } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
  const { pathname } = useLocation();

  const tabs = [
    { to: '/', label: 'Search', icon: Search },
    { to: '/blog', label: 'Blog', icon: BookText },
    { to: '/admin-import', label: 'Admin', icon: Upload }
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t shadow-inner z-50">
      <div className="flex justify-around py-2">
        {tabs.map(({ to, label, icon: Icon }) => {
          const isActive = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center text-xs transition-all ${
                isActive ? 'text-black font-semibold' : 'text-gray-400'
              }`}
            >
              <Icon size={20} />
              <span className="mt-1">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
