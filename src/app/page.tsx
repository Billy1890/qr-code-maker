"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const QRCodeCanvas = dynamic(
  () => import("qrcode.react").then((mod) => mod.QRCodeCanvas),
  { ssr: false }
);

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrColor, setQrColor] = useState("#000000"); // Default black
  const [logo, setLogo] = useState<string | null>(null);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) {
      console.error("Canvas element not found!");
      return;
    }

    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          QR Code Generator
        </h1>

        <p className="text-gray-600 text-center mb-4">
          Generate a custom QR Code for your website, business, or personal use.
          Upload a logo, customize colors, and download your QR Code instantly.
        </p>

        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border border-gray-300 p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between items-center mb-4">
          <label className="text-gray-700 font-medium">Pick QR Color:</label>
          <input
            type="color"
            value={qrColor}
            onChange={(e) => setQrColor(e.target.value)}
            className="w-12 h-12 rounded-full border-none cursor-pointer shadow-md"
          />
        </div>

        <label className="block text-gray-700 font-medium mb-2">
          Upload Logo:
        </label>
        <div className="relative mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="absolute opacity-0 w-full h-full cursor-pointer"
          />
          <div className="bg-blue-500 text-white text-center py-2 rounded-md cursor-pointer hover:bg-blue-600 transition">
            Choose File
          </div>
        </div>

        {url && (
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center shadow-md">
            <QRCodeCanvas
              value={url}
              size={200}
              fgColor={qrColor}
              includeMargin={true}
              imageSettings={
                logo
                  ? {
                      src: logo,
                      height: 40,
                      width: 40,
                      excavate: true,
                    }
                  : undefined
              }
            />

            {logo && (
              <div className="mt-2">
                <Image src={logo} width={40} height={40} alt="QR Code Logo" />
              </div>
            )}

            <button
              onClick={downloadQR}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Download QR Code
            </button>
          </div>
        )}

        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Why Use QR Codes?
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            QR codes help you quickly share links, business cards, WiFi
            credentials, and more. They are widely used for marketing, payments,
            and contactless interactions.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">FAQs</h2>
          <p className="text-gray-600 text-sm mb-1">
            <strong>How do I scan a QR code?</strong> Use your smartphone camera
            or a QR scanning app.
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>What formats are supported?</strong> You can generate QR
            codes for websites, contact details, and more.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Is this tool free?</strong> Yes! You can generate and
            download QR codes for free.
          </p>
        </div>
      </div>
    </div>
  );
}
