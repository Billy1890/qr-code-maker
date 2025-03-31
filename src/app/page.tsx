"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const QRCodeCanvas = dynamic(
  () => import("qrcode.react").then((mod) => mod.QRCodeCanvas),
  { ssr: false }
);

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrColor, setQrColor] = useState("#000000");
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
    if (!canvas) return;

    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Generator Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            QR Code Generator
          </h2>

          <p className="text-gray-600 text-center mb-6">
            Generate a custom QR Code for your website, business, or personal
            use. Upload a logo, customize colors, and download your QR Code
            instantly.
          </p>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="url-input"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter URL
              </label>
              <input
                id="url-input"
                type="text"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label
                htmlFor="color-picker"
                className="text-sm font-medium text-gray-700"
              >
                QR Color:
              </label>
              <input
                id="color-picker"
                type="color"
                value={qrColor}
                onChange={(e) => setQrColor(e.target.value)}
                className="w-10 h-10 rounded-full border-none cursor-pointer shadow-md"
              />
            </div>

            <div>
              <label
                htmlFor="logo-upload"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Logo (Optional):
              </label>
              <div className="relative">
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition">
                  Choose File
                </div>
              </div>
            </div>

            {url && (
              <div className="mt-6 bg-gray-50 p-6 rounded-lg flex flex-col items-center">
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
                <button
                  onClick={downloadQR}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition"
                >
                  Download QR Code
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Information Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            About QR Codes
          </h2>

          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                What Are QR Codes?
              </h3>
              <p className="text-gray-600">
                QR (Quick Response) codes are two-dimensional barcodes that can
                store various types of data. They were invented in 1994 by a
                Toyota subsidiary to track vehicles during manufacturing.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Common Uses
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Website URLs</li>
                <li>Contact information (vCards)</li>
                <li>WiFi network credentials</li>
                <li>Payment systems</li>
                <li>Product tracking</li>
                <li>Event tickets</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Best Practices
              </h3>
              <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                <li>Always test your QR code before distribution</li>
                <li>Use high contrast colors for better scanning</li>
                <li>Keep the URL short when possible</li>
                <li>Add a call-to-action near the code</li>
                <li>Consider adding a logo for brand recognition</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
