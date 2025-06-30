import React from 'react';

// PUBLIC_INTERFACE
function MockupSection() {
  /**
   * Modern browser-style UI mockup with vibrant floating/animated category tags.
   * Uses SVG for browser chrome, animated accents, and absolute-positioned animated category tags.
   * Fully responsive, visually vibrant, and visually matches the overall site.
   */

  // Floating categories with color configs and animation positions
  const tags = [
    {
      label: 'SaaS',
      color: 'from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400',
      shadow: 'shadow-blue-200 dark:shadow-blue-900/40',
      position: 'left-[-24px] sm:left-[-44px] md:left-[-84px] top-3 md:top-12',
      anim: 'animate-[float-tags1_6s_ease-in-out_infinite]',
    },
    {
      label: 'Portfolio',
      color: 'from-pink-400 to-pink-300 dark:from-pink-600 dark:to-pink-400',
      shadow: 'shadow-pink-200 dark:shadow-pink-900/40',
      position: 'right-[-12px] sm:right-[-22px] md:right-[-60px] top-16 sm:top-20 md:top-40',
      anim: 'animate-[float-tags2_8s_ease-in-out_infinite]',
    },
    {
      label: 'Marketing',
      color: 'from-yellow-300 via-yellow-400 to-orange-300 dark:from-yellow-500 dark:to-orange-400',
      shadow: 'shadow-yellow-200 dark:shadow-yellow-900/40',
      position: 'left-3 sm:left-9 md:left-16 bottom-[8%] sm:bottom-[10%] md:bottom-[14%]',
      anim: 'animate-[float-tags3_7s_ease-in-out_infinite]',
    },
    {
      label: 'Finance',
      color: 'from-green-400 to-green-300 dark:from-green-700 dark:to-green-400',
      shadow: 'shadow-green-200 dark:shadow-green-900/40',
      position: 'right-1 sm:right-2 md:right-14 bottom-4 sm:bottom-6 md:bottom-14',
      anim: 'animate-[float-tags4_11s_ease-in-out_infinite]',
    },
  ];

  return (
    <section
      id="mockup"
      className="relative py-10 xs:py-14 sm:py-16 md:py-28 px-2 xs:px-3 sm:px-6 flex flex-col items-center justify-center w-full bg-transparent select-none"
    >
      {/* Animated background SVG accents */}
      <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="800" height="300" viewBox="0 0 800 300" fill="none" className="w-[90vw] max-w-[850px] opacity-35 blur-[36px]" aria-hidden="true">
          <ellipse cx="400" cy="170" rx="320" ry="96" fill="#2563eb" fillOpacity="0.13"/>
          <ellipse cx="420" cy="110" rx="180" ry="64" fill="#fbbf24" fillOpacity="0.14"/>
          <ellipse cx="310" cy="220" rx="110" ry="38" fill="#aeccfd" fillOpacity="0.18"/>
        </svg>
      </div>
      {/* Main browser mockup */}
      <div className="relative mx-auto w-full max-w-3xl rounded-3xl shadow-xl bg-white dark:bg-[#161D2A] ring-2 ring-blue-300/10 dark:ring-blue-900/30 border border-blue-100 dark:border-blue-900/30 transition-colors overflow-visible">
        {/* Browser chrome/tab bar */}
        <div className="flex items-center px-2 xs:px-3 sm:px-6 py-2 bg-gray-100 dark:bg-[#232b3d] rounded-t-3xl border-b border-gray-200 dark:border-[#202736]">
          {/* "traffic lights" */}
          <span className="inline-flex gap-1.5 mr-4">
            <span className="w-3 h-3 bg-red-400 rounded-full border border-white/50 dark:border-[#202736] shadow-sm" />
            <span className="w-3 h-3 bg-yellow-300 rounded-full border border-white/50 dark:border-[#202736] shadow-sm" />
            <span className="w-3 h-3 bg-green-400 rounded-full border border-white/50 dark:border-[#202736] shadow-sm" />
          </span>
          {/* Browser tabs, one focused */}
          <div className="flex gap-1 flex-shrink">
            <div className="relative px-4 h-7 flex items-center rounded-t-xl bg-white dark:bg-gray-900 border-x border-t border-gray-200 dark:border-[#202736] font-semibold text-blue-700 dark:text-blue-300 shadow-sm z-10 text-base">
              Home
            </div>
            <div className="relative px-4 h-7 flex items-center rounded-t-xl bg-gray-100 dark:bg-[#232b3d] text-gray-400 border-x border-t border-gray-200 dark:border-[#202736] ml-[-6px] z-0 text-base">
              Dashboard
            </div>
            <div className="relative px-4 h-7 flex items-center rounded-t-xl bg-gray-100 dark:bg-[#232b3d] text-gray-400 border-x border-t border-gray-200 dark:border-[#202736] ml-[-6px] z-0 text-base">
              Reports
            </div>
          </div>
          <div className="flex-1"></div>
          {/* URL bar */}
          <div className="hidden md:flex items-center ml-10 rounded-2xl px-4 py-0.5 w-64 bg-white/90 border border-gray-200 dark:border-[#202736] dark:bg-gray-800/90 text-sm text-gray-500 dark:text-gray-300 truncate">
            https://swankeyglow.com/demo
          </div>
        </div>
        {/* Main browser window content area */}
        <div className="relative px-3 xs:px-5 sm:px-6 pb-8 pt-8 sm:pt-10 min-h-[195px] md:min-h-[230px] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/60 via-white/95 to-blue-100/60 dark:from-blue-950/80 dark:via-gray-900/95 dark:to-blue-900/60 rounded-b-3xl">
          {/* Example UI content (replace with your best demo section) */}
          <div className="w-full max-w-lg mx-auto flex flex-col gap-3 items-center">
            {/* "Hero card" inside browser */}
            <div className="w-full rounded-xl py-6 xs:py-8 px-3 xs:px-6 bg-white/90 dark:bg-gray-900/92 shadow-md border border-blue-100 dark:border-blue-950 text-center flex flex-col items-center transition-all">
              <h3 className="font-extrabold text-xl xs:text-2xl md:text-3xl text-blue-700 dark:text-blue-300 leading-tight mb-2 drop-shadow-sm">
                Next-Gen Web Demo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm xs:text-base md:text-lg font-medium mb-4">
                Showcase your app inside a vibrant, interactive browser—perfect for landing pages and SaaS marketing.
              </p>
              <button
                type="button"
                className="mt-2 bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-7 rounded-lg shadow transition focus:outline-none text-base focus-visible:ring-2 ring-blue-300 active:scale-95 w-full xs:w-auto"
              >
                Try Live Demo
              </button>
            </div>
          </div>
          {/* Subtle animated scroll hint for desktop */}
          <div className="hidden md:block absolute left-1/2 bottom-3 -translate-x-1/2 opacity-45 pointer-events-none select-none">
            <svg width="38" height="46" fill="none" className="animate-bounce-slow" aria-hidden="true">
              <rect x="6" y="2" width="26" height="42" rx="14" fill="#2563eb" fillOpacity="0.08"/>
              <rect x="14.5" y="12" width="9" height="9" rx="4.5" fill="#2563eb" fillOpacity="0.14"/>
              <rect x="17" y="17" width="4" height="12" rx="2" fill="#2563eb" fillOpacity="0.25"/>
            </svg>
          </div>
        </div>
        {/* Floating animated tags, absolutely positioned for visual engagement */}
        {tags.map((tag, i) => (
          <span
            key={tag.label}
            className={`absolute z-30 ${tag.position} px-4 py-2 rounded-xl text-[.96rem] leading-tight font-semibold backdrop-blur-md bg-gradient-to-r ${tag.color} text-white shadow-lg ${tag.shadow} border border-white/30 dark:border-blue-950 tracking-tight ring-2 ring-white/10 dark:ring-blue-800/20 ${tag.anim} transition-all`}
            style={{
              // Responsive font size adjustment for extra mobile friendliness
              fontSize: 'clamp(0.85rem, 1vw, 1.1rem)',
              filter: 'saturate(1.12)',
              pointerEvents: 'auto',
            }}
            aria-label={tag.label}
          >
            {/* Icon left of text for extra vibrancy */}
            <span className="inline-block mr-1.5 align-middle">
              <svg width="16" height="16" fill="none" className="drop-shadow" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="white" fillOpacity="0.20"/>
                <circle cx="8" cy="8" r="4.5" fill="currentColor" fillOpacity="0.76"/>
              </svg>
            </span>
            {tag.label}
          </span>
        ))}
        {/* Custom CSS for animations */}
        <style>
          {`
            @keyframes float-tags1 {
              0%   { transform: translateY(0px) scale(1);}
              28%  { transform: translateY(-17px) scale(1.03);}
              50%  { transform: translateY(-25px) scale(1.04);}
              72%  { transform: translateY(-9px) scale(0.98);}
              100% { transform: translateY(0px) scale(1);}
            }
            @keyframes float-tags2 {
              0%   { transform: translateY(5px) scale(1);}
              24%  { transform: translateY(12px) scale(1.08);}
              52%  { transform: translateY(-22px) scale(1.04);}
              85%  { transform: translateY(6px) scale(1);}
              100% { transform: translateY(5px) scale(1);}
            }
            @keyframes float-tags3 {
              0%   { transform: translateY(0px) scale(1);}
              31%  { transform: translateY(-10px) scale(0.95);}
              51%  { transform: translateY(10px) scale(1.1);}
              79%  { transform: translateY(-8px) scale(1);}
              100% { transform: translateY(0px) scale(1);}
            }
            @keyframes float-tags4 {
              0%   { transform: translateY(0px) scale(1);}
              33%  { transform: translateY(-7px) scale(0.98);}
              60%  { transform: translateY(-21px) scale(1.06);}
              79%  { transform: translateY(-1px) scale(1);}
              100% { transform: translateY(0px) scale(1);}
            }
            .animate-bounce-slow {
              animation: bounce-slow 2s infinite cubic-bezier(0.456,0.072,0.395,1.025);
            }
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0);}
              50% { transform: translateY(9px);}
            }
          `}
        </style>
      </div>
    </section>
  );
}

export default MockupSection;
