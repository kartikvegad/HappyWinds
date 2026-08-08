import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Happywinds Logos — Logic-Based Logo Design",
    template: "%s · Happywinds Logos",
  },
  description:
    "Happywinds Logos is an Ahmedabad design studio crafting logic-based logos — identities built on reason, craft, and lasting presence.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Happywinds Logos — Logic-Based Logo Design",
    description:
      "We design meaning into marks. Logic-based logo design from Ahmedabad since 2009.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${instrument.variable} h-full`}>
      <body className="min-h-full overflow-x-clip antialiased">
        <SmoothScroll>
          <Header />
          <main className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
        <div className="site-grain" aria-hidden="true" />
      </body>
    </html>
  );
}
