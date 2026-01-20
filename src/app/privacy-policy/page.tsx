export const metadata = {
  title: "Privacy Policy | Visionary Design Tech",
  description: "Privacy policy explaining how Visionary Design Tech collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Privacy <span className="text-[#ed7922]">Policy</span>
        </h1>

        <p className="text-gray-400 mb-10">
          Effective Date: {new Date().getFullYear()}
        </p>

        <section className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Introduction
            </h2>
            <p>
              Visionary Design Tech respects your privacy. This policy explains
              how we collect, use, and protect your personal information when
              you visit our website or contact us for services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Contact details (name, email, phone)</li>
              <li>Project or inquiry information you submit</li>
              <li>Technical data (IP address, browser type, device)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to inquiries and provide services</li>
              <li>To improve website performance and user experience</li>
              <li>To communicate project updates or business information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Data Protection
            </h2>
            <p>
              We implement appropriate security measures to protect your data.
              However, no online transmission or storage system is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We may use trusted third-party tools (analytics, hosting, email
              services) solely to support our operations. These providers are
              obligated to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data by contacting us directly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, contact
              us at{" "}
              <a
                href="mailto:info@visionarydesigntech.com"
                className="text-[#ed7922] hover:underline"
              >
                info@visionarydesigntech.com
              </a>
              .
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}
