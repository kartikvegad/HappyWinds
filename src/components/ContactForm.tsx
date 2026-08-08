"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const BUDGET_MIN = 7500;
const BUDGET_MAX = 100000;
const BUDGET_STEP = 2500;

const SERVICE_OPTIONS = [
  "Logo Design",
  "Brand Identity",
  "Naming",
  "Stationery & Collateral",
  "Packaging",
  "Signage",
  "Logo Animation",
  "Brand Guidelines",
  "Not sure yet",
] as const;

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-full border border-ink/10 bg-white/55 px-4 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/30 focus:bg-white/75";

function formatBudget(value: number) {
  if (value >= 100000) {
    return "₹1 Lakh";
  }
  if (value >= 1000) {
    const thousands = value / 1000;
    const label =
      Number.isInteger(thousands) ? `${thousands}` : thousands.toFixed(1);
    return `₹${label.replace(/\.0$/, "")}k`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function ContactForm() {
  const [budget, setBudget] = useState(25000);
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function toggleService(service: string) {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
      budget: formatBudget(budget),
      services,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      form.reset();
      setBudget(25000);
      setServices([]);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-white/50 bg-white/55 p-6 shadow-[0_20px_60px_rgba(12,12,12,0.06)] backdrop-blur-xl md:p-7">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          Thank you
        </p>
        <p className="display mt-2 text-2xl text-ink md:text-3xl">
          Brief received.
        </p>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">
          We&rsquo;ve emailed you a confirmation. We&rsquo;ll respond soon via
          email or WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/50 bg-white/55 p-4 shadow-[0_20px_60px_rgba(12,12,12,0.06)] backdrop-blur-xl md:p-5"
    >
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Your full name
          </label>
          <input
            id="name"
            name="name"
            required
            className={fieldClass}
            placeholder="Full name *"
          />
        </div>
        <div>
          <label htmlFor="company" className="sr-only">
            Your company
          </label>
          <input
            id="company"
            name="company"
            className={fieldClass}
            placeholder="Company (optional)"
          />
        </div>
      </div>

      <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="Email address *"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={fieldClass}
            placeholder="Phone number *"
          />
        </div>
      </div>

      <fieldset className="mt-3.5">
        <legend className="mb-2 text-sm text-ink/70">Services you need</legend>
        <div className="flex flex-wrap gap-1.5">
          {SERVICE_OPTIONS.map((service) => {
            const selected = services.includes(service);
            return (
              <button
                key={service}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleService(service)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  selected
                    ? "border-ink bg-ink text-bg"
                    : "border-ink/15 bg-white/55 text-ink hover:border-ink/35"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-3.5">
        <div className="mb-1.5 flex items-end justify-between gap-4">
          <span className="text-sm text-ink/70">Budget</span>
          <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-sm font-medium text-ink">
            {formatBudget(budget)}
            {budget >= BUDGET_MAX ? "+" : ""}
          </span>
        </div>
        <input
          id="budget"
          type="range"
          min={BUDGET_MIN}
          max={BUDGET_MAX}
          step={BUDGET_STEP}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="budget-slider w-full"
          aria-label="Project budget"
        />
        <div className="mt-1 flex justify-between text-xs text-muted">
          <span>{formatBudget(BUDGET_MIN)}</span>
          <span>{formatBudget(BUDGET_MAX)}+</span>
        </div>
      </div>

      <div className="mt-3.5">
        <label htmlFor="message" className="sr-only">
          Tell us about your company or project
        </label>
        <textarea
          id="message"
          name="message"
          rows={2}
          className="w-full resize-none rounded-2xl border border-ink/10 bg-white/55 px-4 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/30 focus:bg-white/75"
          placeholder="Tell us about your company or project"
        />
      </div>

      {status === "error" && (
        <p className="mt-2.5 text-sm text-red-600">{errorMessage}</p>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5">
            {status === "loading" ? "Sending…" : "Submit"}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-white/70 text-ink backdrop-blur-sm">
            →
          </span>
        </button>

        <a
          href="https://wa.me/919664829116?text=Hi%20Happywinds%2C%20I'd%20like%20to%20book%20an%20intro%20call."
          target="_blank"
          rel="noopener noreferrer"
          className="text-right"
        >
          <p className="text-xs text-muted">Not yet sure?</p>
          <span className="mt-1 inline-flex rounded-full border border-ink/15 bg-white/50 px-3.5 py-1.5 text-xs text-ink backdrop-blur-sm transition-colors hover:border-ink/35">
            Book an intro call
          </span>
        </a>
      </div>
    </form>
  );
}
