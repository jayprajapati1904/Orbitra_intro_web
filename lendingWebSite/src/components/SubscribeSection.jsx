import React, { useState } from "react";

export default function SubscribeSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
    // ✅ Navigate to Instagram link
    window.open("https://www.instagram.com/orbit_ra/", "_blank");
  };

  return (
    <div className="relative py-20 px-6 text-center max-w-3xl mx-4 md:mx-auto my-12 shadow-2xl bg-gray-200 rounded-3xl">
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 leading-tight">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Be the first to know when we launch{" "}
            <span className="inline-block animate-bounce text-2xl">🚀</span>
          </p>
        </div>

        {/* Notify Me Button */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              relative group px-12 py-4 rounded-2xl font-bold text-lg
              bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 
              text-white shadow-2xl transform transition-all duration-300 ease-out
              hover:shadow-purple-500/25 hover:shadow-2xl hover:-translate-y-2 hover:scale-105
              active:scale-95 active:translate-y-0
              ${isClicked ? "animate-pulse" : ""}
            `}
          >
            {/* Button background glow */}
            <div
              className={`
              absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 
              opacity-0 group-hover:opacity-100 blur transition-opacity duration-300
            `}
            ></div>

            {/* Button content */}
            <div className="relative flex items-center gap-3">
              {isClicked ? (
                <>
                  <span className="text-green-300">✓</span>
                  <span>We'll Notify You!</span>
                </>
              ) : (
                <>
                  <span
                    className={`transition-transform duration-300 ${
                      isHovered ? "scale-125" : ""
                    }`}
                  >
                    🔔
                  </span>
                  <span>Notify Me</span>
                  <div
                    className={`
                    w-2 h-2 bg-white rounded-full transition-all duration-300
                    ${isHovered ? "opacity-100 animate-ping" : "opacity-0"}
                  `}
                  ></div>
                </>
              )}
            </div>

            {/* Animated border */}
            <div
              className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "exclude",
              }}
            ></div>
          </button>
        </div>

        {/* Status indicator */}
        <div className="flex justify-center items-center gap-2 mt-8 text-sm text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Product in active development</span>
        </div>
      </div>
    </div>
  );
}
