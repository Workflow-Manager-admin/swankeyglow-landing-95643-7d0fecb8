import React from 'react';

// PUBLIC_INTERFACE
function Header({ theme, toggleTheme }) {
  /** Header for the landing page: shows logo, nav, and theme toggle */
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Logo Placeholder */}
      <div className="font-bold text-2xl text-blue-700">Swankey</div>
      {/* Navigation Placeholder */}
      <nav className="space-x-6 hidden md:block">
        {/* Add nav links here in real version */}
        <span className="text-gray-700 dark:text-gray-100">Features</span>
        <span className="text-gray-700 dark:text-gray-100">About Us</span>
        <span className="text-gray-700 dark:text-gray-100">FAQ</span>
        <span className="text-gray-700 dark:text-gray-100">Contact</span>
        <span className="text-gray-700 dark:text-gray-100">Pricing</span>
        <span className="text-gray-700 dark:text-gray-100">Blog</span>
      </nav>
      {/* Buttons Placeholder */}
      <div className="flex items-center gap-2">
        <button className="border border-blue-700 text-blue-700 py-1 px-4 rounded transition hover:bg-blue-50">
          Login
        </button>
        <button className="bg-blue-700 text-white py-1 px-4 rounded transition hover:bg-blue-800">
          Get Started
        </button>
        {/* Theme Toggle Button (pass control from App) */}
        <button
          className="ml-4 theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}

export default Header;
