"use client";

import { useEffect, useState } from "react";
import { ParticleStage } from "@/components/particle-stage";

const WORDS = ["Hi, I'm", "SANTHA", "SARKER", "PORTFOLIO" ] as const;



export default function HeroSection() {
  const [step, setStep] = useState(0);
  const settled = step >= WORDS.length - 1;

  useEffect(() => {
    if (settled) return;
    const id = window.setTimeout(() => setStep((s) => s + 1), 1100);
    return () => window.clearTimeout(id);
  }, [settled, step]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-background text-foreground"
    >
      <ParticleStage gather={settled} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,var(--background)_76%)]" />

      <header
        className={`relative z-10 flex items-center justify-between gap-4 px-5 pt-6 sm:px-8 ${
          settled ? "chrome-in" : "opacity-0"
        }`}
      >
        <a href="#home" className="text-sm tracking-[0.18em]">
          SANTHA SARKER
        </a>
   
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-end px-5 pb-16 text-center sm:pb-20">
        <h1
          key={WORDS[step]}
          className="word-in metal text-[18vw] leading-none font-extrabold tracking-tight sm:text-[12vw] md:text-[9.5vw]"
        >
          {WORDS[step]}
        </h1>

        <div
          className={`mt-5 flex flex-col items-center gap-5 ${
            settled ? "chrome-in" : "pointer-events-none opacity-0"
          }`}
        >
          <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase sm:text-sm">
            Frontend Developer
          </p>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            Contact
          </a>
        </div>
      </div>

 
    </section>
  );
}