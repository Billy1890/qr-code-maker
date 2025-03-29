import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// Define fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Move Metadata from `Head` to `metadata` export
export const metadata: Metadata = {
  title: "QR Code Generator | Create Custom QR Codes",
  description: "Generate custom QR codes with colors, logos, and branding.",
  keywords: ["QR Code", "QR Generator", "Free QR Code Maker"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "QR Code Generator",
    description: "Create custom QR codes for free.",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Generator",
    description: "Generate custom QR codes online.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
