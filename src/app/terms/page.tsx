export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p>
          By using QR Code Maker Pro, you agree to these Terms of Service. If
          you disagree, please do not use our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Service Description</h2>
        <p>
          We provide a free online tool for generating QR codes. We reserve the
          right to modify or discontinue the service at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
        <p className="mb-2">You agree not to:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Generate QR codes for illegal content</li>
          <li>Use our service for spamming</li>
          <li>Overload our servers with automated requests</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          4. Limitation of Liability
        </h2>
        <p>
          We are not responsible for any damages resulting from the use of our
          service or generated QR codes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">5. Changes to Terms</h2>
        <p>
          We may update these terms periodically. Continued use of the service
          constitutes acceptance of the modified terms.
        </p>
      </section>
    </div>
  );
}
