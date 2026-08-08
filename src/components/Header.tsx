"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/work", label: "Work" },
  { href: "/logic", label: "Logic" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Studio" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-6 md:pt-[max(1.25rem,env(safe-area-inset-top))]">
        <div className="pointer-events-auto flex w-full max-w-[100%] items-center justify-between gap-3 rounded-full border border-white/10 bg-ink/90 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl md:w-auto md:max-w-none md:justify-start md:gap-5 md:px-4 md:py-2.5">
          <Link href="/" className="relative z-50 shrink-0" aria-label="Happywinds home">
            <Image
              src="/assets/brand/logo-white.png"
              alt="Happywinds"
              width={220}
              height={70}
              className="h-8 w-auto sm:h-10 md:h-11"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-[13px] font-medium tracking-wide text-bg/70 transition-colors hover:text-bg"
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-capsule"
                      className="absolute inset-0 rounded-full bg-bg/15"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className={`relative z-10 ${active ? "text-bg" : ""}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center md:flex">
            <Link
              href="/contact"
              className="rounded-full bg-bg px-4 py-2 text-[13px] font-medium text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-bg/10 text-bg md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-bg transition-transform duration-300 ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-bg transition-transform duration-300 ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink pt-[calc(5.5rem+env(safe-area-inset-top))] text-bg md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6">
              {[...links, { href: "/contact", label: "Contact" }].map((link, i) => {
                const active =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`display block border-b border-white/10 py-5 text-4xl ${
                        active ? "underline underline-offset-8" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
