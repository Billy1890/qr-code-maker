import type { Metadata } from "next";
import "./globals.css";
import GoogleAdSense from "./components/GoogleAdSense"; // ✅ Import AdSense from a client component
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


// Load fonts


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
    "qr gen",
    "creator qr code",
    "qrcode generator",
    "qr code builder",
    "qr barcode generator",
    "generate barcode",
    "scan code generator",
  ],
  authors: [
    { name: "Mohamed Nabil", url: "https://qr-code-maker-amber.vercel.app/" },
  ],
  robots: "index, follow",
  creator: "Mohamed Nabil",
  publisher: "Mohamed Nabil",
  alternates: { canonical: "https://qr-code-maker-amber.vercel.app/" },
  openGraph: {
    title: "QR Code Generator",
    description:
      "Create and customize QR codes with logos, colors, and branding.",
    url: "https://qr-code-maker-amber.vercel.app/",
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Google AdSense Verification */}
        <meta name="google-adsense-account" content="ca-pub-3112333795454729" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3112333795454729"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <GoogleAdSense /> {/* ✅ Load AdSense as a separate client component */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
