import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  variable: "--font-noto-sans-devanagari",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sankalp Library - Chhindwara | A Perfect Place For Focused Study",
  description: "Sankalp Library in Chhindwara, Madhya Pradesh, is a premium study space offering personal cabins, high-speed WiFi, CCTV security, and a peaceful environment for focused study.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} ${notoSansDevanagari.variable} scroll-smooth h-full`}
    >
      <body className="bg-brand-bg text-brand-dark min-h-full font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
