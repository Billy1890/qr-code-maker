"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import dynamic from "next/dynamic";

const QRCodeComponent = dynamic(() => import("./components/QRCodeComponent"), {
  ssr: false,
});



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
            <QRCodeCanvas value={url} size={200} fgColor={qrColor} />

            {logo && (
              <div className="mt-2">
                <Image
                  src="/logo.png"
                  width={200}
                  height={200}
                  alt="QR Code Logo"
                />
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
      </div>
    </div>
  );
}
