"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Blushing Bride",
    description:
      "A beautiful landing page for a bridal brand with modern design and smooth interactions.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://blushingbride-landing.vercel.app/",
    github: null,
  },
  {
    title: "Quantigo AI Weather",
    description:
      "AI-powered weather application with real-time data and intelligent forecasting features.",
    tech: ["Next.js", "API Integration", "Tailwind CSS"],
    live: "https://quantigo-ai-weather-project.vercel.app/",
    github: null,
  },
  {
    title: "Resident Management App",
    description:
      "Mobile application for managing residential communities, built with React Native and Expo.",
    tech: ["React Native", "Expo", "Zustand"],
    live: null,
    github: null,
  },
  {
    title: "Risk Management Software",
    description:
      "Enterprise frontend for risk assessment and management system with complex dashboards.",
    tech: ["Next.js", "Mantine", "Redux"],
    live: null,
    github: null,
  },
  {
    title: "Event Management Software",
    description:
      "Full-featured event management platform with scheduling, ticketing and analytics.",
    tech: ["Next.js", "Tailwind CSS", "Zustand"],
    live: null,
    github: null,
  },
];

const floatingWords = [
  "Next.js",
  "React",
  "TypeScript",
  "Expo",
  "Zustand",
  "Mantine",
  "Tailwind",
  "API",
  "Redux",
  "Framer",
];

function FloatingWord({ word, index }: { word: string; index: number }) {
  const [start, setStart] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setStart({
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
    });
  }, []);

  const duration = 18 + (index % 5) * 2.2;
  const xRange = 40 + (index % 4) * 12;
  const yRange = 50 + (index % 5) * 10;

  return (
    <motion.span
      className="absolute text-xs md:text-sm font-medium text-primary/10 select-none pointer-events-none whitespace-nowrap"
      style={{ left: `${start.x}%`, top: `${start.y}%` }}
      animate={{
        x: [0, xRange, -xRange * 0.6, xRange * 0.3, 0],
        y: [0, -yRange, yRange * 0.5, -yRange * 0.25, 0],
        rotate: [0, 5, -4, 2, 0],
        opacity: [0.05, 0.14, 0.08, 0.12, 0.05],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.35,
      }}
    >
      {word}
    </motion.span>
  );
}


function ElectricSparks({ delay = 0 }: { delay?: number }) {
  
  const sparkColor = "#22d3ee"; 
  const sparkColorSoft = "rgba(34, 211, 238, 0.7)";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl z-20">
      
      <motion.div
        className="absolute left-0 top-[8%] h-[84%] w-[3px] rounded-full"
        style={{
          background: `linear-gradient(to bottom, transparent, ${sparkColor}, #ffffff, ${sparkColor}, transparent)`,
          boxShadow: `0 0 12px 3px ${sparkColorSoft}`,
        }}
        animate={{
          opacity: [0.35, 1, 0.45, 1, 0.3],
          scaleY: [0.7, 1, 0.75, 1.05, 0.65],
        }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />

      
      <motion.div
        className="absolute right-0 top-[8%] h-[84%] w-[3px] rounded-full"
        style={{
          background: `linear-gradient(to bottom, transparent, ${sparkColor}, #ffffff, ${sparkColor}, transparent)`,
          boxShadow: `0 0 12px 3px ${sparkColorSoft}`,
        }}
        animate={{
          opacity: [0.3, 1, 0.4, 0.95, 0.35],
          scaleY: [0.65, 1.05, 0.7, 1, 0.6],
        }}
        transition={{
          duration: 1.45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.18,
        }}
      />

      {/* TOP */}
      <motion.div
        className="absolute top-0 left-[8%] w-[84%] h-[3px] rounded-full"
        style={{
          background: `linear-gradient(to right, transparent, ${sparkColor}, #ffffff, ${sparkColor}, transparent)`,
          boxShadow: `0 0 12px 3px ${sparkColorSoft}`,
        }}
        animate={{
          opacity: [0.3, 1, 0.4, 1, 0.25],
          scaleX: [0.6, 1, 0.7, 1.05, 0.55],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.3,
        }}
      />

      {/* BOTTOM */}
      <motion.div
        className="absolute bottom-0 left-[8%] w-[84%] h-[3px] rounded-full"
        style={{
          background: `linear-gradient(to right, transparent, ${sparkColor}, #ffffff, ${sparkColor}, transparent)`,
          boxShadow: `0 0 12px 3px ${sparkColorSoft}`,
        }}
        animate={{
          opacity: [0.35, 0.95, 0.4, 1, 0.3],
          scaleX: [0.55, 1.05, 0.65, 1, 0.5],
        }}
        transition={{
          duration: 1.35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.45,
        }}
      />

      {/* Corner dots */}
      {[
        { top: 2, left: 2 },
        { top: 2, right: 2 },
        { bottom: 2, left: 2 },
        { bottom: 2, right: 2 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            ...pos,
            background: sparkColor,
            boxShadow: `0 0 10px 3px ${sparkColor}`,
          }}
          animate={{
            opacity: [0.2, 1, 0.3, 1, 0.15],
            scale: [0.7, 1.4, 0.8, 1.3, 0.6],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + i * 0.12,
          }}
        />
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {floatingWords.map((word, index) => (
          <FloatingWord key={`${word}-${index}`} word={word} index={index} />
        ))}

        <motion.div
          className="absolute top-16 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/6 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -25, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my recent work — from live products to production
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden"
            >
              {/* Electric Sparks - always on */}
              <ElectricSparks delay={index * 0.2} />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="gap-2">
                        <IconExternalLink className="h-4 w-4" />
                        Live
                      </Button>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="ghost" className="gap-2">
                        <IconBrandGithub className="h-4 w-4" />
                        Code
                      </Button>
                    </a>
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