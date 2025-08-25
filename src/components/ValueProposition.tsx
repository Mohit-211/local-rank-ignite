import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, Users, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Local Visibility",
      description:
        "Appear in Google Map Pack when customers search for businesses like yours nearby.",
      stat: "3x more clicks",
    },
    {
      icon: Search,
      title: "Intent-Based Traffic",
      description:
        "Capture customers actively searching for your services in your area.",
      stat: "Higher conversion",
    },
    {
      icon: Users,
      title: "Trust & Credibility",
      description:
        "Build trust with verified business listings and positive reviews.",
      stat: "90% trust factor",
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description:
        "Track calls, visits, and bookings directly from your local SEO efforts.",
      stat: "Clear metrics",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Local SEO Beats{" "}
            <span className="text-gradient">Generic SEO</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            While traditional SEO targets broad keywords, Local SEO connects you
            with customers in your neighborhood who are ready to buy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-soft hover:shadow-brand transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-primary font-semibold">{benefit.stat}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Visual */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Traditional SEO vs Local SEO
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>Search Volume</span>
                  <div className="flex space-x-2">
                    <div className="text-sm text-muted-foreground">
                      High Competition
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      Local Intent
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>Conversion Rate</span>
                  <div className="flex space-x-2">
                    <div className="text-sm text-muted-foreground">2-3%</div>
                    <div className="text-sm font-semibold text-primary">
                      15-20%
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>Time to Results</span>
                  <div className="flex space-x-2">
                    <div className="text-sm text-muted-foreground">
                      6-12 months
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      2-4 months
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">46%</div>
                <div className="text-muted-foreground mb-4">
                  of Google searches have local intent
                </div>
                <div className="text-sm text-primary font-medium">
                  That's 8 billion searches per month!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

// -------------------------------NEW CODE----------------------

// WhyLocalBeats.tsx
// import React from "react";

// const PRIMARY = "#ff3851";
// const SECONDARY = "#f4f7fc";

// export default function WhyLocalBeats() {
//   return (
//     <section className="py-16" style={{ background: SECONDARY }}>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl">
//           <h2 className="text-3xl font-bold">
//             Why Local SEO Beats{" "}
//             <span style={{ color: PRIMARY }}>Generic SEO</span>
//           </h2>
//           <p className="mt-3 text-slate-600">
//             Broad keywords burn months. Local intent converts *now*. Get in
//             front of people searching within a few kilometers of your business.
//           </p>
//         </div>

//         {/* Benefit cards */}
//         <div className="mt-8 grid md:grid-cols-4 gap-5">
//           {[
//             [
//               "Local Visibility",
//               "Map Pack rankings where customers actually click.",
//             ],
//             [
//               "Intent-Based Traffic",
//               "‘Near me’ searches with purchase intent.",
//             ],
//             [
//               "Trust & Prominence",
//               "Reviews + proximity + relevance = instant trust.",
//             ],
//             [
//               "Measurable ROI",
//               "Calls, directions, website clicks tracked monthly.",
//             ],
//           ].map(([title, desc]) => (
//             <div
//               key={title}
//               className="rounded-2xl bg-white border border-slate-200 p-5 hover:shadow-lg transition"
//             >
//               <div
//                 className="h-9 w-9 grid place-items-center rounded-md"
//                 style={{ background: "#fff4f5", color: PRIMARY }}
//               >
//                 <svg
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12 2l3 7h7l-5.5 4.1L18 21l-6-4-6 4 1.5-7.9L2 9h7l3-7z" />
//                 </svg>
//               </div>
//               <h3 className="mt-3 font-semibold">{title}</h3>
//               <p className="mt-2 text-sm text-slate-600">{desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Comparison panel */}
//         <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
//           <div className="grid md:grid-cols-3 gap-6 text-sm">
//             <Compare
//               label="Search Intent"
//               left="Broad, research"
//               right="Local, ready-to-buy"
//             />
//             <Compare label="Conversion Rate" left="2–4%" right="12–25%+" />
//             <Compare
//               label="Time to Results"
//               left="6–12 months"
//               right="6–12 weeks"
//             />
//           </div>

//           <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
//             <div className="text-sm">
//               <span className="font-semibold" style={{ color: PRIMARY }}>
//                 46%
//               </span>{" "}
//               of searches have local intent. If you’re not in the Map Pack,
//               you’re invisible.
//             </div>
//             <a
//               href="/services#local-seo"
//               className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white"
//               style={{ background: PRIMARY }}
//             >
//               See How We Rank You
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Compare({
//   label,
//   left,
//   right,
// }: {
//   label: string;
//   left: string;
//   right: string;
// }) {
//   return (
//     <div className="rounded-xl border border-slate-200 p-4">
//       <div className="text-xs text-slate-500">{label}</div>
//       <div className="mt-2 grid grid-cols-2 items-center gap-3">
//         <span className="text-sm text-slate-600 line-through">{left}</span>
//         <span className="text-sm font-semibold">{right}</span>
//       </div>
//     </div>
//   );
// }
