export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand / About */}
        <div>
          {/* Logo */}
          <img
            src="https://res.cloudinary.com/dltauawkh/image/upload/v1756402970/Orbitra_hbw9pf.png"
            alt="Orbitra Logo"
            className="h-10 mb-4"
          />

          {/* About text */}
          <p className="text-gray-400 text-sm leading-relaxed">
            Redefining how people work & create — with powerful, smart, and
            interactive experiences. Built for the future.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-around">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Products</li>
              <li>Contect us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>Coming soon...</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our updates and be the first to know about new
            features.
          </p>
          <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent text-sm text-gray-200 outline-none"
            />
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-sm font-medium text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2025 Orbitra – All Rights Reserved
      </div>
    </footer>
  );
}
