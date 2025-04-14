import React from 'react';
import NavTabs from './NavTabs';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-md mx-auto bg-white shadow-sm rounded-b-2xl overflow-hidden">
        <Outlet />
        <NavTabs />
      </div>
    </div>
  );
}
