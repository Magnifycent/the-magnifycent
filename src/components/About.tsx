export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <div className="flex flex-col items-start">
          <span className="font-display text-bronze text-[5rem] sm:text-[7rem] md:text-[9rem] leading-none">
            1+
          </span>
          <p className="font-body text-bone-dim text-xs tracking-[0.3em] uppercase -mt-2">
            Years in Development
          </p>
          <div className="w-16 h-px bg-bronze-dim/40 mt-8" />
        </div>

        <div>
          <p className="font-body text-bronze text-xs tracking-[0.3em] uppercase mb-6">
            About
          </p>
          <p className="font-display text-bone text-2xl md:text-3xl leading-relaxed mb-6">
            A full-stack developer who treats engineering as a craft, not
            just a job.
          </p>
          <p className="font-body text-bone-dim text-base md:text-lg leading-relaxed">
            Over one year building across freelance client work, agency
            projects, and independent ventures.  I bring the same standard
            to every build: clean architecture, thoughtful interfaces, and
            code that holds up under pressure. My work spans full-stack
            systems and design-forward frontends, with a focus on turning
            complex requirements into interfaces that feel effortless.
          </p>
        </div>
      </div>
    </section>
  );
}