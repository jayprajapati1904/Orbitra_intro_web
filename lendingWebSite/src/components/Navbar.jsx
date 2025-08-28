import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About us", href: "/aboutus" },
    { name: "Contact us", href: "/Contactus" },
  ];

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[95%] max-w-10xl z-50">
      <div className="bg-[#1e293b]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg px-6 py-1 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            src="https://res.cloudinary.com/dltauawkh/image/upload/v1756402970/Orbitra_hbw9pf.png"
            alt="Orbitra Logo"
            className="h-8 md:h-10 w-auto object-contain"
            draggable={false}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 font-medium text-gray-200">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-200 hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg animate-slideDown">
          <ul className="flex flex-col p-6 space-y-4 font-medium text-gray-200">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-pink-400 transition-all"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
