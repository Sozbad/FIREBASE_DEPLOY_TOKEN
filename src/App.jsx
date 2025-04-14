import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import AdminImport from './pages/AdminImport';
import History from './pages/History';
import ProductDetail from './pages/ProductDetail';
import MainLayout from './components/MainLayout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<AdminImport />} />
          <Route path="/history" element={<History />} />
          <Route path="/detail" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
