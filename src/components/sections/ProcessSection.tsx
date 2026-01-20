export default function ProcessSection() {
  return (
    <section className="bg-black text-white py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <header className="mb-24 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f97316] mb-6">
            Our Process: Built for Clarity, Performance & Results
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Every successful digital project follows a structured process.
            Our approach ensures transparency, strategic alignment, and
            measurable outcomes at every stage — from discovery to launch
            and beyond.
          </p>
        </header>

        {/* STEPS */}
        <div className="space-y-20">

          {/* STEP 1 */}
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-2 text-[#f97316] text-5xl font-bold">
              01
            </div>
            <div className="md:col-span-10">
              <h3 className="text-2xl font-semibold mb-4">
                Discovery & Strategy
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We begin by understanding your business, audience, goals, and
                challenges. This phase includes research, requirement analysis,
                competitive review, and strategic planning to define a clear
                roadmap before any design or development begins.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-2 text-[#f97316] text-5xl font-bold">
              02
            </div>
            <div className="md:col-span-10">
              <h3 className="text-2xl font-semibold mb-4">
                Design & Experience
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We translate strategy into structure and visuals. This phase
                focuses on user experience, interface design, brand alignment,
                and interaction planning — ensuring clarity, usability, and
                consistency across all touchpoints.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-2 text-[#f97316] text-5xl font-bold">
              03
            </div>
            <div className="md:col-span-10">
              <h3 className="text-2xl font-semibold mb-4">
                Development & Integration
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our development team builds secure, scalable, and
                performance-driven systems using modern technologies. This
                includes front-end, back-end, integrations, automation, and
                quality assurance.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-2 text-[#f97316] text-5xl font-bold">
              04
            </div>
            <div className="md:col-span-10">
              <h3 className="text-2xl font-semibold mb-4">
                Launch & Optimization
              </h3>
              <p className="text-gray-400 leading-relaxed">
                After testing and validation, we launch with precision.
                Post-launch, we monitor performance, gather insights, and
                optimize continuously to ensure long-term success and growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
