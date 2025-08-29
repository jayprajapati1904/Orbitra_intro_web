import React from "react";

const futureProducts = [
  {
    title: "AI Blog & Content Generator",
    subtitle: "Smart Content Creation Tool",
    description: `A smart solution built for passionate bloggers and content creators who need instant access to the latest news, trends, and global updates to create engaging content quickly.`,
    highlights: [
      "Automatically gathers real-time news and updates from around the world",
      "Provides instant summaries and ready-to-use content ideas",
      "Helps creators stay ahead by covering daily changes and trending topics",
      "Saves time in research, allowing more focus on creativity",
      "Perfect for bloggers, journalists, and content creators who thrive on speed",
    ],
    image:
      "https://res.cloudinary.com/dltauawkh/image/upload/v1756483676/product1_eedu9c.png",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    iconBg: "bg-orange-100",
    icon: "🤖",
  },
  {
    title: "Smart Order Management",
    subtitle: "Digitize Restaurant Operations",
    description: `Many restaurants and hotels still manage their customer bills and order records manually using pen and paper, which often leads to errors and inefficiency. Our solution modernizes this process completely.`,
    highlights: [
      "Manage all orders and billing digitally in one place",
      "Maintain accurate customer records without manual effort",
      "Get real-time tracking of sales, payments, and performance",
      "Access detailed analytics to measure growth and improve decision-making",
      "Eliminate the hassle of manual calculations and outdated record-keeping",
    ],
    image:
      "https://res.cloudinary.com/dltauawkh/image/upload/v1756483673/product2_rvgdmi.png",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100",
    icon: "📊",
  },
  {
    title: "Social Media Mentor Connect",
    subtitle: "Learn from Expert Creators",
    description: `A platform designed to bridge the gap between learners and experienced creators. Our goal is to help aspiring content creators grow faster by learning directly from experts.`,
    highlights: [
      "Connect with creators who have experience in content creation",
      "Learn real-world struggles, mistakes, and solutions faced during their journey",
      "Avoid common mistakes and save years of trial and error",
      "Get practical guidance on what to do, what to avoid, and how to grow quickly",
      "Accelerate your journey of becoming a successful creator",
    ],
    image:
      "https://res.cloudinary.com/dltauawkh/image/upload/v1756483674/product3_usxkrw.png",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-100",
    icon: "🚀",
  },
  {
    title: "Startup Connect & Growth Hub",
    subtitle: "Bridge Founders with Investors",
    description: `A powerful networking platform designed for startups and entrepreneurs who want to launch, grow, and scale their businesses with the right support and funding.`,
    highlights: [
      "Connect directly with investors who are ready to fund innovative ideas",
      "Founders can showcase their startups and gain the visibility they need",
      "Investors not only provide funding but also share valuable guidance",
      "Get expert advice, business strategies, and practical tips for growth",
      "Build long-term relationships that go beyond funding, fostering collaboration",
    ],
    image:
      "https://res.cloudinary.com/dltauawkh/image/upload/v1756483680/product4_o5tbfp.png",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    icon: "💡",
  },
];

export default function FutureProducts() {
  return (
    <div className="min-h-screen py-20">
      {/* Background Elements */}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Our Future Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions designed to solve real-world problems and
            empower businesses to thrive in the digital age
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-20">
          {futureProducts.map((product, index) => (
            <div
              key={index}
              className={`relative ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } flex flex-col md:flex-row items-center gap-12 md:gap-16`}
            >
              {/* Background Card */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${product.bgColor} rounded-3xl transform rotate-1 opacity-50`}
              ></div>

              <div className="relative  p-8 md:p-12 w-full">
                <div
                  className={`flex flex-col md:flex-row items-center gap-12 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    {/* Icon and Status */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 ${product.iconBg} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {product.icon}
                      </div>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        In Development
                      </span>
                    </div>

                    {/* Title and Subtitle */}
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                        {product.title}
                      </h3>
                      <p
                        className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${product.color} mb-4`}
                      >
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <span className="text-yellow-500">✨</span>
                        Key Features
                      </h4>
                      <div className="grid gap-3">
                        {product.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 group"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform`}
                            ></div>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    {/* / <div className="pt-4">
                      <button
                        className={`px-8 py-3 bg-gradient-to-r ${product.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200`}
                      >
                        Get Notified When Ready
                      </button>
                    </div> */}
                  </div>

                  {/* Image Section */}
                  <div className="flex-1 flex justify-center items-center">
                    <div className="relative group">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${product.color} rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20`}
                      ></div>
                      <div className="relative bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-64 h-64 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
      </div>
    </div>
  );
}
