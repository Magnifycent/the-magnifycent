import Image from "next/image";

const PROJECTS = [
  {
    index: "01",
    name: "Themmie Wears",
    description: "A clean, brand-focused storefront for a clothing label — built lean with pure HTML and CSS.",
    stack: ["HTML", "CSS"],
    link: "https://themmie.vercel.app",
    image: "/images/projects/themmie-wears.png",
  },
  {
    index: "02",
    name: "Kings Cars",
    description: "A cinematic showcase site for a luxury automotive brand, with a full-stack backend for inquiries and data.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Supabase"],
    link: "https://kings-cars-1.vercel.app/",
    image: "/images/projects/kings-cars.png",
  },
  {
    index: "03",
    name: "Monarch Living",
    description: "A luxury real estate and lifestyle platform spanning housing and estate listings, backed by a full-stack architecture.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Supabase"],
    link: "https://monarch-living.vercel.app/",
    image: "/images/projects/monarch-living.png",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-32 px-6 border-t border-bronze-dim/10">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-bronze text-xs tracking-[0.3em] uppercase mb-4">
          Selected Work
        </p>
        <h2 className="font-display text-bone text-3xl md:text-5xl mb-24">
          Projects
        </h2>

        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, i) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-bronze-dim/20 [direction:ltr] transition-all duration-500 group-hover:border-bronze-dim/50">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>

              <div className="[direction:ltr]">
                <span className="font-display text-bronze-dim text-sm">
                  {project.index}
                </span>
                <h3 className="font-display text-bone text-3xl md:text-4xl mt-3 mb-4 group-hover:text-bronze transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="font-body text-bone-dim text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-body text-xs tracking-wide uppercase text-bone-dim border border-bronze-dim/30 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-bronze group-hover:underline underline-offset-4">
                  View Project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}