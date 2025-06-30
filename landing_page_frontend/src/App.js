import React, { useState, useEffect } from 'react';
import './App.css';

// Import modular components
import Header from './components/Header';
import Hero from './components/Hero';
import MockupSection from './components/MockupSection';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App bg-white dark:bg-[#1a1a1a] min-h-screen transition-colors">
      {/* Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Hero />

      {/* Mockup / Browser Section */}
      <MockupSection />

      {/* Footer placeholder can go here in future */}
    </div>
  );
}

export default App;
