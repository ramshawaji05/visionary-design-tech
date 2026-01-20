export const metadata = {
  title: "Terms & Conditions | Visionary Design Tech",
  description: "Terms and conditions governing the use of Visionary Design Tech services and website.",
};

export default function TermsPage() {
  return (
    <main className="bg-black text-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Terms & <span className="text-[#ed7922]">Conditions</span>
        </h1>

        <p className="text-gray-400 mb-10">
          Effective Date: {new Date().getFullYear()}
        </p>

        <section className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using our website or services, you agree to be
              bound by these Terms & Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Services
            </h2>
            <p>
              Visionary Design Tech provides digital services including design,
              development, automation, marketing, and consulting. Service scope,
              pricing, and timelines are defined per project agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All content, designs, and code remain the intellectual property
              of Visionary Design Tech unless explicitly transferred through a
              written agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Client Responsibilities
            </h2>
            <p>
              Clients are responsible for providing accurate information,
              approvals, and timely feedback required to complete projects.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              Visionary Design Tech is not liable for indirect, incidental, or
              consequential damages arising from the use of our services or
              website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate services if terms are
              violated or misuse is identified.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Governing Law
            </h2>
            <p>
              These terms are governed by applicable laws of the jurisdiction in
              which Visionary Design Tech operates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Contact
            </h2>
            <p>
              For questions regarding these Terms & Conditions, contact{" "}
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
