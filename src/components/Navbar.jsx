import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  // ImageKit CDN URL
  const logo =
    "https://ik.imagekit.io/ux5g9gl0h/Logo%20(2).png";

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

        {/* Nav Links */}
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

      </nav>
    </header>
  );
}