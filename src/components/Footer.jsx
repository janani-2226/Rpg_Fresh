import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home",     to: "/" },
  { name: "Products", to: "/products" },
  { name: "Gallery",  to: "/gallery" },
  { name: "Contact",  to: "/contact" },
];


const certifications = ["APEDA", "FSSAI", "MSME", "FIEO", "ISO 22000", "HACCP"];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1f0b] overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-800/20 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-700/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Certifications strip */}
      <div className="border-b border-green-800/40 py-5 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">
            Farm to Table · Tamil Nadu, India
          </p>
          <div className="flex gap-2 flex-wrap justify-center">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="text-[10px] font-bold uppercase tracking-wider text-green-300 bg-green-900/50 border border-green-700/30 px-3 py-1 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="text-2xl font-black text-white uppercase tracking-tighter">
              RPG Fresh Exports
            </div>
            <p className="text-green-200/60 text-sm leading-relaxed">
              Exporting the pure essence of Indian agriculture to the global dinner table.
              Quality you can trust, freshness you can taste.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-green-900/50 border border-green-700/30 flex items-center justify-center text-green-400 hover:text-white hover:bg-green-700 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                href="mailto:info@therpgfresh.com"
                className="w-10 h-10 rounded-xl bg-green-900/50 border border-green-700/30 flex items-center justify-center text-green-400 hover:text-white hover:bg-green-700 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
              <a
                href="https://wa.me/918438115340"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-green-900/50 border border-green-700/30 flex items-center justify-center text-green-400 hover:text-white hover:bg-green-700 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ name, to }) => (
                <li key={name}>
                  <Link
                    to={to}
                    className="text-green-200/60 text-sm hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-700 group-hover:bg-green-400 transition-colors flex-shrink-0" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Get In Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-green-500 text-[18px]">call</span>
                <span className="text-green-200/60 text-sm group-hover:text-green-400 transition-colors">
                  +91 8438115340
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-green-500 text-[18px]">mail</span>
                <span className="text-green-200/60 text-sm group-hover:text-green-400 transition-colors">
                  info@therpgfresh.com
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-green-500 text-[18px] mt-0.5">location_on</span>
                <span className="text-green-200/60 text-sm leading-relaxed group-hover:text-green-400 transition-colors">
                  Tamil Nadu, India<br />Global Export Hub
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-green-200/30 text-xs">
            © 2024 RPG Fresh Exports. Farm-to-Table Global Excellence. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-green-200/30 uppercase tracking-widest">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
