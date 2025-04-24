import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // ✅ make sure this includes Tailwind directives
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
