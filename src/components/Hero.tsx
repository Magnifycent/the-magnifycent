"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SKILLS = [
  "TypeScript",
  "Next.js",
  "React",
  "Full-Stack Architecture",
  "Tailwind CSS",
  "Node.js",
  "UI/UX Design",
  "PHP",
  "Python",
  "Performance Engineering",
  "Database Design",
  "Design Systems",
];

const HERO_IMAGES = [
  { src: "/images/hero/hero-1.jpg", position: "center 20%" },
  { src: "/images/hero/hero-2.jpg", position: "center 20%" },
];

export default function Hero() {
  const [skillIndex, setSkillIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % SKILLS.length);
    }, 2200);
    return () => clearInterval(skillInterval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{
              opacity: imageIndex === i ? 1 : 0,
              maskImage:
                "radial-gradient(ellipse at center, black 0%, black 55%, transparent 90%), linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 0%, black 55%, transparent 90%), linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)",
              WebkitMaskComposite: "source-in",
            }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              priority={i === 0}
              style={{ objectPosition: img.position }}
              className="object-cover opacity-30 grayscale-[40%]"
            />
          </div>
        ))}
        {/* Extra ink-colored gradient overlay to fully seat it into the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-body text-bronze text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up [animation-delay:0.1s]">
          Full-Stack Developer
        </p>

        <h1 className="font-display text-bone leading-[1.05] opacity-0 animate-fade-up [animation-delay:0.35s]">
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            Gbolahan John
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-bronze mt-1">
            Olayinka
          </span>
        </h1>

        <div className="mt-10 h-8 flex items-center justify-center opacity-0 animate-fade-up [animation-delay:0.6s]">
          <span
            key={skillIndex}
            className="font-body text-bone-dim text-sm md:text-base tracking-[0.2em] uppercase animate-tag-fade"
          >
            {SKILLS[skillIndex]}
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-up [animation-delay:0.9s]">
        <div className="w-px h-14 bg-gradient-to-b from-bronze-dim to-transparent" />
      </div>
    </section>
  );
}