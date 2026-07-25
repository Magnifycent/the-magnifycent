type Testimonial = {
  name: string;
  role: string;
  company: string;
  country: string;
  rating: number;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Adebisi Ayooluwa",
    role: "Director",
    company: "DominionAI Tech Services",
    country: "Nigeria",
    rating: 5,
    quote:
      "Working with Gbolahan was seamless from start to finish. He understood our vision quickly and delivered a product that exceeded what we imagined — professional, responsive, and genuinely invested in getting the details right.",
  },
  {
    name: "Odewusi Elizabeth",
    role: "Executive Manager",
    company: "Fumz Luxury Wear",
    country: "Nigeria",
    rating: 4,
    quote:
      "Great attention to design and a solid understanding of what our brand needed. Communication was clear throughout the project, and the final result reflected the quality we wanted to represent.",
  },
  {
    name: "Omobowale Oluwabukola",
    role: "Branch Manager",
    company: "Monarch Living",
    country: "USA",
    rating: 5,
    quote:
      "THE MAGNIFYCENT built us a platform that truly elevated how we present our properties. The design is elegant, the site performs flawlessly, and his ability to translate our brand into a digital experience was outstanding.",
  },
  {
    name: "Ayoola Peter",
    role: "Director",
    company: "Apex Company",
    country: "USA",
    rating: 5,
    quote:
      "A rare combination of technical skill and design sense. THE MAGNIFYCENT delivered ahead of schedule without compromising on quality, and was proactive about suggesting improvements we hadn't even considered.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-bronze" : "text-bronze-dim/20"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6 border-t border-bronze-dim/10">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-bronze text-xs tracking-[0.3em] uppercase mb-4">
          Client Recommendations
        </p>
        <h2 className="font-display text-bone text-3xl md:text-5xl mb-20">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative border border-bronze-dim/15 rounded-sm p-8 md:p-10 hover:border-bronze-dim/40 transition-colors duration-500"
            >
              <span className="font-display text-bronze-dim/30 text-6xl leading-none absolute top-6 right-8 select-none">
                &rdquo;
              </span>

              <Stars rating={t.rating} />

              <p className="font-body text-bone-dim text-base leading-relaxed mt-6 mb-8">
                {t.quote}
              </p>

              <div className="pt-6 border-t border-bronze-dim/10">
                <p className="font-display text-bone text-lg">{t.name}</p>
                <p className="font-body text-bone-dim text-xs tracking-wide uppercase mt-1">
                  {t.role}, {t.company}
                </p>
                <p className="font-body text-bronze-dim text-xs tracking-wide uppercase mt-1">
                  {t.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}