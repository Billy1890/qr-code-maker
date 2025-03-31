export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">QR Code Guide</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Use QR Codes</h2>
        <div className="space-y-4">
          <p>
            QR codes are versatile tools for digital communication. Here's how
            to get the most out of them:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>For websites: Paste your URL in the generator</li>
            <li>For contact info: Use vCard format</li>
            <li>
              For WiFi: Format as{" "}
              <code>WIFI:T:WPA;S:YourSSID;P:YourPassword;;</code>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Size Matters</h3>
            <p>
              Make sure your QR code is at least 2x2cm (0.8x0.8in) when printed.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Contrast is Key</h3>
            <p>
              Use dark-on-light colors with high contrast for best scanning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
