import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waqas Ahmad - Real Estate Professional | Surrey, BC",
  description: "Find your dream home in Surrey, British Columbia with Waqas Ahmad. Licensed real estate professional specializing in Surrey properties. Expert guidance for buying, selling, and investing in real estate.",
  keywords: "real estate, Surrey BC, Waqas Ahmad, realtor, properties, homes for sale, Surrey real estate, British Columbia",
  authors: [{ name: "Waqas Ahmad" }],
  openGraph: {
    title: "Waqas Ahmad - Real Estate Professional | Surrey, BC",
    description: "Find your dream home in Surrey, British Columbia with Waqas Ahmad. Licensed real estate professional specializing in Surrey properties.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
