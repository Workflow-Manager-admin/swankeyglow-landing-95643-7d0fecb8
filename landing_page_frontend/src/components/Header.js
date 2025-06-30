import React, { useState } from 'react';

// PUBLIC_INTERFACE
function Header({ theme, toggleTheme }) {
  /**
   * Swankey-inspired modern, responsive landing page Header.
   * Includes: logo, navigation links, CTA buttons, theme toggle, sticky/fixed, mobile menu.
   */
  const [navOpen, setNavOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' }
  ];

  // Toggle mobile menu state
  const handleNavToggle = () => setNavOpen((open) => !open);

  // Close mobile menu on navigation link click (optional)
  const handleLinkClick = () => setNavOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-[#1a1a1a]/80 transition backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 xs:px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-extrabold text-2xl text-blue-700 dark:text-blue-300 tracking-tight select-none"
          aria-label="Homepage"
        >
          {/* Placeholder logo as SVG */}
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 dark:bg-blue-500">
            <svg width="20" height="20" viewBox="0 0 20 20"
              className="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" fill="#fff" opacity="0.2"/>
              <path d="M5.5 11C5.5 8.51472 7.51472 6.5 10 6.5C12.4853 6.5 14.5 8.51472 14.5 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="9" r="2" fill="#fff" />
            </svg>
          </span>
          Swankey
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 lg:gap-2 xl:gap-4 ml-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2 py-1 rounded-lg text-gray-700 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-950 focus:outline-none focus-visible:ring-2 ring-blue-400 transition font-medium text-base"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-2 ml-3">
          <button
            className="border border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-200 bg-transparent py-1.5 px-5 rounded-lg font-semibold transition hover:bg-blue-50 dark:hover:bg-blue-950 focus:outline-none focus-visible:ring-2 ring-blue-300"
            type="button"
          >
            Login
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-1.5 px-5 rounded-lg font-semibold shadow transition focus:outline-none focus-visible:ring-2 ring-blue-300"
            type="button"
          >
            Get Started
          </button>
          {/* Theme toggle is present on all screens */}
          <button
            className="ml-3 theme-toggle flex items-center text-xl p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-950 transition"
            style={{ color: '#ffffff', backgroundColor: '#172554' }}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            type="button"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex items-center px-2 py-2 rounded-lg focus:outline-none focus-visible:ring-2 ring-blue-400 transition hover:bg-blue-50 dark:hover:bg-blue-950"
          aria-label={navOpen ? "Close menu" : "Open menu"}
          aria-expanded={navOpen}
          aria-controls="mobile-menu"
          onClick={handleNavToggle}
          type="button"
        >
          <span className="sr-only">Menu</span>
          {/* Hamburger icon */}
          <svg
            className={`${navOpen ? "hidden" : "block"} w-7 h-7`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 8h16M4 16h16" />
          </svg>
          {/* X icon */}
          <svg
            className={`${navOpen ? "block" : "hidden"} w-7 h-7`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 w-full h-full z-40 bg-white/95 dark:bg-[#1a1a1ae6] flex flex-col px-3 xs:px-4 sm:px-6 py-4 sm:py-6 transition-all duration-300 ${navOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}`}
        style={{
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)'
        }}
        aria-hidden={!navOpen}
      >
        <div className="flex items-center justify-between mb-7 xs:mb-8">
          {/* Logo (mobile) */}
          <a
            href="/"
            className="flex items-center gap-2 font-extrabold text-2xl text-blue-700 dark:text-blue-300 tracking-tight"
            aria-label="Homepage"
            onClick={handleLinkClick}
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 dark:bg-blue-500">
              <svg width="20" height="20" viewBox="0 0 20 20"
                className="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" fill="#fff" opacity="0.2"/>
                <path d="M5.5 11C5.5 8.51472 7.51472 6.5 10 6.5C12.4853 6.5 14.5 8.51472 14.5 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="10" cy="9" r="2" fill="#fff" />
              </svg>
            </span>
            Swankey
          </a>
          {/* Close button */}
          <button
            className="flex items-center p-2 rounded-lg focus:outline-none hover:bg-blue-100 dark:hover:bg-blue-950"
            aria-label="Close menu"
            onClick={handleNavToggle}
            type="button"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2 py-3 rounded-lg text-gray-700 dark:text-gray-100 text-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900 transition"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* CTA Buttons */}
        <div className="flex flex-col gap-2 mt-8">
          <button
            className="border border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-200 bg-transparent py-2 px-6 rounded-lg font-semibold transition hover:bg-blue-50 dark:hover:bg-blue-950"
            type="button"
          >
            Login
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold shadow transition"
            type="button"
          >
            Get Started
          </button>
          <button
            className="theme-toggle flex items-center justify-center text-xl p-2 rounded-full mt-2 hover:bg-blue-100 dark:hover:bg-blue-950 transition"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            type="button"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
