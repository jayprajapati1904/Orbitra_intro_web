import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen py-20 mt-10">
      {/* Background decorative elements */}

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            {/* Logo/Brand Symbol */}

            <img
              src="https://res.cloudinary.com/dltauawkh/image/upload/v1756402969/OrbitraIcon_kkjmz0.png"
              alt="Orbitra Logo"
              className="w-auto h-32 mx-auto rounded-2xl "
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              From Classroom Dreams
            </span>
            <br />
            <span className="text-gray-800">to Real Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The story of two engineering students who dared to turn their
            frustration into innovation
          </p>
        </div>

        {/* Story Timeline */}
        <div className="space-y-12">
          {/* Chapter 1 */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">📚</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  The Awakening
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We are two passionate{" "}
                  <span className="font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">
                    B.Tech students
                  </span>{" "}
                  in our 7th semester of Computer Engineering, driven by
                  curiosity, creativity, and a desire to make a real impact.
                  During our college journey, we realized that traditional
                  learning focused heavily on{" "}
                  <span className="font-semibold text-red-500 bg-red-50 px-2 py-1 rounded-lg">
                    theory
                  </span>
                  —books, exams, and grades—while missing the essential skills
                  required in the real world.
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-600 text-lg bg-gray-50 rounded-r-lg p-4 font-medium">
                  "We felt bored and unfulfilled, as if our days were passing by
                  without meaningful work or responsibility."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">💡</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  The Spark
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  But then, a spark ignited within us. We asked ourselves:{" "}
                  <span className="font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                    Why not create something ourselves? Something the world
                    truly needs?
                  </span>{" "}
                  As engineering students with a hunger to innovate, we decided
                  to channel our skills into building a{" "}
                  <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-lg">
                    product-based company
                  </span>{" "}
                  that develops innovative{" "}
                  <span className="font-semibold text-orange-500 bg-orange-50 px-2 py-1 rounded-lg">
                    SaaS solutions
                  </span>{" "}
                  designed to simplify life, enhance productivity, and make work
                  easier for people.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className=" bg-blue-400 rounded-3xl p-8 md:p-12 shadow-xl text-white">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🚀</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  The Birth of Orbitra
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  This dream gave birth to{" "}
                  <span className="font-bold text-yellow-300 text-2xl">
                    Orbitra
                  </span>
                  —not just a company, but the embodiment of our vision and
                  ambition. We believe in building solutions that{" "}
                  <span className="font-semibold text-teal-200 bg-white/10 px-2 py-1 rounded-lg">
                    truly help people
                  </span>
                  , and though this journey will take time, dedication, and
                  persistence, we are committed to seeing it through.
                </p>
                <blockquote className="border-l-4 border-white/30 pl-6 italic text-blue-100 text-lg bg-white/10 rounded-r-lg p-4 font-medium">
                  "Orbitra is more than a business—it's our dream, our mission,
                  and our promise to ourselves that one day, it will change
                  lives."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Chapter 4 - The Journey Ahead */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🌟</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  The Journey Ahead
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are on a journey to innovate, create, and inspire. From
                  humble beginnings to ambitious goals,{" "}
                  <span className="font-bold text-blue-600 text-xl">
                    Orbitra
                  </span>{" "}
                  is our way of{" "}
                  <span className="font-semibold text-pink-600 bg-pink-50 px-2 py-1 rounded-lg">
                    turning ideas into reality
                  </span>{" "}
                  and making a lasting impact in the tech world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Join Our Journey
            </h3>
            <p className="text-gray-600 mb-6">
              Follow along as we build something extraordinary, one line of code
              at a time.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Currently Building</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                <span>7th Semester Students</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
                <span>Future Innovators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
