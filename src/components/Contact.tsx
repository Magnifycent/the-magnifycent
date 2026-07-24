const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/olayinka-gbolahan-ab81b11b6" },
  { label: "Instagram", href: "https://instagram.com/themagnifycent" },
  { label: "TikTok", href: "https://tiktok.com/@the_magnifycent" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-bronze-dim/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-bronze text-xs tracking-[0.3em] uppercase mb-6">
          Get In Touch
        </p>
        <h2 className="font-display text-bone text-3xl md:text-5xl leading-tight mb-10">
          Have a project in mind?
          <br />
          Let&apos;s build something exceptional.
        </h2>

        <a
          href="mailto:olayinkagbolahanjohn@gmail.com"
          className="inline-block font-display text-bronze text-2xl md:text-4xl mb-16 border-b border-bronze-dim/30 hover:border-bronze transition-colors duration-300"
        >
          olayinkagbolahanjohn@gmail.com
        </a>

        <div className="flex items-center justify-center gap-10">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-bone-dim text-xs tracking-[0.2em] uppercase hover:text-bronze transition-colors duration-300 border-b border-transparent hover:border-bronze pb-1"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-32 pt-8 border-t border-bronze-dim/10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto text-center md:text-left">
        <p className="font-body text-bone-dim text-xs tracking-[0.15em] uppercase">
          Designed by The Magnifycent
        </p>
        <p className="font-body text-bone-dim text-xs tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} Gbolahan John Olayinka
        </p>
      </footer>
    </section>
  );
}