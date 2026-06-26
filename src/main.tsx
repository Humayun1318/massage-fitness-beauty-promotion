import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/styles/index.css';
import 'leaflet/dist/leaflet.css';

// Initialize theme - ALWAYS start with dark mode
const initTheme = () => {
  const stored = localStorage.getItem('theme');

  // If user has previously selected a theme, use that
  if (stored) {
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } else {
    // Default to dark mode on first visit
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};
initTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
