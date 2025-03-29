import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ SEO-Optimized Metadata
export const metadata: Metadata = {
  title: "QR Code Generator | Create Custom QR Codes",
  description:
    "Easily generate custom QR codes with colors, logos, and branding for free.",
  keywords: [
    "QR Code Generator",
    "Free QR Code Maker",
    "Custom QR Codes",
    "QR Code with Logo",
    "QR Code Branding",
  ],
  authors: [
    {
      name: "Mohamed Nabil",
      url: "https://qr-code-maker-billy1890-mohamed-nabils-projects-478c1d1f.vercel.app/",
    },
  ],
  robots: "index, follow",
  creator: "Mohamed Nabil",
  publisher: "Mohamed Nabil",
  alternates: {
    canonical:
      "https://qr-code-maker-billy1890-mohamed-nabils-projects-478c1d1f.vercel.app/",
  },
  openGraph: {
    title: "QR Code Generator",
    description:
      "Create and customize QR codes with logos, colors, and branding.",
    url: "https://qr-code-maker-billy1890-mohamed-nabils-projects-478c1d1f.vercel.app/",
    siteName: "QR Code Generator",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "QR Code Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
    title: "QR Code Generator",
    description: "Generate custom QR codes online for free.",
    images: ["/preview.png"],
  },
};

// ✅ AdSense Component (Loads only on the client)
const GoogleAdSense = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ads = document.createElement("script");
      ads.async = true;
      ads.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      ads.setAttribute("data-ad-client", "ca-pub-3112333795454729");
      document.body.appendChild(ads);
    }
  }, []);

  return null;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAdSense />
      </body>
    </html>
  );
}
