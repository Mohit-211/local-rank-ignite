import React from "react";

/**
 * Home.tsx — Single-file, production-ready landing page
 * Design: Minimal, high-contrast, conversion-focused
 * Colors: Primary #ff3851, Secondary #f4f7fc
 * Tailwind required. Works in CRA/Vite/Next. Replace anchor hrefs when pages exist.
 */

const PRIMARY = "#ff3851";
const SECONDARY = "#f4f7fc";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* Top Bar / Simple Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2"
            aria-label="LocalSEO Pro - Home"
          >
            <span
              className="inline-block h-6 w-6 rounded-md"
              style={{ background: PRIMARY }}
            />
            <span className="font-semibold">
              LocalSEO <span style={{ color: PRIMARY }}>Pro</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/about" className="hover:opacity-80">
              About
            </a>
            <a href="/services" className="hover:opacity-80">
              Services
            </a>
            <a href="/industries" className="hover:opacity-80">
              Industries
            </a>
            <a href="/blog" className="hover:opacity-80">
              Blog
            </a>
            <a href="/pricing" className="hover:opacity-80">
              Pricing
            </a>
            <a href="/contact" className="hover:opacity-80">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/contact#audit"
              className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow transition"
              style={{ background: PRIMARY }}
            >
              Free SEO Audit
            </a>
            <button
              className="md:hidden rounded-xl p-2 border border-slate-200"
              aria-label="Open menu"
              onClick={() => {
                const el = document.getElementById("mobile-nav");
                if (el) el.classList.toggle("hidden");
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          id="mobile-nav"
          className="md:hidden hidden border-t border-slate-100 bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-3 text-sm">
            {[
              ["About", "/about"],
              ["Services", "/services"],
              ["Industries", "/industries"],
              ["Blog", "/blog"],
              ["Pricing", "/pricing"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(1300px 600px at 80% -10%, ${SECONDARY}, transparent 60%)`,
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-10 md:pt-20 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Dominate Google Maps &{" "}
                <span style={{ color: PRIMARY }}>Local Search</span>.
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                We put you in the <strong>Google Map Pack</strong> for the
                searches that matter, then turn visibility into calls, visits,
                and bookings.
              </p>

              {/* Social proof chips */}
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Chip>300% Avg. Traffic Increase</Chip>
                <Chip>90% Map Pack Rankings</Chip>
                <Chip>150+ Clients Covered</Chip>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact#audit"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white shadow-sm hover:shadow transition"
                  style={{ background: PRIMARY }}
                >
                  Get a Free Local SEO Audit
                </a>
                <a
                  href="/about#work"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold border border-slate-200 hover:bg-slate-50"
                >
                  View Our Work
                </a>
              </div>
            </div>

            {/* Visual: Map Pack mock */}
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="ml-2 text-xs text-slate-500">
                    maps.google.com
                  </span>
                </div>
                <div className="p-4">
                  <SearchBar />
                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    {[1, 2, 3].map((i) => (
                      <MapCard key={i} primary={PRIMARY} />
                    ))}
                  </div>
                </div>
              </div>

              <span className="absolute -top-3 -right-3 text-xs bg-white border border-slate-200 shadow rounded-full px-2 py-1">
                <span className="inline-flex items-center gap-1">
                  <Dot color="#10b981" /> Live Rankings
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local SEO vs Generic SEO */}
      <section className="py-16" style={{ background: SECONDARY }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Why Local SEO Beats{" "}
              <span style={{ color: PRIMARY }}>Generic SEO</span>
            </h2>
            <p className="mt-3 text-slate-600">
              Traditional SEO chases broad keywords. Local SEO captures people
              near you who are ready to buy — and clicks from the Map Pack
              convert far higher.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-5">
            <Feature
              title="Local Visibility"
              desc="Show up in the Google Map Pack for searches in your area."
            />
            <Feature
              title="Intent-Based Traffic"
              desc="Reach customers who are actively looking for your service right now."
            />
            <Feature
              title="Trust & Credibility"
              desc="Reviews + proximity + prominence = instant trust in the SERP."
            />
            <Feature
              title="Measurable ROI"
              desc="Track calls, direction requests, website clicks — all in one report."
            />
          </div>

          {/* Compact comparison */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <Compare
                label="Search Volume"
                left="High (broad)"
                right="High Intent (local)"
              />
              <Compare label="Conversion Rate" left="2–4%" right="12–25%+" />
              <Compare
                label="Time to Results"
                left="6–12 months"
                right="6–12 weeks"
              />
            </div>
            <div className="mt-6 text-center text-sm">
              <span className="font-semibold" style={{ color: PRIMARY }}>
                46%
              </span>{" "}
              of Google searches have local intent. That’s billions of searches
              every month.
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Services That Move the Needle
              </h2>
              <p className="mt-2 text-slate-600">
                Clear deliverables. Transparent reporting. No fluff.
              </p>
            </div>
            <a
              href="/services"
              className="text-sm font-semibold hover:opacity-80"
              style={{ color: PRIMARY }}
            >
              View all services →
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Local SEO Optimization"
              points={[
                "Google Business Profile setup & optimization",
                "NAP consistency & citations",
                "Local keywords & Map Pack strategy",
              ]}
              href="/services#local-seo"
              primary={PRIMARY}
            />
            <ServiceCard
              title="Website SEO (Support)"
              points={[
                "On-page & technical SEO",
                "Internal linking & schema",
                "Content optimization",
              ]}
              href="/services#website-seo"
              primary={PRIMARY}
            />
            <ServiceCard
              title="Reviews & Reputation"
              points={[
                "Automated review requests",
                "Monitoring & response playbooks",
                "Profile hardening against spam",
              ]}
              href="/services#reviews"
              primary={PRIMARY}
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16" style={{ background: SECONDARY }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Industries <span style={{ color: PRIMARY }}>We Serve</span>
          </h2>
          <p className="mt-2 text-slate-600 text-center">
            Specialized playbooks for high-intent local niches.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ["Healthcare", "Dentists, clinics, physiotherapists"],
              ["Legal Services", "Lawyers, notaries, immigration"],
              ["Restaurants & Cafes", "Dining, delivery, catering"],
              ["Fitness & Wellness", "Gyms, yoga, spas"],
              ["Home Services", "Plumbers, electricians, pest control"],
              ["Education & Training", "Coaching, classes, preschools"],
            ].map(([title, desc]) => (
              <a
                key={title}
                href={`/industries#${slug(title)}`}
                className="block"
              >
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-lg transition">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                  <span
                    className="mt-4 inline-flex items-center text-sm font-semibold"
                    style={{ color: PRIMARY }}
                  >
                    Learn more →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-slate-200 hover:bg-white"
            >
              Don’t see your industry? Let’s talk.
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Trusted by <span style={{ color: PRIMARY }}>Local Businesses</span>
          </h2>
          <p className="mt-2 text-slate-600 text-center">
            Real results, not vanity metrics.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              [
                "“LocalSEO Pro helped us rank #1 in Google Maps for ‘dental clinic’. Bookings increased 40%.”",
                "Dr. Rajesh Sharma · Dentist",
              ],
              [
                "“Went from page 5 to Map Pack in 2 months. Calls tripled, the quality improved too.”",
                "Priya Patel · Immigration Lawyer",
              ],
              [
                "“Couldn’t compete with big chains. Map Pack visibility turned it around.”",
                "Arjun Fitness · Gym Owner",
              ],
            ].map(([quote, author]) => (
              <figure
                key={author as string}
                className="h-full rounded-2xl border border-slate-200 bg-white p-6"
              >
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  className="opacity-50"
                >
                  <path
                    d="M7 11h4v10H5V13a6 6 0 0 1 6-6v4a2 2 0 0 0-4 0v0zM17 11h4v10h-6V13a6 6 0 0 1 6-6v4a2 2 0 0 0-4 0v0z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="mt-3 text-slate-700">{quote}</blockquote>
                <figcaption className="mt-4 text-sm font-medium text-slate-600">
                  {author}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              ["500+", "Satisfied Clients"],
              ["98%", "Client Retention"],
              ["150+", "Cities Covered"],
              ["4.9/5", "Average Rating"],
            ].map(([big, small]) => (
              <div
                key={small}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="text-2xl font-extrabold">{big}</div>
                <div className="text-xs text-slate-600">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: PRIMARY }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">
            Ready to be Found? Let’s Get Started
          </h2>
          <p className="mt-2 text-white/90">
            Join 500+ businesses that dominate their local search results. Your
            competitors are already ranking.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact#audit"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold bg-white text-slate-900 hover:shadow"
            >
              Get Your Free Local SEO Audit
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold border border-white/30 hover:bg-white/10"
            >
              See Pricing
            </a>
          </div>

          <div className="mt-6 text-xs text-white/80">
            Our Guarantee: See improvement in local visibility within 90 days,
            or we work for free until you do.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-6 w-6 rounded-md"
                  style={{ background: PRIMARY }}
                />
                <span className="font-semibold">LocalSEO Pro</span>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Helping local businesses dominate Google Maps and local search
                results with proven strategies.
              </p>
              <div className="mt-4 flex gap-3">
                {["#", "#", "#"].map((href, i) => (
                  <a
                    key={i}
                    href={href}
                    className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <span className="sr-only">Social</span>
                    <Dot color="#ffffff" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="/services#local-seo" className="hover:text-white">
                    Local SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="/services#gbp" className="hover:text-white">
                    Google Business Profile
                  </a>
                </li>
                <li>
                  <a href="/services#reviews" className="hover:text-white">
                    Reviews Management
                  </a>
                </li>
                <li>
                  <a href="/services#citations" className="hover:text-white">
                    Local Citations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Industries</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="/industries#healthcare" className="hover:text-white">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a
                    href="/industries#legal-services"
                    className="hover:text-white"
                  >
                    Legal Services
                  </a>
                </li>
                <li>
                  <a
                    href="/industries#fitness-wellness"
                    className="hover:text-white"
                  >
                    Fitness & Wellness
                  </a>
                </li>
                <li>
                  <a
                    href="/industries#home-services"
                    className="hover:text-white"
                  >
                    Home Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Get in Touch</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="tel:+919876543210" className="hover:text-white">
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@localseopro.in"
                    className="hover:text-white"
                  >
                    hello@localseopro.in
                  </a>
                </li>
                <li>Mumbai, India · Toronto, Canada</li>
              </ul>
              <div className="mt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 bg-white hover:shadow"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} LocalSEO Pro. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-slate-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-slate-300">
                Terms of Service
              </a>
              <a href="/sitemap.xml" className="hover:text-slate-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- tiny inline components (no external imports) ---------- */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 hover:shadow-lg transition">
      <div
        className="h-9 w-9 grid place-items-center rounded-md"
        style={{ background: "#fff4f5", color: PRIMARY }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3 7h7l-5.5 4.1L18 21l-6-4-6 4 1.5-7.9L2 9h7l3-7z" />
        </svg>
      </div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Compare({
  label,
  left,
  right,
}: {
  label: string;
  left: string;
  right: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <span className="text-sm text-slate-600 line-through">{left}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="text-slate-300"
        >
          <path
            d="M8 5l8 7-8 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-semibold">{right}</span>
      </div>
    </div>
  );
}

function MapCard({ primary }: { primary: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 hover:shadow transition bg-white">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">Nearby Business</div>
          <div className="mt-1 text-xs text-slate-500">Open • 4.8 (234)</div>
        </div>
        <span
          className="text-xs font-semibold px-2 py-1 rounded-full"
          style={{ background: "#fff4f5", color: primary }}
        >
          Ad
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="text-slate-400"
        >
          <path
            d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
            fill="currentColor"
          />
        </svg>
        1.2 km • Andheri East
      </div>
      <div className="mt-3 flex gap-2">
        <button className="text-xs rounded-lg border border-slate-200 px-3 py-1 hover:bg-slate-50">
          Call
        </button>
        <button className="text-xs rounded-lg border border-slate-200 px-3 py-1 hover:bg-slate-50">
          Directions
        </button>
        <button className="text-xs rounded-lg border border-slate-200 px-3 py-1 hover:bg-slate-50">
          Website
        </button>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        className="text-slate-400"
      >
        <path
          d="M11 4a7 7 0 105.293 12.293l3.707 3.707 1.414-1.414-3.707-3.707A7 7 0 0011 4zm0 2a5 5 0 110 10A5 5 0 0111 6z"
          fill="currentColor"
        />
      </svg>
      <input
        aria-label="Search location"
        className="flex-1 bg-transparent outline-none text-sm"
        placeholder="dentist near me"
      />
      <button
        className="text-sm font-semibold rounded-lg px-3 py-1.5 text-white"
        style={{ background: PRIMARY }}
      >
        Search
      </button>
    </div>
  );
}

function Dot({ color = "#10b981" }: { color?: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-2 w-2 rounded-full"
      style={{ background: color }}
    />
  );
}

function ServiceCard({
  title,
  points,
  href,
  primary,
}: {
  title: string;
  points: string[];
  href: string;
  primary: string;
}) {
  return (
    <a href={href} className="block h-full">
      <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
        <div
          className="h-9 w-9 grid place-items-center rounded-md"
          style={{ background: "#fff4f5", color: primary }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 4h16v6H4V4zm0 10h10v6H4v-6zm12 0h4v6h-4v-6z" />
          </svg>
        </div>
        <h3 className="mt-3 font-semibold">{title}</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="mt-0.5"
                style={{ color: primary }}
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <span
          className="mt-4 inline-flex items-center text-sm font-semibold"
          style={{ color: primary }}
        >
          Learn more →
        </span>
      </div>
    </a>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
