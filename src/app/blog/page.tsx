
export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <article className="prose lg:prose-xl">
        <h1 className="text-3xl font-bold mb-2">
          How QR Codes Work: The Complete Guide
        </h1>
        <p className="text-gray-500 mb-6">Published on June 15, 2024</p>

        <p className="lead">
          QR codes have become ubiquitous in our digital world, but how do they
          actually work? This guide explains the technology behind QR codes and
          their various applications.
        </p>

        <h2>What is a QR Code?</h2>
        <p>
          A QR (Quick Response) code is a two-dimensional barcode that can store
          various types of data. Unlike traditional barcodes that can only hold
          about 20 characters, QR codes can store:
        </p>
        <ul>
          <li>Up to 7,089 numeric characters</li>
          <li>4,296 alphanumeric characters</li>
          <li>2,953 binary bytes</li>
        </ul>

        <h2>The Anatomy of a QR Code</h2>
        <p>A QR code consists of several key components:</p>
        <ul>
          <li>
            <strong>Position markers:</strong> The three large squares that help
            scanners identify and orient the code
          </li>
          <li>
            <strong>Alignment markers:</strong> Smaller squares that help with
            distortion correction
          </li>
          <li>
            <strong>Timing pattern:</strong> Lines that help determine the size
            of the data matrix
          </li>
          <li>
            <strong>Data area:</strong> The actual encoded information
          </li>
        </ul>

        <h2>How Scanning Works</h2>
        <p>When you scan a QR code with your smartphone:</p>
        <ol>
          <li>The camera detects the position markers to identify the code</li>
          <li>The scanner analyzes the black and white modules</li>
          <li>The data is decoded using Reed-Solomon error correction</li>
          <li>
            The appropriate action is taken (open URL, display text, etc.)
          </li>
        </ol>

        <div className="bg-blue-50 p-4 rounded-lg my-6">
          <h3 className="text-blue-800">Pro Tip</h3>
          <p>
            QR codes with logos still work because of error correction. Even if
            30% of the code is obscured, it can still be scanned successfully.
          </p>
        </div>
      </article>
    </div>
  );
}
