import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/happywindslogos",
    icon: (
      <path d="M14 8.5h2.5V5h-2.8C11.1 5 9.5 6.6 9.5 9.3v2.2H7v3.5h2.5V21H13v-6h2.4l.5-3.5H13V9.6c0-.7.3-1.1 1-1.1Z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/happywindslogos",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.6" cy="7.4" r="1" />
      </>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-bg">
      <div className="site-grid py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/brand/logo.svg"
              alt="Happywinds Logos"
              width={180}
              height={84}
              className="h-12 w-auto invert"
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Logic-based logo design from Ahmedabad. We craft identities that
              make sense, scale, and stay unforgettable.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current text-white">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/45">Explore</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Work", "/work"],
                ["Logic", "/logic"],
                ["Services", "/services"],
                ["Studio", "/about"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-opacity hover:opacity-70">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/45">Talk to us</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="tel:+919664829116" className="transition-opacity hover:opacity-70">
                  +91 96648 29116
                </a>
              </li>
              <li>
                <a
                  href="mailto:hihappywinds@gmail.com"
                  className="transition-opacity hover:opacity-70"
                >
                  hihappywinds@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Happywinds Logos. All rights reserved.</p>
          <div className="inline-flex items-center gap-3">
            <span className="text-sm tracking-wide text-white/55">Designed by</span>
            <Link
              href="https://dot-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DOT"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/assets/brand/Dot.svg"
                alt="DOT"
                width={113}
                height={44}
                className="h-4 w-auto md:h-[18px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
