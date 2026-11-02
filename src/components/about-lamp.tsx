"use client";

import { useState } from "react";

export default function AboutLamp() {
  const [on, setOn] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-[100dvh] overflow-hidden border-t border-border"
      style={{ background: on ? "#1a120c" : "#070709" }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: on ? 1 : 0,
          background:
            "radial-gradient(ellipse 70% 80% at 22% 42%, rgba(255,196,120,0.28), transparent 62%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col items-center justify-center gap-8 px-5 py-16 md:flex-row md:gap-16 md:px-10">
        <button
          type="button"
          onClick={() => setOn((v) => !v)}
          aria-pressed={on}
          className="relative h-[460px] w-[220px] shrink-0 bg-transparent"
        >
          <span className="sr-only">
            {on ? "Pull again to turn the lamp off" : "Pull the cord to see about me"}
          </span>

          <span
            className="pointer-events-none absolute top-[78px] left-1/2 h-[340px] w-[280px] -translate-x-1/2 transition-opacity duration-500"
            style={{
              opacity: on ? 1 : 0,
              background:
                "linear-gradient(180deg, rgba(255,214,150,0) 0%, rgba(255,186,96,0.16) 18%, rgba(255,170,80,0.05) 70%, transparent 100%)",
              clipPath: "polygon(38% 0, 62% 0, 100% 100%, 0 100%)",
            }}
          />

          <svg viewBox="0 0 220 460" className="relative z-10 h-full w-full">
            <ellipse cx="110" cy="438" rx="46" ry="8" fill="#1c1c1c" />
            <rect x="102" y="150" width="16" height="280" rx="8" fill="#2a2a2e" />
            <rect x="96" y="248" width="28" height="8" rx="3" fill="#c4a574" />
            <ellipse cx="110" cy="430" rx="34" ry="7" fill="#3a3a40" />
            <path
              d={
                on
                  ? "M48 150 L172 150 L158 78 Q110 58 62 78 Z"
                  : "M52 148 L168 148 L156 70 Q110 52 64 70 Z"
              }
              fill={on ? "#f3d7a4" : "#1b1b1f"}
              stroke={on ? "#e7c27a" : "#3a3a40"}
              strokeWidth="2"
            />
            <ellipse
              cx="110"
              cy={on ? 148 : 146}
              rx={on ? 62 : 58}
              ry="8"
              fill={on ? "#ffe7c2" : "#111114"}
            />
          </svg>

          <span
            className="absolute top-[132px] left-1/2 z-20 h-16 w-8 origin-top"
            style={{
              transform: `translateX(-18px) rotate(${on ? 16 : 0}deg)`,
              transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span className="mx-auto block h-12 w-px bg-[#d7c4a3]" />
            <span className="mx-auto block h-3 w-3 rounded-full bg-[#e6d3ad]" />
          </span>

          <span className="absolute bottom-0 left-1/2 w-max -translate-x-1/2 text-[10px] tracking-[0.22em] text-[#b7a48a] uppercase">
            {on ? "Pull again" : "Pull the cord to see about me"}
          </span>
        </button>

        <article
          className="w-full max-w-md rounded-3xl border border-white/10 bg-[#14120f]/85 p-7 text-left backdrop-blur-md transition-all duration-700"
          style={{
            opacity: on ? 1 : 0,
            transform: on ? "translateY(0)" : "translateY(16px)",
            pointerEvents: on ? "auto" : "none",
          }}
        >
          <p className="text-[11px] tracking-[0.22em] text-[#e7c27a] uppercase">
            About me
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-[#f6efe4]">
            Pull up a chair.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#d9d0c4]">
            <p>
              I am an experienced frontend developer. I build scalable,
              user-friendly web apps and wire modern tools into products that
              stay reliable.
            </p>
            <p>
              SaaS and enterprise work includes SysUser, SysIncident, SysRisk,
              and SysAudit — features, responsive UI, APIs, and the details that
              change how a product feels.
            </p>
            <p>
              Next.js, React, React Native, TypeScript, Mantine, Zustand, Redux,
              Node.js, PostgreSQL, Supabase, REST. Docker, Git, GitHub, Azure
              DevOps.
            </p>
            <p>
              Mathematics sharpened how I take problems apart. Competitive
              programming keeps that muscle honest. Next stretch is full-stack.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}