// Gallery.jsx — RPG Fresh Visual Gallery
// Converted from HTML to React with Tailwind CSS

// ── Data ──────────────────────────────────────────────────────────────────

const GALLERY_ITEMS = [
  {
    alt: "Fresh Produce",
    tag: "PRODUCE",
    title: "Peak-Season Greens",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCILyusqPeLkcTumEt8BTlJbbAzQ0Fy1S6fEbAGllah2sUiDmrl-2WVux5MbR66GzfJt1wj9pTmlRPhPTML4___pmcs5z-meHf-01fhtFxt_hLf6OZWxoBEtj2Y8BZAFOl0T_yPO9q1Id4s-E3FiBuoPdMSg-XxmqWuIapWtCLjU3V3-zUi7rLswjPTU3fN4m2XyCGC0iVQOFWP6IPRmx_-lU0KNzXvrCOzJ4PRviMdxLP0sBBalUJqiHQWHhRtwXz2_fw1BpoqmK8R",
  },
  {
    alt: "Quality Check",
    tag: "STANDARDS",
    title: "Purity Lab Checks",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDE0FWZRmPhSDa1OrGdwgs3sDyIQMVStYrJHwSPS8nWaSGoixEy-4svVTPT6RuWCs_0chGmXPdPMnTFlzAPy8aNzB0xZIEDNlzN2z542cxDY7cqszw7N34gxVTpbaY5gHq__l4_UDcstUs6z_jjEUKGPq4mik4yviOyU5QPviklDuvVlNCbu2AbH_7HXp6bObK-m8ZahaWg7W2PMIqPUjkttGF0Xc-z85VMCjmIXF7YEogBBYMqI0mbW54AyE0iaOEHhf8yD5IDe1c",
  },
  {
    alt: "Global Farms",
    tag: "ORIGIN",
    title: "Heritage Highlands",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVd7YvwVjv1DgQZKSYZigGY9oSkWr2-dX7Oz6UVq4Jbrf4I3RA9IND_v8J4e9GHGKT-8PotnNIdjUm3sC6dcsNtZmDqzfksi2JUHXj9s4Odv9BOIJ3_8k3SNELG2devbhxfEk0kwNvefQtzmA_mKUZAwni3GssrtPV5NEbK4GmtP9k68jh0O6CP40C9hElnvKfGGmpg3UlifuxqP_4UOsAxgxtih6gjP1CQck-zw5rz8V23U6YcqnE7-VAZMzQm7jLdy1a7JErdBgD",
  },
  {
    alt: "Storage",
    tag: "LOGISTICS",
    title: "Cold-Chain Mastery",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmsxfK4dsyGocF7TT-OYTceTKVQTsO7X-MiFvK9UbyCyUBN1nf7P9QIiapaqfZ-DjTeYHA4GdkvILfemJbVrVQq1YT9X09souabZ3lPJZxq3ofabhVYWCBmbs8Ltnuuj54mN_XNVrsXDZnc4Dzd7NxNLMGn0_baHroWFukWNwKx9F-LoZ-CJRm9CKBdNOChGbVVhXrMOcs9PVFvfkMrL2wQVsiviskukKUn4r5fT5UyiMckgiYRXaYOnhQ5T6R4DKlP2yBB3yh_6M6",
  },
  {
    alt: "Sustainability",
    tag: "PHILOSOPHY",
    title: "Rooted in Care",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlJbTD6whneCfThQte4SwxpRnVcoBSN179B7kD5vNGtoyuCLwRAp5CbBXuta7daGbJJuYyJ-_z5xp0X8nQU5zHVUqnqmma2g6JVJo74gXv27aqyE8cbitbPg_LHLyMxQqsrVlwfoYy-IcHYgnHQaZO3cGZUbNIqlW4CHCcC2Wve3FJFxk-8SMbcVQbOWG3agMrCBPORcorvLYaS4F-H-Rpi_s7F99lJghJ4fICN7BSXd87dDoNKcAy5sgkXi3EcCAYI5_MYbapIuO0",
  },
  {
    alt: "Exotic Produce",
    tag: "CATALOG",
    title: "Global Harvests",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjzUtePm7ygztrd1-E6vGrbrfjY23sgHcLbfWEydWS80D2MwaBlbHscnOadPIihSAABZIXYMiSHqvPyF9fLoX-zBM-NYNva2wwjpy_FdB6_Wj3hjbVs8ZfdNhQOBLqGMXUDFse14_SAosrHVs1bOQOJP3-39JCHfWpUgommusPKnN7B8W4daU-1Ypqkt3qAc-x45xeGovBFy01zgwPpmE7aTBj2UM_SX3CDq28bUZ6JESRk1e9g1SDlagubUx6Hdwrm4yiE3NDXiSS",
  },
];

const NAV_LINKS = ["Catalog", "Logistics", "Sustainability", "Traceability", "Contact"];

const FOOTER_LINKS = ["Privacy Policy", "Certifications", "Partner Portal", "Shipping Routes", "Global Offices"];

const SUSTAINABILITY_STATS = [
  { icon: "recycling",   title: "100% Circular",   desc: "Packaging materials"       },
  { icon: "water_drop",  title: "Drip-Irrigated",  desc: "Smart water conservation"  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

/** Single gallery card with hover-reveal overlay */
function GalleryCard({ item }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gray-100 mb-4 shadow-sm group-hover:shadow-xl transition-all border border-gray-200/50">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A5F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
          <span className="text-[#4CAF50] text-[12px] font-bold uppercase tracking-[0.05em] mb-2">
            {item.tag}
          </span>
          <h4 className="text-white text-2xl font-semibold leading-snug">{item.title}</h4>
        </div>
      </div>
    </div>
  );
}

// ── Main Export ─────────────────────────────────────────────────────────────

export default function Gallery() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden font-sans">

 

      <main className="">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden py-16">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A5F]/90 to-[#1A3A5F]/40 z-10" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1EDt1xv9fXCC8u1_6jrbGQTSfiPjiGc_gwPvROuMNqQ5taHQ4IFIW0_7RrJhXu7h2ntMts2h5vJoS6PtbMsoMQs2u94v3zCX69bwYtXqzIiuVq2f0aIeRn_oNrbLgLR5Bm5Bjm4nFdnyiGjD509AwEPzSUG1XmrGrFYurv6KrfVKM_YfWrwUF-6iY20TIq-2nKF3PSxa8wLERMycmLdWfhq-QktWARBn9_kN7rkYJb2TH2fzIXXmIN-5C8Baq05U_M3tjCfWLRCVE"
              alt="Organic Farm Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hero content */}
          <div className="relative z-20 max-w-[1280px] px-8 w-full text-left">
            <div className="max-w-3xl">
              <span className="text-[#4CAF50] text-[12px] font-bold uppercase tracking-widest mb-4 block">
                Precision Logistics • Premium Produce
              </span>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Witness the Journey of{" "}
                <span className="text-[#4CAF50]">Freshness</span>
              </h1>
              <p className="text-lg text-white/90 mb-10 leading-relaxed">
                Experience our farm-to-table traceability through a high-definition visual lens. We bridge
                the gap between organic soil and global distribution with unmatched efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#4CAF50] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-400/40 transition-all flex items-center gap-2">
                  Explore Our Quality
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Video ─────────────────────────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1280px] px-8 mx-auto">
            {/* Section header */}
            <div className="mb-12 text-center">
              <h2 className="text-[32px] font-semibold text-[#1A3A5F] mb-4">
                Global Operations in Motion
              </h2>
              <div className="h-1 w-24 bg-[#4CAF50] mx-auto rounded-full" />
            </div>

            {/* Video player card */}
            <div
              className="relative rounded-2xl overflow-hidden group border border-gray-200/50"
              style={{ boxShadow: "0 20px 50px -12px rgba(0,0,0,0.15)" }}
            >
              <div className="aspect-video relative bg-slate-100 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi2NgJfFuXgBQHzlmBukxOHC-cui_4oQtu6Pe6Dw5BAWwVhYyn53Wf0oG-6n7CXBvabn3etx4Mfplh9DLg-FoPesG7SnIr-5KyuVx6NIUGyuf0vUdhezfyJRkSHVQ6_3IY25gvCBEd-umvIAyfJYRhWEmmADLSlLE_XDdHPG7nW7rUKLcihOGLdyOwKFsD0lLHAt5gio11mwaqNGkdayKyN6Ef51pEm6Y82ennwKIpX8POCqd8zcX_corWl4Bhcp6Zn8SHPGoo_fug"
                  alt="Logistics Operations Video Placeholder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 bg-[#4CAF50] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined text-white text-5xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </button>
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div className="text-white drop-shadow-lg">
                    <h3 className="text-2xl font-semibold mb-1">24/7 Supply Chain Monitoring</h3>
                    <p className="text-base text-white/90">From picking to final port of entry</p>
                  </div>

                  {/* Live badge */}
                  <div
                    className="px-4 py-2 rounded-lg text-[#1A3A5F] text-[12px] font-bold uppercase tracking-[0.05em] flex items-center gap-2 border border-white/50"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                    </span>
                    LIVE FEED: PORT OF SINGAPORE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Media Gallery ──────────────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1280px] px-8 mx-auto">
            {/* Gallery header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <h2 className="text-[32px] font-semibold text-[#1A3A5F]">The Quality Archive</h2>
                <p className="text-gray-500 text-base">
                  High-resolution snapshots of our agricultural excellence.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="p-3 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-2 font-semibold text-sm">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                  Filter
                </button>
                <button className="p-3 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-2 font-semibold text-sm">
                  <span className="material-symbols-outlined text-lg">grid_view</span>
                  View
                </button>
              </div>
            </div>

            {/* 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GALLERY_ITEMS.map((item) => (
                <GalleryCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

      </main>

  
    </div>
  );
}