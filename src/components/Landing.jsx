import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal.js";

export default function Landing() {
  // Activate scroll-triggered fade-in animations
  useScrollReveal();

  const missionGoals = [
    {
      icon: "eco",
      title: "Source with Care",
      desc: "Ethical sourcing from local Indian farmers with strict quality control and fair trade practices at every step.",
    },
    {
      icon: "local_shipping",
      title: "Delivery with Precision",
      desc: "High-velocity cold-chain logistics ensuring farm-fresh delivery within hours to international distribution hubs.",
    },
    {
      icon: "handshake",
      title: "Build Lasting Bonds",
      desc: "Cultivating long-term partnerships through radical transparency, trust, and shared value for our global B2B clients.",
    },
    {
      icon: "public",
      title: "Take India Global",
      desc: "Promoting the premium quality and rich heritage of Indian agriculture on a global stage with pride and excellence.",
    },
  ];

  const products = [
    {
      name: "Fruits",
      tag: "Premium",
      tagStyle: "text-secondary bg-secondary/10",
      desc: "Mangoes, Grapes, Pomegranates & seasonal varieties.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP8K1s2IkvEURRXI2DYKMEtCedQVShNGQB0XVJDHtovo3kyejGYHsGb6jsUt-ypN4hSRIdXuyCSl1OA1TKuyY2hJBbiupHVLsx-HthOMsHHqXu-ytvK0NPpuJ7rmHsQOTfmP8pGUM8lPGalYjVQJ-LUjc38sslkNDX-8XzAngejcX-OdGf4ILSDGq8QxBeKrbLOknFEexIc-X3fPWFKNBK5Z1QNp2PzvSWsvgJKeuyhgu3_wdZgRdvi2qtqr2w8VfqWg1rCJfhz42V",
    },
    {
      name: "Vegetables",
      tag: "Organic",
      tagStyle: "text-on-primary-container bg-primary-container/20",
      desc: "Onion, Chili, Drumstick & nutrient-rich Leafy Greens.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZTCGUSAdN_bvmpAlp6Guap1xastJDuwiqskmGj7SCKVZtZC_OayvtdxvedlH-pYfUGNYjLseniV9pwGBJ4m2viqIxWI-gVcI_25i7OA0cgxbtlND6-RE9OcswXfBAPvan1XgWXuOldjaXM_VTeaz9Cv3tUxKtcmrRZTNdVQysGYcS45Dfkt2k4GTOdhvtb7QauvZOwcBTCIw6PRbiEybiEon3gEz7Ab9w2eiYNPqhGWTo84_NgxAku9es8qEm9YS49aYtqkwrN3xB",
    },
    {
      name: "Coconut",
      tag: "Bulk",
      tagStyle: "text-secondary bg-secondary/10",
      desc: "Husked, Semi-Husked & refreshing Tender Coconuts.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtRudg3zpjLzufvuBw6AjT5oITByU0dE4C7wzAytgzPQugKAN113EzPiHUNCUbHbQdVv14Y8FwEnkkoO7d4o6Zs-bst7O9aV5pAJr0SB70TsSWBZgzVkAB4eCEvkYwJ6DeCRNTWbvefgY_g6K6VoiLcx0eG55yImaKZGlxl8cH3Ria8M4TmqMKWOMABZ0fReoj2eWTxDrK6DoKh0RngxaJ1jCrx1MXVpxNN5F1oQnRyU5b0dUbxKo1sXTWTSo8uEadrbOHskTflC8L",
    },
    {
      name: "Papad",
      tag: "Traditional",
      tagStyle: "text-on-primary-container bg-primary-container/20",
      desc: "Authentic Indian flavors, hygienically processed and packed.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKyGRJSucTiBiZtJqSjeu3UrwqkAUsRionIIe_KooLosEv9TEMp9y8DvxJ8We5HpE9OtSzgrUm5LgoGKlmBuQVmInnzDWCBXBWUtPXtGrSUEBiuc8jff7t0CTwJWgtx_j-l0rUCWoCBY9CIR8jY63ZLXIciXBQVQVq8SjshxXN9QHzI7tnf_BC2nuNZWa7Ppl1uyHbI7PJ0h70Bf9fHzVDbln-lsjojXUHmjv0FQ_lbZcyOTf3qzpkV13NXo1PemMxmH865PY92U3k",
    },
  ];

  return (
    <main>
      {/* ===================== Hero Section ===================== */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Fresh Produce Logistics"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiuY1wBR_FT3c1aerndpHGgTLsA8LrzlMoE7a_TTPpcTK6ttsSRGfUUgfc1MfOZ6ApHG3QFx-yPJWIiJsIncPVhEDsWYbShj-FophgRJN6OioERlshtvkKJz5DJDWMzvOv6XQJLuRpcRhXZTbeQipXoaM71heBBujXqTcTqABivYUA_mFUkOxuAH7w6cmN6HIsHW-SqU1fEsmb2Rcyo7OhR33jLzbDH425RD6RyKv7ZloIXY7rWpV0YugjBLmqDaICMcw0WvVYdVUi"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full animate-fade-in-up">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-secondary-container/50 border border-secondary/20 text-secondary font-label-caps tracking-[0.2em] text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              FRESH | PURE | GLOBAL
            </span>
            <h1 className="font-headline-xl text-on-surface mb-6 leading-[1.1] text-5xl md:text-7xl">
              Freshness that travels miles without losing a smile.
            </h1>
            <p className="text-on-surface-variant text-body-lg mb-10 max-w-2xl leading-relaxed">
              Bridging the gap between{" "}
              <span className="highlight-green">India's fertile lands</span> and the{" "}
              <span className="highlight-green">world's finest dinner tables</span>{" "}
              through precision logistics and sustainable farming.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                to="/products"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold text-md hover:translate-y-[-2px] transition-all flex items-center gap-3 shadow-xl shadow-secondary/20"
              >
                Explore Products{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="bg-white border border-outline/20 text-on-surface px-8 py-4 rounded-lg font-bold text-md hover:bg-surface-container-low transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Vision Section ===================== */}
      <section className="py-stack-lg bg-surface reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="overflow-hidden rounded-2xl shadow-xl relative z-10 border border-black/5">
                <img
                  alt="Visionary Agriculture"
                  className="w-full transform group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA96Z3pkiNiXN-WQbIpZ_kb6rjC6V-fTk72mrQSA3O29M5Tft_MvVBvSVUynDxDDc7H7mdFw8gYYVVtkfOmhwUuPxESd5BtjMuO9Mb_R9oKvo2HkVmlJaTjbA7f7_adW3L4BOQnxX0n0pet12m4whV-v34MuLHqV8M5HD9hpC8JrXb50N82Rt8CmabZBBnnOCBym4i_k4uBnX8dpOESvQ3FqYY7iVyxafzMcQoZ-cWRYCfdkWikpxWgDol_UNylXOE_Dsop5A4B1XeD"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-fixed-dim/20 rounded-full blur-3xl z-0"></div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-secondary"></div>
                <h2 className="font-label-caps text-secondary text-lg font-extrabold tracking-[0.25em] border-b-2 border-secondary pb-1">
                  OUR VISION
                </h2>
              </div>
              <h3 className="font-headline-lg text-on-surface mb-8 leading-tight">
                To be a globally trusted name in fresh produce exports connecting
                India's farms to tables worldwide.
              </h3>
              <p className="text-on-surface-variant mb-10 text-lg">
                We believe in a future where high-quality, organic Indian produce is
                accessible to every corner of the globe, maintaining the integrity of
                the soil and the prosperity of the farmer.
              </p>
              <div className="p-8 rounded-2xl bg-surface-container-low border border-black/5">
                <div className="flex items-center gap-4 text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    travel_explore
                  </span>
                  <div>
                    <h4 className="font-bold">Global Impact</h4>
                    <p className="text-on-surface-variant text-sm">
                      Empowering over 500+ local farming families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Mission Section ===================== */}
      <section className="py-stack-lg bg-surface-container-lowest reveal-on-scroll border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-secondary"></div>
              <h2 className="font-label-caps text-secondary text-lg font-extrabold tracking-[0.25em] uppercase">
                OUR MISSION
              </h2>
              <div className="h-[2px] w-8 bg-secondary"></div>
            </div>
            <h3 className="font-headline-lg text-on-surface mb-4">
              Cultivating Excellence Across the Supply Chain
            </h3>
            <p className="text-on-surface-variant">
              Four strategic goals driving our commitment to quality and
              sustainability in every shipment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionGoals.map((goal) => (
              <div
                key={goal.title}
                className="glass-card p-8 rounded-2xl group shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    {goal.icon}
                  </span>
                </div>
                <h4 className="font-headline-md text-on-surface text-xl mb-3">
                  {goal.title}
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Why Choose Us / Bento Grid ===================== */}
      <section className="py-stack-lg bg-surface reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-on-surface mb-4">
              The RPG Advantage
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Global Reach */}
            <div className="md:col-span-8 glass-card rounded-2xl p-10 flex flex-col relative overflow-hidden group shadow-sm justify-center items-center text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm">
                <span className="material-symbols-outlined text-5xl">public</span>
              </div>
              <div className="relative z-10">
                <h3 className="font-headline-md text-on-surface mb-3">
                  Global Reach &amp; Network
                </h3>
                <p className="text-on-surface-variant max-w-xl text-lg">
                  Seamless export documentation and real-time logistics tracking
                  across Europe, Middle East, and Asia.
                </p>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="md:col-span-4 glass-card rounded-2xl p-10 flex flex-col justify-center items-center text-center shadow-sm">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm">
                <span className="material-symbols-outlined text-5xl">
                  verified_user
                </span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-3">
                Quality Assurance
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Multi-stage inspection process from farm gate to international
                shipping container.
              </p>
            </div>

            {/* Packing & Labeling */}
            <div className="md:col-span-4 glass-card rounded-2xl p-10 flex flex-col justify-center border-l-4 border-l-secondary shadow-sm">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                inventory_2
              </span>
              <h3 className="font-headline-md text-on-surface text-xl mb-3">
                Packing &amp; Labeling
              </h3>
              <p className="text-on-surface-variant text-sm">
                Custom B2B packaging solutions following international food safety
                standards (FSSAI, ISO).
              </p>
            </div>

            {/* Sustainability */}
            <div className="md:col-span-8 glass-card rounded-2xl p-10 flex items-center gap-10 relative overflow-hidden shadow-sm justify-center text-center">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="shrink-0 w-20 h-20 bg-primary-container/20 rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined text-5xl">
                    recycling
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="font-headline-md text-on-surface text-xl mb-3">
                    Sustainability &amp; Eco-Friendly Operations
                  </h3>
                  <p className="text-on-surface-variant text-md max-w-lg">
                    Reducing carbon footprint through optimized transit routes and
                    biodegradable packaging options to protect our planet.
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Products Section ===================== */}
      <section
        id="products"
        className="py-stack-lg bg-surface-container reveal-on-scroll"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline-lg text-on-surface">
                Our Signature Collection
              </h2>
              <p className="text-on-surface-variant mt-2 text-lg">
                Premium exports curated specifically for discerning international
                markets.
              </p>
            </div>
            <a
              href="#"
              className="group text-secondary font-bold flex items-center gap-2 px-6 py-3 bg-white border border-secondary/20 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all shadow-sm"
            >
              View Full Catalog{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((p) => (
              <div
                key={p.name}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:translate-y-[-12px] border border-black/5"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={p.img}
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-headline-md text-on-surface text-2xl">
                      {p.name}
                    </h3>
                    <span
                      className={`${p.tagStyle} px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest`}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Certifications ===================== */}
      <section className="py-stack-lg bg-surface-container-high border-y border-black/5 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-headline-lg text-on-surface mb-4">
                Connected to the Earth's Rhythm
              </h2>
              <p className="text-on-surface-variant mb-12 text-lg leading-relaxed">
                Recognized and certified by the world's leading agricultural and
                trade authorities for excellence in organic farming and global
                exports.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["APEDA", "FSSAI"].map((cert) => (
                  <div
                    key={cert}
                    className="h-24 flex items-center justify-center font-bold text-xl text-on-surface bg-white/80 rounded-xl border border-black/5 hover:border-secondary/30 transition-all shadow-sm cursor-default"
                  >
                    {cert}
                  </div>
                ))}
                <div className="h-24 flex items-center justify-center font-bold text-sm text-on-surface bg-white/80 rounded-xl border border-black/5 hover:border-secondary/30 transition-all shadow-sm text-center leading-tight cursor-default px-2">
                  Coconut
                  <br />
                  Board
                </div>
                {["MSME", "FIEO"].map((cert) => (
                  <div
                    key={cert}
                    className="h-24 flex items-center justify-center font-bold text-xl text-on-surface bg-white/80 rounded-xl border border-black/5 hover:border-secondary/30 transition-all shadow-sm cursor-default"
                  >
                    {cert}
                  </div>
                ))}
                <div className="h-24 flex items-center justify-center bg-secondary/5 rounded-xl border border-secondary/10">
                  <span className="material-symbols-outlined text-secondary">
                    verified
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  alt="Sustainable Organic Agriculture"
                  className="w-full h-[500px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiuY1wBR_FT3c1aerndpHGgTLsA8LrzlMoE7a_TTPpcTK6ttsSRGfUUgfc1MfOZ6ApHG3QFx-yPJWIiJsIncPVhEDsWYbShj-FophgRJN6OioERlshtvkKJz5DJDWMzvOv6XQJLuRpcRhXZTbeQipXoaM71heBBujXqTcTqABivYUA_mFUkOxuAH7w6cmN6HIsHW-SqU1fEsmb2Rcyo7OhR33jLzbDH425RD6RyKv7ZloIXY7rWpV0YugjBLmqDaICMcw0WvVYdVUi"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-label-caps text-xs mb-2">
                    SUSTAINABILITY FIRST
                  </p>
                  <p className="text-xl font-bold">
                    100% Certified Organic Practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
