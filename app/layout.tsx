import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClinicOS · Story",
  description:
    "A side-project journey. Building a multi-tenant clinic management system from schema to shipped — design decisions, trade-offs, and the ship list.",
  openGraph: {
    title: "ClinicOS · Story",
    description:
      "A side-project journey. Multi-tenant clinic software from schema to shipped.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className="grain antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
