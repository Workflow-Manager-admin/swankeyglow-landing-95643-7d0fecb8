import React from 'react';

// PUBLIC_INTERFACE
function MockupSection() {
  /**
   * Browser-style mockup section with floating tags (placeholder).
   * The real component will include SVGs, category tags, and UI mockup.
   */
  return (
    <section className="flex flex-col items-center py-8 px-4">
      {/* Placeholder mock browser UI */}
      <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 shadow-lg w-full max-w-3xl mb-4">
        <div className="flex space-x-2 mb-4">
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block" />
          <span className="w-3 h-3 bg-green-400 rounded-full inline-block" />
        </div>
        <div className="h-40 flex items-center justify-center text-2xl text-gray-400 dark:text-gray-500">
          (UI Mockup Placeholder)
        </div>
      </div>
      {/* Placeholder for floating category tags */}
      <div className="flex flex-wrap gap-3 justify-center">
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-lg">Tag 1</span>
        <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 px-3 py-1 rounded-lg">Tag 2</span>
        <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded-lg">Tag 3</span>
      </div>
    </section>
  );
}

export default MockupSection;
