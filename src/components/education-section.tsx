"use client";

import { motion } from "motion/react";
import { IconSchool, IconAward } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const education = [
  {
    degree: "B.Sc. Honours in Mathematics",
    institution: "Cumilla Victoria Govt. College",
    location: "Cumilla, Bangladesh",
    period: "2022 – Present",
    result: null,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Cumilla Victoria Govt. College",
    location: "Cumilla, Bangladesh",
    period: "2019 – 2020",
    result: "GPA 5.00 out of 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Cumilla Modern High School",
    location: "Cumilla, Bangladesh",
    period: "2020",
    result: "GPA 5.00 out of 5.00",
  },
];

// Only Math + Science related symbols
const floatingItems = [
  "∑", "∫", "π", "∞", "√", "∆", "θ", "λ", "≈", "≠", "∂", "∇",
  "α", "β", "γ", "σ", "μ", "φ", "ψ", "Ω", "ℝ", "ℤ", "ℕ",
  "sin", "cos", "tan", "log", "lim", "dx", "dy", "f(x)", "x²", "x³",
  "E=mc²", "H₂O", "CO₂", "Δx", "Σx", "∛", "±", "≥", "≤",
];

function FloatingItem({ item, index }: { item: string; index: number }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setPos({
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
    });
  }, []);

  const duration = 15 + (index % 6) * 2;
  const xRange = 65 + (index % 5) * 18;
  const yRange = 75 + (index % 5) * 15;
  const rotateRange = 20 + (index % 4) * 10;

  return (
    <motion.span
      className="absolute text-lg md:text-xl font-bold font-mono text-primary/40 select-none pointer-events-none"
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      animate={{
        x: [0, xRange, -xRange * 0.7, xRange * 0.35, 0],
        y: [0, -yRange, yRange * 0.5, -yRange * 0.25, 0],
        rotate: [0, rotateRange, -rotateRange * 0.6, rotateRange * 0.3, 0],
        opacity: [0.2, 0.45, 0.28, 0.4, 0.2],
        scale: [1, 1.25, 0.95, 1.15, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.18,
      }}
    >
      {item}
    </motion.span>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
     
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {floatingItems.map((item, index) => (
          <FloatingItem key={`${item}-${index}`} item={item} index={index} />
        ))}

     
        <motion.div
          className="absolute top-16 left-8 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, 70, -35, 0],
            y: [0, 45, -25, 0],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-8 w-[28rem] h-[28rem] bg-primary/12 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 45, 0],
            y: [0, -55, 35, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground">My academic journey</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {index === 0 ? (
                    <IconSchool size={24} />
                  ) : (
                    <IconAward size={24} />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.location}
                  </p>
                  {edu.result && (
                    <p className="text-sm font-medium text-foreground/80">
                      {edu.result}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}