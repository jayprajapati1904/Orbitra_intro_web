import React, { useState } from "react";

export default function Products() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 relative mt-10 md:mt-0">
      {/* Subtle animated glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-3xl text-center">
          {/* Logo/Brand Symbol */}
          <div className="mb-10 ">
            <img
              src="https://res.cloudinary.com/dltauawkh/image/upload/v1756402969/OrbitraIcon_kkjmz0.png"
              alt="Orbitra Logo"
              className="w-auto h-32 mx-auto rounded-2xl "
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Products
            </span>{" "}
            Are Coming Soon
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            We’re building something powerful and reliable that enhances your
            workflow. Stay tuned – launch is just around the corner.
          </p>

          {/* Progress Indicator */}
          {/* <div className="mb-10 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-6    00 mb-2">
              <span>Development Progress</span>
              <span>78%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-3/4 transition-all duration-1000 ease-out"></div>
            </div>
          </div> */}

          {/* Footer */}
          <p className="mt-12 text-gray-500 text-sm">
            Questions? Contact us at{" "}
            <a
              href="mailto:hello@yourcompany.com"
              className="text-purple-400 hover:text-purple-300"
            >
              hello@yourcompany.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
