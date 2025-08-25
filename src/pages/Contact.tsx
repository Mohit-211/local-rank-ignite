// src/pages/Contact.tsx
import React, { useState } from "react";
import Header from "@/components/Navigation";
import Footer from "@/components/Footer";

const PRIMARY = "#ff3851";
const SECONDARY = "#f4f7fc";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f7fc] via-white to-[#f4f7fc]">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05]
      [background-image:linear-gradient(to_right,#000_1px,transparent_1px),
                         linear-gradient(to_bottom,#000_1px,transparent_1px)]
      [background-size:28px_28px]"
          aria-hidden
        />

        {/* Soft radial glow accent (brand color) */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,56,81,0.12) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs text-slate-700 shadow-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: PRIMARY }}
              />
              Free Local SEO Audit
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
              Let’s put your business in the{" "}
              <span style={{ color: PRIMARY }}>Top-3 Map Pack</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Fill this quick form and we’ll send a mini report with your
              current visibility, priority fixes, and a focused 90-day plan. No
              fluff. No hard sell.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Audit Form */}
      <section
        id="audit"
        className="py-12 md:py-16"
        style={{ background: SECONDARY }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100">
                <h2 className="text-xl font-semibold">
                  Request Your Free Audit
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  We’ll review your Google Business Profile, citations, reviews,
                  and local rankings.
                </p>
              </div>
              <div className="p-6">
                <AuditForm />
                <p className="mt-4 text-xs text-slate-500">
                  By submitting, you agree to receive an email with your audit.
                  We don’t spam.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Talk to a Specialist</h3>
              <p className="mt-1 text-sm text-slate-600">
                Prefer WhatsApp or a quick call?
              </p>
              <div className="mt-4 grid gap-3">
                <a
                  href="https://wa.me/919876543210?text=Hi%20—%20I%20want%20a%20Local%20SEO%20audit"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow transition"
                  style={{ background: PRIMARY }}
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold border border-slate-200 hover:bg-slate-50"
                >
                  Call: +91 98765 43210
                </a>
                <a
                  href="mailto:hello@localseopro.in?subject=Free%20Local%20SEO%20Audit"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold border border-slate-200 hover:bg-slate-50"
                >
                  Email: hello@localseopro.in
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Our Offices</h3>
              <div className="mt-4 space-y-4 text-sm">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-medium">Mumbai, India</div>
                  <div className="text-slate-600">Andheri East · 400093</div>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-medium">Toronto, Canada</div>
                  <div className="text-slate-600">Downtown · M5H</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Response Time</h3>
              <p className="mt-1 text-sm text-slate-600">
                We usually respond within <strong>1 business day</strong>.
                Audits typically take 24–48 hours.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Frequently Asked <span style={{ color: PRIMARY }}>Questions</span>
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <FAQ
              q="What do I get in the free audit?"
              a="A quick score of your GBP profile, citation consistency, review velocity, and current Map Pack visibility, plus 3 highest-impact fixes."
            />
            <FAQ
              q="Do you need access to my accounts?"
              a="No. Public data is enough for the audit. If you proceed, we’ll request manager access to your GBP."
            />
            <FAQ
              q="How long before I see results?"
              a="Most local niches see meaningful movement in 6–12 weeks once GBP, citations, and reviews are addressed."
            />
            <FAQ
              q="Is there a long-term contract?"
              a="No lock-in. We work monthly. Stay because it works, not because you’re trapped."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------------- Form + Atoms ---------------- */

function AuditForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("companyFax") || "").length > 0) return; // honeypot
    setSubmitting(true);
    // TODO: replace with your POST endpoint / Formspree / Netlify Forms
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setDone(true);
    form.reset();
  }

  if (done) {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-800">
        Thanks! Your request is in. We’ll email your audit within 24–48 hours.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <input
        type="text"
        name="companyFax"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <TextInput
        label="Full Name"
        name="name"
        placeholder="Priya Patel"
        required
      />
      <TextInput
        label="Business Name"
        name="business"
        placeholder="Andheri Dental Care"
        required
      />
      <TextInput
        label="Email"
        name="email"
        type="email"
        placeholder="you@company.com"
        required
      />
      <TextInput
        label="Phone / WhatsApp"
        name="phone"
        type="tel"
        placeholder="+91 98xxxxxxx"
        pattern="^[0-9+\\-\\s()]{7,}$"
      />
      <TextInput
        label="Website or Google Business Profile URL"
        name="website"
        type="url"
        placeholder="https://g.co/kgs/your-gbp"
        className="md:col-span-2"
      />
      <TextInput label="City" name="city" placeholder="Mumbai" />
      <SelectInput
        label="Industry"
        name="industry"
        options={[
          "Healthcare / Dental",
          "Legal Services",
          "Restaurants & Cafes",
          "Fitness & Wellness",
          "Home Services",
          "Education & Training",
          "Other",
        ]}
      />
      <fieldset className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700">
          Monthly Budget
        </label>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {["₹15k–25k", "₹25k–40k", "₹40k–60k", "₹60k+"].map((v) => (
            <label
              key={v}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50 cursor-pointer"
            >
              <input type="radio" name="budget" value={v} /> {v}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700">
          I’m interested in
        </label>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {[
            "Google Business Profile Optimization",
            "Reviews & Reputation",
            "Local Citations / NAP Fix",
            "Website SEO (On-page/Technical)",
            "Local Ads / Landing Pages",
          ].map((v) => (
            <label
              key={v}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50 cursor-pointer"
            >
              <input type="checkbox" name="interests" value={v} /> {v}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-slate-700">
          Anything else we should know?
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Share your goals, competitors, or issues you’re facing."
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
        />
      </div>
      <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white
                     bg-[#ff3851] shadow-md transition-all duration-200
                     hover:bg-[#e03248] hover:scale-105 hover:shadow-xl disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Get My Free Audit"}
        </button>
        <span className="text-xs text-slate-500">
          We’ll email your audit within 24–48h.
        </span>
      </div>
    </form>
  );
}

function TextInput({
  label,
  name,
  placeholder,
  type = "text",
  className = "",
  required,
  pattern,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
  required?: boolean;
  pattern?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
      />
    </div>
  );
}

function SelectInput({
  label,
  name,
  options,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200 bg-white"
        defaultValue=""
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
      <summary className="cursor-pointer list-none select-none font-medium">
        {q}
      </summary>
      <p className="mt-2 text-sm text-slate-600">{a}</p>
    </details>
  );
}
