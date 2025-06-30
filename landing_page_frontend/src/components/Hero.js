import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Hero section for the landing page: bold headline, subheadline, two animated CTA buttons,
 * vibrant gradients (SVG + Tailwind), modern animations, and full mobile responsiveness.
 * Designed for visual impact and easy integration with App.js.
 */
// PUBLIC_INTERFACE
function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full overflow-hidden py-20 px-4 md:py-32 text-center isolate"
      style={{ minHeight: '420px' }}
    >
      {/* Vibrant Gradient Backgrounds (SVG accent circles) */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        aria-hidden="true"
      >
        {/* Top left gradient accent */}
        <svg
          className="absolute left-[-8vw] top-[-80px] w-[420px] h-[420px] opacity-40 blur-[80px] animate-[float_7s_ease-in-out_infinite]"
          style={{ filter: 'saturate(1.4)' }}
          viewBox="0 0 420 420"
          fill="none"
        >
          <circle cx="210" cy="210" r="195"
            fill="url(#linear-accent1)" />
          <defs>
            <linearGradient id="linear-accent1" x1="0" y1="420" x2="420" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563eb" />
              <stop offset="1" stopColor="#a5b4fc" />
            </linearGradient>
          </defs>
        </svg>
        {/* Bottom right gradient accent */}
        <svg
          className="absolute right-[-8vw] bottom-[-100px] w-[430px] h-[430px] opacity-30 blur-[88px] animate-[float2_8s_ease-in-out_infinite]"
          style={{ filter: 'saturate(1.2)' }}
          viewBox="0 0 430 430"
          fill="none"
        >
          <circle cx="215" cy="215" r="190"
            fill="url(#linear-accent2)" />
          <defs>
            <linearGradient id="linear-accent2" x1="0" y1="430" x2="430" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e3a8a" />
              <stop offset="1" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Main Content */}
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center relative z-10">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight text-gray-900 dark:text-white drop-shadow mb-4">
          The Modern Way to <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 dark:from-blue-400 dark:via-blue-300 dark:to-yellow-400 animate-gradient-xy">
            Glow with Swankey
          </span>
        </h1>
        <p className="max-w-xl text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-200 mb-10 font-medium">
          Effortlessly grow your business, showcase your flair, and captivate clients with a vibrant, responsive experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center w-full">
          {/* Outlined CTA Button */}
          <button
            type="button"
            className="relative border-2 border-blue-700 dark:border-blue-300 text-blue-700 dark:text-blue-200 bg-transparent font-semibold py-2.5 px-7 rounded-lg transition hover:bg-blue-50 dark:hover:bg-blue-950 focus:outline-none focus-visible:ring-2 ring-blue-300 text-base sm:text-lg shadow-sm hover:-translate-y-0.5 active:scale-[0.98] duration-150"
            tabIndex={0}
          >
            Why Swankey?
          </button>
          {/* Filled CTA Button */}
          <button
            type="button"
            className="relative bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2.5 px-7 rounded-lg transition focus:outline-none focus-visible:ring-2 ring-blue-300 text-base sm:text-lg shadow-md hover:-translate-y-1 active:scale-[0.98] duration-150"
            tabIndex={0}
            autoFocus
          >
            Get Started
          </button>
        </div>
      </div>
      {/* Animated accent lines for added energy */}
      <svg
        className="absolute left-1/2 top-[80%] -translate-x-1/2 w-[90vw] max-w-4xl opacity-25 dark:opacity-35 animate-[wobble_12s_ease-in-out_infinite]"
        height="90"
        width="1200"
        fill="none"
        viewBox="0 0 1200 90"
        aria-hidden="true"
      >
        <path
          d="M5 75 Q 300 10 600 60 T 1195 85"
          stroke="#2563eb"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="1"
        />
        <path
          d="M15 80 Q 200 20 650 70 T 1185 60"
          stroke="#fbbf24"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
      {/* Custom keyframes for animated gradients and floating effects */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px);}
            50% { transform: translateY(-30px);}
            100% { transform: translateY(0px);}
          }
          @keyframes float2 {
            0% { transform: translateY(0px);}
            50% { transform: translateY(-18px);}
            100% { transform: translateY(0px);}
          }
          @keyframes wobble {
            0% { transform: translateX(-50%) scaleX(1);}
            50% { transform: translateX(-50%) scaleX(1.04);}
            100% { transform: translateX(-50%) scaleX(1);}
          }
          @keyframes gradient-xy {
            0%, 100% {background-position:0% 50%;}
            50% {background-position:100% 50%;}
          }
          .animate-gradient-xy {
            background-size: 200% 200%;
            animation: gradient-xy 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
