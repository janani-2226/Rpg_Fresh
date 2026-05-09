import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const logo = "https://ik.imagekit.io/ux5g9gl0h/Logo%20(2).png";

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="RPG Fresh"
            className="h-16 w-auto object-contain mix-blend-multiply"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 font-manrope antialiased text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={
                pathname === link.to
                  ? "text-secondary border-b-2 border-secondary pb-1"
                  : "text-on-surface-variant hover:text-secondary transition-colors"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden bg-white border-t border-black/5 shadow-lg overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4 px-6 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                pathname === link.to
                  ? "bg-secondary/10 text-secondary"
                  : "text-gray-700 hover:bg-gray-50 hover:text-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
