// Contact.jsx — RPG Fresh Contact Page
// Converted from HTML to React with Tailwind CSS

import { useState } from "react";

// ── Data ───────────────────────────────────────────────────────────────────

const CONTACT_DETAILS = [
  {
    icon: "mail",
    label: "General Inquiries",
    value: "info@therpgfresh.com",
  },
  {
    icon: "call",
    label: "Direct Line",
    value: "+91 8438115340",
  },
];

const OFFICES = [
  {
    icon: "location_on",
    title: "India Headquarters",
    address: "Chennai Logistics Hub, Tamil Nadu",
  },
  {
    icon: "corporate_fare",
    title: "UAE Distribution Center",
    address: "Jebel Ali Free Zone, Dubai",
  },
];


// ── Sub-components ─────────────────────────────────────────────────────────

/** Shared input / label wrapper */
function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold uppercase tracking-[0.05em] text-gray-500 ml-1 block">
        {label}
      </label>
      {children}
    </div>
  );
}

/** Shared text-input style */
const inputCls =
  "w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none transition-all duration-200";

// ── Main Export ─────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up your API call / form submission here
    console.log("Form submitted:", form);
  };

  return (
    <div
      className="min-h-screen font-sans text-gray-900"
      style={{ background: "#f7f9fb" }}
    >
     

      <main>
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="relative pt-24 pb-16 px-6 overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-green-700/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-start gap-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-green-700">
                Global Reach • Farm Fresh
              </span>
              <h1 className="text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
                Connect with{" "}
                <span
                  className="text-green-700"
                  style={{ textShadow: "0 0 15px rgba(0,110,28,0.1)" }}
                >
                  RPG Fresh
                </span>
              </h1>
              <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
                Bridging the gap between premium agriculture and global distribution. Partner with us for
                reliable logistics and farm-to-table excellence across borders.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bento Contact Area ───────────────────────────────────────────── */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* ── Contact Form ── */}
              <div
                className="lg:col-span-7 rounded-xl p-8 lg:p-10 shadow-xl border border-gray-100 bg-white"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">Send an Inquiry</h2>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Full Name */}
                  <Field label="Full Name">
                    <input
                      className={inputCls}
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </Field>

                  {/* Company Email */}
                  <Field label="Company Email">
                    <input
                      className={inputCls}
                      type="email"
                      name="email"
                      placeholder="john@export-logistics.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </Field>

                  {/* Subject */}
                  <div className="md:col-span-2">
                    <Field label="Subject">
                      <input
                        className={inputCls}
                        type="text"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={form.subject}
                        onChange={handleChange}
                      />
                    </Field>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2 space-y-2">
                    <Field label="Your Message">
                      <textarea
                        className={inputCls + " resize-none"}
                        name="message"
                        placeholder="How can we help your business grow?"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                      />
                    </Field>
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-2 bg-green-700 text-white w-full md:w-auto px-10 py-4 rounded-full font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-green-700/20"
                    >
                      Submit Inquiry
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              {/* ── Info Cards ── */}
              <div className="lg:col-span-5 flex flex-col gap-8">

                {/* Direct Contact */}
                <div className="rounded-xl p-8 border-l-4 border-l-green-700 bg-white shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Global Coordination
                  </h3>
                  <div className="space-y-6">
                    {CONTACT_DETAILS.map(({ icon, label, value }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-green-700">{icon}</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-gray-500 mb-1">
                            {label}
                          </p>
                          <p className="text-gray-900 font-semibold">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Locations */}
                <div className="rounded-xl p-8 flex-1 bg-white shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Offices</h3>
                  <div className="space-y-6">
                    {OFFICES.map(({ icon, title, address }) => (
                      <div key={title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-blue-500">{icon}</span>
                        </div>
                        <div>
                          <p className="text-gray-900 font-bold">{title}</p>
                          <p className="text-gray-500 text-sm">{address}</p>
                        </div>
                      </div>
                    ))}

                    {/* ISO badge */}
                    <div className="mt-8 p-4 bg-gray-100 rounded-lg flex items-center gap-4">
                      <span
                        className="material-symbols-outlined text-green-700"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        verified
                      </span>
                      <p className="text-xs text-gray-500">
                        All operations are ISO 22000 &amp; HACCP Certified for food safety.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Global Trade Routes Map ───────────────────────────────────────── */}
        <section
          className="py-24 px-6 border-y border-gray-100 relative overflow-hidden"
          style={{ background: "radial-gradient(circle at center, #ffffff 0%, #f7f9fb 100%)" }}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-[32px] font-semibold text-gray-900 mb-4">
                Global Trade Routes
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Visualizing our 24/7 logistics network connecting the finest Indian farms to the
                tables of the world.
              </p>
            </div>

            {/* Map image */}
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnj19onVvXfDhUZmTilE4xNlJ7BaQ21ZxJzSsR5gRbfdyV4AgExbH82EAp2iEWjQbeybmM8lhaWmC6ZBCNuOdFFrl9PTDDoepZgVzW9fM9dfL4RI87t_0r0h3XZVt4QdzHsDGco2trIn4mxtohI-OYSaCN-r2gA8yuXW-7xDVovNHE8fRUnu2Zz52QwaKcFrlsXBZM5B9Sj5OTCU-X9VWN7P9133YdOlkFhSXM4uvYQxxistdpYnjCSAG7GbyZkXbPvE95xelDOflP"
                alt="Global Logistics Network"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Animated glowing nodes */}
              <div className="absolute top-1/4 left-1/4 animate-pulse">
                <div
                  className="w-3 h-3 bg-green-300 rounded-full"
                  style={{ boxShadow: "0 0 10px #78dc77" }}
                />
              </div>
              <div className="absolute top-1/2 right-1/3 animate-pulse delay-700">
                <div
                  className="w-3 h-3 bg-green-300 rounded-full"
                  style={{ boxShadow: "0 0 10px #78dc77" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-green-50 rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-green-700/10">
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-700/10 blur-3xl -mr-32 -mt-32 pointer-events-none" />

              {/* Text */}
              <div className="relative z-10 max-w-xl">
                <h2 className="text-[32px] font-semibold text-gray-900 mb-4">
                  Ready to Partner?
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  We are currently accepting new distribution partners for the upcoming seasonal
                  harvest. Join the RPG Fresh network today.
                </p>
              </div>

              {/* Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-green-700 border border-green-700/20 font-bold rounded-full hover:bg-gray-50 transition-colors">
                  Download Brochure
                </button>
                <button className="px-8 py-4 bg-green-700 text-white font-bold rounded-full hover:brightness-110 shadow-lg shadow-green-700/20 transition-all active:scale-95">
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

 
    </div>
  );
}