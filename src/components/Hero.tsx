import React from "react";

const PRIMARY = "#ff3851";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with black gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(0,0,0,0.65) 0%,
              rgba(0,0,0,0.45) 35%,
              rgba(0,0,0,0.25) 60%,
              rgba(0,0,0,0.05) 85%
            ),
            url('/phone-local-seo.png')
          `,
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1 text-xs text-white shadow-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: PRIMARY }}
              />
              <span>Live Map Pack Specialists</span>
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Dominate Google Maps &{" "}
              <span style={{ color: PRIMARY }}>Local Search</span>
            </h1>

            <p className="mt-4 text-lg text-white/90">
              Get found by customers nearby. We put you in the{" "}
              <strong className="text-white">Top-3 Map Pack</strong> and turn
              visibility into calls, visits, and bookings — fast.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <Chip>300% Avg. Traffic Lift</Chip>
              <Chip>90% Map Pack Wins</Chip>
              <Chip>150+ Cities Covered</Chip>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white
                bg-[#ff3851] shadow-md 
                transition-transform duration-200
                hover:bg-[#e03248] hover:scale-105 hover:shadow-xl"
                style={{ background: PRIMARY }}
              >
                Get a Free Local SEO Audit
              </a>
              <a
                href="/industries"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold border border-white/30 text-white hover:bg-white/20"
              >
                Industries We Serve
                {/* See Real Results */}
              </a>
            </div>

            <div className="mt-4 text-xs text-white/70">
              No lock-in. Transparent reporting. Results in 6–12 weeks for most
              local niches.
            </div>
          </div>

          {/* Right Column: Map Pack mock */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
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
  );
}

/* ————— Atoms ————— */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white shadow-sm">
      {children}
    </span>
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
        aria-hidden
      >
        <path
          d="M11 4a7 7 0 105.293 12.293l3.707 3.707 1.414-1.414-3.707-3.707A7 7 0 0011 4zm0 2a5 5 0 110 10A5 5 0 0111 6z"
          fill="currentColor"
        />
      </svg>
      <input
        className="flex-1 bg-transparent outline-none text-sm"
        placeholder="dentist near me"
        aria-label="Search example"
      />
      <button
        className="text-sm font-semibold rounded-lg px-3 py-1.5 text-white hover:opacity-95"
        style={{ background: PRIMARY }}
        aria-label="Run example search"
      >
        Search
      </button>
    </div>
  );
}

function MapCard({ primary }: { primary: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 hover:shadow transition bg-white">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">Dental Care Delhi</div>
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
          aria-hidden
        >
          <path
            d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
            fill="currentColor"
          />
        </svg>
        1.2 km • South Delhi
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

function Dot({ color = "#10b981" }: { color?: string }) {
  return (
    <span
      aria-hidden
      className="inline-block h-2 w-2 rounded-full"
      style={{ background: color }}
    />
  );
}
