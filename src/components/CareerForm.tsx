"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const ROLE_OPTIONS = [
  "Graphic Design",
  "Lead / Senior Design",
  "Admin / Operations",
  "Marketing",
  "Internship",
  "Other",
] as const;

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-full border border-ink/10 bg-white/55 px-4 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/30 focus:bg-white/75";

export function CareerForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [roles, setRoles] = useState<string[]>([]);
  const [resumeName, setResumeName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function toggleRole(role: string) {
    setRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role],
    );
  }

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setResumeName("");
      return;
    }

    const typeOk =
      ALLOWED_RESUME_TYPES.includes(file.type) ||
      /\.(pdf|doc|docx)$/i.test(file.name);

    if (!typeOk) {
      setErrorMessage("Please upload a PDF or Word document (.pdf, .doc, .docx).");
      setResumeName("");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_RESUME_BYTES) {
      setErrorMessage("Resume must be 5 MB or smaller.");
      setResumeName("");
      event.target.value = "";
      return;
    }

    setErrorMessage("");
    setResumeName(file.name);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("roles", JSON.stringify(roles));

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
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
      setRoles([]);
      setResumeName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-white/50 bg-white/55 p-6 shadow-[0_20px_60px_rgba(12,12,12,0.06)] backdrop-blur-xl md:p-7">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          Application received
        </p>
        <p className="display mt-2 text-2xl text-ink md:text-3xl">
          Thanks for applying.
        </p>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">
          We&rsquo;ve emailed a confirmation. If there&rsquo;s a fit, we&rsquo;ll
          be in touch.
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
            Full name
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
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="Email *"
          />
        </div>
      </div>

      <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={fieldClass}
            placeholder="Phone *"
          />
        </div>
        <div>
          <label htmlFor="portfolio" className="sr-only">
            Portfolio or LinkedIn
          </label>
          <input
            id="portfolio"
            name="portfolio"
            type="url"
            className={fieldClass}
            placeholder="Portfolio / LinkedIn URL"
          />
        </div>
      </div>

      <fieldset className="mt-3.5">
        <legend className="mb-2 text-sm text-ink/70">
          Roles you&rsquo;re interested in
        </legend>
        <div className="flex flex-wrap gap-1.5">
          {ROLE_OPTIONS.map((role) => {
            const selected = roles.includes(role);
            return (
              <button
                key={role}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleRole(role)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  selected
                    ? "border-ink bg-ink text-bg"
                    : "border-ink/15 bg-white/55 text-ink hover:border-ink/35"
                }`}
              >
                {role}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-3.5">
        <label htmlFor="resume" className="mb-2 block text-sm text-ink/70">
          Resume / CV *
        </label>
        <input
          ref={fileInputRef}
          id="resume"
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleResumeChange}
          className="block w-full text-sm text-ink file:mr-3 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-medium file:text-bg hover:file:opacity-90"
        />
        <p className="mt-1.5 text-xs text-muted">
          PDF or Word · max 5 MB
          {resumeName ? ` · ${resumeName}` : ""}
        </p>
      </div>

      <div className="mt-3.5">
        <label htmlFor="message" className="sr-only">
          About you
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full resize-none rounded-2xl border border-ink/10 bg-white/55 px-4 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/30 focus:bg-white/75"
          placeholder="Tell us about yourself, experience, and why Happywinds"
        />
      </div>

      {status === "error" && (
        <p className="mt-2.5 text-sm text-red-600">{errorMessage}</p>
      )}

      <div className="mt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5">
            {status === "loading" ? "Sending…" : "Submit application"}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-white/70 text-ink">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
