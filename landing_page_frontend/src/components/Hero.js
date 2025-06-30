import React from 'react';

// PUBLIC_INTERFACE
function Hero() {
  /** Hero section with headline, subheading, and buttons (placeholder) */
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Modern Landing Page <span className="text-blue-700">for Swankey</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
        Effortlessly showcase your business with an elegant, responsive experience built on React and Tailwind CSS.
      </p>
      <div className="flex justify-center gap-4">
        <button className="border border-blue-700 text-blue-700 py-2 px-6 rounded-lg transition hover:bg-blue-50">
          Why Swankey?
        </button>
        <button className="bg-blue-700 text-white py-2 px-6 rounded-lg transition hover:bg-blue-800 shadow">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
