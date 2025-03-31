export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          When you use our QR Code Generator, we may collect:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>The URLs you input to generate QR codes</li>
          <li>Anonymous usage statistics</li>
          <li>Technical information about your device</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          2. How We Use Your Information
        </h2>
        <p>
          We use the collected information solely to provide and improve our
          service. We do not sell or share your data with third parties for
          marketing purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Cookies</h2>
        <p>
          We use cookies to enhance your experience. You can disable cookies in
          your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
        <p>
          We use Google Analytics to understand how visitors use our site. This
          service may collect information about your browsing behavior.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">5. Contact Us</h2>
        <p>
          For any privacy-related questions, please contact us at
          privacy@qrcodemaker.com.
        </p>
      </section>
    </div>
  );
}
