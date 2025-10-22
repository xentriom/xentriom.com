import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://xentriom.com"),
  title: {
    template: "%s | xentriom",
    default: "xentriom",
  },
  description: "Exploring the web, one idea at a time",
  keywords: ["xentriom", "xen", "xentricity", "web", "development"],
  creator: "xentriom",
  authors: [{ name: "xentriom", url: "https://xentriom.com" }],
  openGraph: {
    title: "xentriom",
    description: "Exploring the web, one idea at a time",
    url: "https://xentriom.com",
    siteName: "xentriom",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "xentriom logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "xentriom",
    description: "Exploring the web, one idea at a time",
    images: ["opengraph-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
