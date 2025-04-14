import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
  const { pathname } = useLocation();

  const tabs = [
    { to: '/', label: 'Search' },
    { to: '/blog', label: 'Blog' },
    { to: '/admin-import', label: 'Admin' }
  ];

  return (
    <nav className="fixed bottom-0 w-full border-t bg-white flex justify-around py-2 z-50">
      {tabs.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`flex flex-col items-center text-xs ${
            pathname === to ? 'text-black' : 'text-gray-400'
          }`}
        >
          <div className="text-lg">⬤</div> {/* Placeholder icon */}
          {label}
        </Link>
      ))}
    </nav>
  );
}
