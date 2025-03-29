import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAdSense from "./components/GoogleAdSense"; // ✅ Import AdSense from a client component

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

// ✅ SEO-Optimized Metadata (Server Component)
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
  authors: [{ name: "Mohamed Nabil", url: "https://yourdomain.com" }],
  robots: "index, follow",
  creator: "Mohamed Nabil",
  publisher: "Mohamed Nabil",
  alternates: { canonical: "https://yourdomain.com" },
  openGraph: {
    title: "QR Code Generator",
    description:
      "Create and customize QR codes with logos, colors, and branding.",
    url: "https://yourdomain.com",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense Verification */}
        <meta name="google-adsense-account" content="ca-pub-3112333795454729" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAdSense /> {/* ✅ Load AdSense as a separate client component */}
      </body>
    </html>
  );
}
