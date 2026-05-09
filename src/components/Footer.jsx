import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Home",     to: "/" },
    { name: "Products", to: "/products" },
    { name: "Gallery",  to: "/gallery" },
    { name: "Contact",  to: "/contact" },
  ];

  return (
    <footer className="bg-surface-container-lowest w-full pt-20 pb-10 px-6 border-t border-black/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto mb-20">
        {/* Brand Info */}
        <div className="space-y-8">
          <div className="text-2xl font-black text-on-surface uppercase tracking-tighter flex items-center gap-2">
            <span className="w-6 h-6 bg-secondary rounded-sm"></span>
            RPG Fresh
          </div>
          <p className="text-on-surface-variant text-md leading-relaxed">
            Exporting the pure essence of Indian agriculture to the global dinner
            table. Quality you can trust, freshness you can taste.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-secondary/10 transition-all"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-secondary/10 transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h4 className="text-on-surface font-bold text-xs uppercase tracking-[0.2em]">
            Quick Links
          </h4>
          <ul className="space-y-4 text-md text-on-surface-variant">
            {quickLinks.map(({ name, to }) => (
              <li key={name}>
                <Link to={to} className="hover:text-secondary transition-colors">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-8">
          <h4 className="text-on-surface font-bold text-xs uppercase tracking-[0.2em]">
            Get In Touch
          </h4>
          <ul className="space-y-6 text-md text-on-surface-variant">
            <li className="flex items-center gap-4 group">
              <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">
                call
              </span>
              <span className="font-medium text-on-surface">+91 8438115340</span>
            </li>
            <li className="flex items-center gap-4 group">
              <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">
                mail
              </span>
              <span className="font-medium text-on-surface">
                info@therpgfresh.com
              </span>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform mt-1">
                location_on
              </span>
              <span className="leading-relaxed">
                Tamil Nadu, India
                <br />
                Global Export Hub
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-on-surface-variant text-sm">
          © 2024 RPG Fresh. Farm-to-Table Global Excellence. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-xs text-on-surface-variant uppercase tracking-widest">
          <a href="#" className="hover:text-secondary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
