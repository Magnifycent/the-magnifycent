const CATEGORIES = [
  {
    title: "Languages & Frameworks",
    items: ["TypeScript", "React", "Next.js", "PHP", "Python"],
  },
  {
    title: "Architecture & Systems",
    items: ["Full-Stack Architecture", "Database Design", "Performance Engineering"],
  },
  {
    title: "Design",
    items: ["UI/UX Design", "Design Systems", "Tailwind CSS", "Node.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 border-t border-bronze-dim/10">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-bronze text-xs tracking-[0.3em] uppercase mb-4">
          Expertise
        </p>
        <h2 className="font-display text-bone text-3xl md:text-5xl mb-20">
          Skills &amp; Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
          {CATEGORIES.map((category) => (
            <div key={category.title}>
              <h3 className="font-body text-bone-dim text-xs tracking-[0.2em] uppercase mb-8 pb-4 border-b border-bronze-dim/20">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-5">
                {category.items.map((item, i) => (
                  <li key={item} className="group flex items-center gap-4">
                    <span className="font-display text-bronze-dim text-sm w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-bone text-base group-hover:text-bronze transition-colors duration-300">
                      {item}
                    </span>
                    <span className="ml-auto w-0 group-hover:w-6 h-px bg-bronze transition-all duration-300" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}