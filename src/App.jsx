import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AdminImport from './pages/AdminImport';
import NavTabs from './components/NavTabs';

export default function App() {
  return (
    <Router>
      <NavTabs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/admin-import' element={<AdminImport />} />
      </Routes>
    </Router>
  );
}