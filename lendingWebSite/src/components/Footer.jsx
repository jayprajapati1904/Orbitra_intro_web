import { Link } from "react-router-dom";

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
              <li>
                <Link to="/aboutus" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/Contactus" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2025 Orbitra – All Rights Reserved
      </div>
    </footer>
  );
}
