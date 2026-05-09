import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// ── Data ───────────────────────────────────────────────────────────────────

const PRODUCTS = {
  fruits: {
    isSplitLayout: true,
    sections: [
      {
        title: "Mangoes",
        description:
          "India's finest mango varieties, harvested at peak ripeness from certified orchards and processed for premium international export.",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Alphonso", desc: "The king of mangoes — rich, creamy texture with vibrant golden hue from Ratnagiri." },
          { name: "Bangarapalli", desc: "Large, fiber-free variety with sweet, aromatic flesh from Andhra Pradesh." },
          { name: "Cedurum", desc: "Firm-textured export grade mango with excellent shelf life for long-haul transit." },
          { name: "Kesar", desc: "Saffron-hued premium variety from Gujarat, prized for intense fragrance and sweetness." },
        ],
      },
      {
        title: "Tropical Fruits",
        description:
          "Freshly harvested tropical staples — pineapples and bananas — graded and packed to international quality standards for global markets.",
        image: "https://images.unsplash.com/photo-1550258114-68bd29606276?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Queen Pineapple", desc: "Intensely sweet and fragrant variety with deep yellow flesh and edible core from Konkan." },
          { name: "YVB Banana", desc: "Yenumuluru variety — firm, sweet, and high-yielding for bulk export." },
          { name: "RK Banana", desc: "Rasthali variety prized for its thin peel and rich, honey-like flavor." },
          { name: "GF Banana", desc: "Grand Naine Cavendish variety preferred globally for consistent export quality." },
          { name: "Red Banana", desc: "Specialty variety with a reddish-purple peel and creamy, raspberry-tinged flesh." },
          { name: "Green Banana", desc: "Harvested green for extended shelf life, ripens uniformly during transit." },
        ],
      },
      {
        title: "Seasonal & Specialty",
        description:
          "Rare and seasonal Indian fruits sourced at their nutritional peak, offering unique flavors and health benefits for discerning international buyers.",
        image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Papaya", desc: "Enzyme-rich tropical fruit, harvested at optimal maturity for maximum export life." },
          { name: "Jackfruit", desc: "World's largest tree fruit — fibrous, sweet varieties packed for fresh and processed export." },
          { name: "Amla", desc: "Indian gooseberry, one of the richest natural sources of Vitamin C, prized in wellness markets." },
        ],
      },
    ],
  },

  // Vegetables use a split editorial layout
  vegetables: {
    isSplitLayout: true,
    sections: [
      {
        title: "Gourds & Greens",
        description:
          "Our fresh harvest of nutrient-rich gourds and crisp greens, sourced from local farms and processed to retain maximum freshness.",
        image: "https://images.unsplash.com/photo-1566385278453-61245bf94851?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Bitter Gourd", desc: "Organic, medicinal grade green variety with firm texture." },
          { name: "Bottle Gourd", desc: "High water content, harvested fresh at peak tenderness." },
          { name: "Snake Gourd", desc: "Long, tender varieties optimized for bulk packaging." },
          { name: "Ivy Gourd", desc: "Small, crunchy green gourds, rich in vitamins." },
          { name: "Ridge Gourd", desc: "Angled gourd with dark green skin and soft white flesh." },
          { name: "Chow Chow", desc: "Also known as Chayote, a crisp and mild-flavored vegetable." },
        ],
      },
      {
        title: "Beans & Legumes",
        description:
          "Premium protein-rich bean varieties, hand-picked and standardized for quality, size, and durability for long-distance exports.",
        image: "https://images.unsplash.com/photo-1550592704-6c76defa9985?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Cluster Beans", desc: "Standardized size for export, high in dietary fiber." },
          { name: "Broad Beans", desc: "Rich in plant protein, sourced from chemical-free farms." },
          { name: "Long Beans", desc: "Hand-picked tender stalks, perfect for fresh markets." },
        ],
      },
      {
        title: "Roots & Bulbs",
        description:
          "Fresh earth-grown produce, carefully cleaned and cured to ensure a long shelf-life for international shipping.",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Small Onion", desc: "Intense flavor, essential for traditional gourmet recipes." },
          { name: "Garlic", desc: "Well-cured white garlic bulbs with high pungency." },
          { name: "Ginger", desc: "Aromatic and fresh roots, washed and graded for export." },
          { name: "Elephant Yam", desc: "Large, nutrient-dense tuber with a firm texture." },
          { name: "Koorka", desc: "Chinese potato, a seasonal specialty from southern estates." },
          { name: "Arbi", desc: "Taro root, harvested for creamy consistency and size." },
        ],
      },
      {
        title: "Leafy Vegetables",
        description:
          "Freshly harvested organic leaves, quickly pre-cooled to lock in vibrant color and nutritional density.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Spinach", desc: "Triple-washed organic greens, rich in iron." },
          { name: "Sessile Joyweed", desc: "Traditional medicinal greens (Ponnanganni)." },
          { name: "Black Nightshade Leaves", desc: "Nutrient-packed Manathakkali leaves." },
          { name: "Horse Purslane", desc: "Hearty succulent greens with high mineral content." },
          { name: "Hummingbird Tree Leaves", desc: "Agathi leaves, known for therapeutic properties." },
          { name: "Coriander Leaves", desc: "Extremely fragrant and fresh garnish grade." },
          { name: "Curry Leaves", desc: "Dark green, aromatic leaves for seasoning." },
          { name: "Drumstick Leaves", desc: "Superfood leaves, high in vitamins A and C." },
          { name: "Agathi Poo / Flower", desc: "Edible flowers used in specialized health diets." },
        ],
      },
      {
        title: "Herbal & Sacred Leaves",
        description:
          "Traditionally significant leaves sourced and handled with extreme care to maintain purity and freshness.",
        image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Betel Leaves", desc: "Fresh, pungent leaves for cultural and digestive use." },
          { name: "Vilvam Leaves", desc: "Sacred leaves used in traditional rituals and medicine." },
          { name: "Mango Leaves", desc: "Fresh green leaves for festive decorations." },
          { name: "Neem Leaves", desc: "Bitter medicinal leaves with potent antibacterial properties." },
          { name: "Tulsi Leaves", desc: "Holy Basil, aromatic and fresh for wellness use." },
          { name: "Arugam Pill", desc: "Bermuda grass, used for spiritual and health purposes." },
        ],
      },
      {
        title: "Others",
        description:
          "A diverse collection of essential daily vegetables, graded and sorted for consistency in global markets.",
        image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Brinjal", desc: "Shiny, firm eggplants in various export-ready sizes." },
          { name: "Cucumber - Yellow", desc: "Crisp and refreshing, ideal for stews and salads." },
          { name: "Pumpkin", desc: "Standardized weight and mature flesh for longevity." },
          { name: "Raw Mango", desc: "Firm and sour, perfect for pickles and chutneys." },
          { name: "Drumstick", desc: "Moringa pods, rich in fiber and minerals." },
          { name: "Banana Flower", desc: "Exotic floral vegetable, carefully handled to prevent bruising." },
        ],
      },
    ],
  },

  papad: {
    isSplitLayout: true,
    sections: [
      {
        title: "Plain Urad Papad",
        description:
          "Classic sun-dried black gram lentil wafers crafted with minimal ingredients to deliver the authentic, timeless taste of traditional Indian households. Crisp, light, and universally loved.",
        image: "https://images.unsplash.com/photo-1601050690597-df056fb1d745?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Crisp Texture", desc: "Uniformly thin and evenly dried for a satisfying crunch every time." },
          { name: "Minimal Ingredients", desc: "Pure urad dal and salt — no artificial additives or preservatives." },
          { name: "Versatile Pairing", desc: "Perfect alongside curries, dals, or as a standalone snack when roasted or fried." },
        ],
      },
      {
        title: "Peppered Urad Papad",
        description:
          "Urad dal papads infused with coarsely cracked black pepper, adding a bold, pungent heat to the classic recipe. A favourite in upscale dining and gourmet export segments worldwide.",
        image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Bold Pepper Notes", desc: "Coarsely ground black pepper embedded into the dough for layered heat." },
          { name: "Export Favourite", desc: "High demand in Middle Eastern and European gourmet food markets." },
          { name: "Roast or Fry", desc: "Equally excellent when dry-roasted over flame or deep fried golden." },
        ],
      },
      {
        title: "Cumin Papad",
        description:
          "Delicately seasoned with whole cumin seeds, these papads carry an earthy, aromatic warmth that elevates any meal. A staple in traditional Rajasthani cuisine and festive dining spreads.",
        image: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Earthy Aroma", desc: "Whole jeera seeds pressed into each wafer for a distinct toasted fragrance." },
          { name: "Festive Staple", desc: "Traditional use in Rajasthani thali and celebratory meal spreads." },
          { name: "Digestive Properties", desc: "Cumin aids digestion, adding a wellness angle to every serving." },
        ],
      },
      {
        title: "Red Chilli Papad",
        description:
          "Fire-kissed papads packed with vibrant red chilli for those who prefer a bold, spicy kick. Ideal for heat-loving international markets, especially across Southeast Asia and the Gulf.",
        image: "https://images.unsplash.com/photo-1588323002-60fa2b1e1ab5?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Intense Heat", desc: "Red chilli blended into the dough for consistent spice in every bite." },
          { name: "Vibrant Colour", desc: "Rich red hue makes these a visually striking addition to any meal spread." },
          { name: "High Export Demand", desc: "Popular in spice-forward markets across Southeast Asia and the Gulf region." },
        ],
      },
      {
        title: "Masala Papad",
        description:
          "A complex blend of traditional Indian spices — cumin, coriander, chilli, and more — pressed into each wafer to deliver a rich, multi-layered flavour experience in every single bite.",
        image: "https://images.unsplash.com/photo-1619441201998-542fe8420455?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Multi-Spice Blend", desc: "Cumin, coriander, dried chilli, and asafoetida layered into every wafer." },
          { name: "Restaurant Grade", desc: "Used as a premium starter in Indian restaurants across global markets." },
          { name: "Artisanal Production", desc: "Handcrafted in small batches to ensure consistent flavour in every disc." },
        ],
      },
    ],
  },

  coconut: {
    isSplitLayout: true,
    sections: [
      {
        title: "Green Tender Coconut",
        description:
          "Freshly harvested young green coconuts brimming with natural electrolyte-rich water and soft, jelly-like kernel. Sourced from coastal Karnataka and Kerala farms for immediate global export.",
        image: "https://images.unsplash.com/photo-1523672557977-2c106accb36d?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "High Water Content", desc: "Each coconut yields 300–500 ml of naturally sterile, electrolyte-rich water." },
          { name: "Tender Kernel", desc: "Soft, spoonable white jelly — perfect for fresh consumption and premium packaging." },
          { name: "Export Ready", desc: "Trimmed and packed in ventilated crates for long-haul reefer transport." },
        ],
      },
      {
        title: "Orange Tender Coconut",
        description:
          "A rare and prized variety distinguished by its vibrant orange husk, naturally sweeter water, and superior shelf life. Highly sought after in premium retail and hospitality export segments.",
        image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Sweeter Water", desc: "Naturally higher sugar content gives a distinctly richer, milder taste." },
          { name: "Premium Variety", desc: "Rare orange-husked cultivar preferred by luxury hotels and specialty retailers." },
          { name: "Extended Shelf Life", desc: "Thick husk retains freshness longer — ideal for distant international markets." },
        ],
      },
      {
        title: "Semi-Husked Coconut",
        description:
          "Partially dehusked coconuts with the inner brown shell intact, offering a balance between protection and reduced weight for cost-efficient export. Ready for further processing at the destination.",
        image: "https://images.unsplash.com/photo-1596435384218-c396dfc0936e?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Reduced Shipping Weight", desc: "Outer husk removed to cut freight costs without compromising kernel protection." },
          { name: "Processor-Friendly", desc: "Preferred format for oil mills, desiccated coconut units, and food factories." },
          { name: "Consistent Sizing", desc: "Graded by diameter to ensure uniformity across bulk export consignments." },
        ],
      },
      {
        title: "De-Husked Coconut",
        description:
          "Fully husked mature coconuts with only the hard brown shell remaining, delivering maximum convenience for retail markets and food processing industries worldwide. Clean, compact, and export-certified.",
        image: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?auto=format&fit=crop&q=80&w=800",
        items: [
          { name: "Retail Ready", desc: "Clean brown shell format preferred by supermarkets and direct consumers globally." },
          { name: "High Copra Yield", desc: "Fully mature kernel with high oil content — ideal for copra and coconut milk." },
          { name: "Hygienic Processing", desc: "Mechanically dehusked in export-certified units and packed in food-grade cartons." },
        ],
      },
    ],
  },
};

const CATEGORIES = [
  { key: "fruits",     label: "Fruits"     },
  { key: "vegetables", label: "Vegetables" },
  { key: "papad",      label: "Papad"      },
  { key: "coconut",    label: "Coconut"    },
];

const FAQS = [
  {
    q: "What certifications do your products carry?",
    a: "All our export products are Global GAP, Organic NPOP/NOP certified, and meet the strict phytosanitary standards of the importing nations (EU, US, Middle East).",
  },
  {
    q: "How do you maintain the cold chain during transit?",
    a: "We use IoT-enabled reefer containers that provide real-time temperature and humidity logs accessible to our clients 24/7.",
  },
  {
    q: "Can I request customized packaging for wholesale?",
    a: "Yes, we offer white-labeling and custom biodegradable packaging options for bulk international orders.",
  },
];

const JOURNEY_STEPS = [
  { step: 1, title: "Sustainable Harvest", desc: "Directly sourced from Global GAP certified farms at peak nutrient levels.", active: true  },
  { step: 2, title: "Cold-Chain Prep",     desc: "Rapid pre-cooling within 2 hours to lock in freshness and vital nutrients.", active: true  },
  { step: 3, title: "Quality Audit",       desc: "Multi-point digital scanning for sugar content, size, and shelf-life potential.", active: true  },
  { step: 4, title: "Smart Export",        desc: "AI-optimized routing to minimize transit time to international ports.", active: false },
];

// ── Sub-components ─────────────────────────────────────────────────────────

/** Standard card — Fruits, Papad, Coconut */
function ProductCard({ product, index }) {
  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200
                 transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                 hover:-translate-y-2 hover:shadow-2xl"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 right-4 bg-green-800 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
          {product.tag}
        </span>
      </div>
      <div className="p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-green-800 mb-2">
          {product.origin}
        </p>
        <h3 className="text-[22px] font-semibold leading-snug text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.desc}</p>
        <div className="flex items-center gap-1 text-green-700">
          {Array(5).fill(null).map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            >
              star
            </span>
          ))}
          <span className="ml-2 text-gray-400 text-xs font-medium">{product.rating}</span>
        </div>
      </div>
    </div>
  );
}

/** Split editorial section — Vegetables only */
function VegetableSection({ section, index }) {
  const reversed = index % 2 !== 0;
  return (
    <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 md:gap-12 mb-12 md:mb-24`}>
      {/* Image panel */}
      <div className="lg:w-1/2">
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-auto lg:h-[500px] group">
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-white text-3xl font-bold">{section.title}</h3>
          </div>
        </div>
      </div>

      {/* Text + items panel */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h4 className="text-[32px] font-semibold text-green-800 mb-4">{section.title}</h4>
        <p className="text-base text-gray-500 mb-8 leading-relaxed">{section.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {section.items.map((item) => (
            <div
              key={item.name}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-200"
            >
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-800 flex-shrink-0">
                <span className="material-symbols-outlined text-xl">eco</span>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 group-hover:text-green-800 transition-colors">
                  {item.name}
                </h5>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** FAQ accordion row */
function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-all"
      >
        <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
        <span
          className="material-symbols-outlined text-green-800 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-4 text-gray-500 border-t border-gray-200 text-sm leading-relaxed">
          {faq.a}
        </div>
      )}
    </div>
  );
}

// ── Main Export ─────────────────────────────────────────────────────────────

const VALID_CATEGORIES = new Set(["fruits", "vegetables", "papad", "coconut"]);

export default function Products() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(() => {
    const param = searchParams.get("category");
    return VALID_CATEGORIES.has(param) ? param : "fruits";
  });

  useEffect(() => {
    const param = searchParams.get("category");
    if (VALID_CATEGORIES.has(param)) {
      setActiveCategory(param);
    }
  }, [searchParams]);

  const data = PRODUCTS[activeCategory];
  const isSplit = data?.isSplitLayout === true;

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans selection:bg-green-100 selection:text-green-900">

      <main className="min-h-screen pb-24 md:pb-12">

        {/* Hero */}
        <section className="relative h-[280px] md:h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-50">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASRUKErmETFlrBcfpzeZgJ8YwD7CsQHDtHHzjdm9-VQqre2ilmUeQw4agp05TaKsDA_U5sY9v6_pEf2jc6avjYHQTos175H9kY7Dy7rareAemeW8rYhaiOjon5yctD90zMfpKacOrQW27O2u8ZE1iRf3sRoEDKa1qty1GqogKk3iQJ3Y3KbgGRtztKJdFrEseLt4n00d9oPPGiCsUI471YxGhFZdFYpkqLqH-TGAhnmgzFfGLRRH_igI822QySobdN9Pk8fqOJd2Ji"
              alt="Premium organic produce export backdrop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Export Catalog</h1>
            <p className="text-sm md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Sourcing the finest organic produce across borders. Quality verified, freshness guaranteed.
            </p>
          </div>
        </section>

        {/* Category Nav */}
        <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-center gap-8 md:gap-16 py-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`text-[12px] font-bold uppercase tracking-widest whitespace-nowrap px-2 pb-1 transition-all border-b-2 ${
                    activeCategory === key
                      ? "text-green-800 border-green-800"
                      : "text-gray-400 border-transparent hover:text-green-800"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Display — switches between card grid and split layout */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 min-h-[600px]">
          {isSplit ? (
            <div className="space-y-4">
              {data.sections.map((section, i) => (
                <VegetableSection key={section.title} section={section} index={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.map((product, index) => (
                <ProductCard key={product.name} product={product} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* Freshness Journey */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 mb-16">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-800/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <h2 className="text-[32px] font-semibold text-gray-900 mb-12 flex items-center gap-4">
              <span className="material-symbols-outlined text-green-800" style={{ fontVariationSettings: "'FILL' 1" }}>
                monitoring
              </span>
              Real-Time Freshness Journey
            </h2>
            <div className="relative">
              <div className="absolute top-6 left-0 w-full h-1 bg-gray-200 hidden md:block">
                <div className="h-full bg-green-700 w-3/4 rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {JOURNEY_STEPS.map(({ step, title, desc, active }) => (
                  <div key={step} className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 ring-8 ring-gray-50 ${active ? "bg-green-700 text-white" : "bg-gray-300 text-gray-600"}`}>
                      {step}
                    </div>
                    <h4 className={`text-lg font-semibold mb-2 ${active ? "text-gray-900" : "text-gray-400"}`}>{title}</h4>
                    <p className={`text-sm leading-relaxed ${active ? "text-gray-500" : "text-gray-400"}`}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-[32px] font-semibold text-gray-900 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </section>
      </main>

   

      {/* Bottom Nav — mobile only */}
      <nav className="md:hidden bg-white border-t border-gray-200 fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-2xl">
        {[
          { icon: "home_app_logo", label: "Explore", active: false },
          { icon: "grid_view",     label: "Catalog", active: true  },
          { icon: "monitoring",    label: "Track",   active: false },
          { icon: "person",        label: "Profile", active: false },
        ].map(({ icon, label, active }) => (
          <button
            key={label}
            className={`flex flex-col items-center justify-center transition-colors ${
              active ? "text-green-800 bg-green-50 rounded-xl px-4 py-1" : "text-gray-400 hover:text-green-800"
            }`}
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}