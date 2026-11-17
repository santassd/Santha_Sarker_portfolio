"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  IconExternalLink,
  IconBrandGithub,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

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

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 1000); // 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index: number) => {
    const diff = (index - activeIndex + projects.length) % projects.length;

    if (diff === 0) return "center";
    if (diff === 1 || diff === -(projects.length - 1)) return "right";
    if (diff === projects.length - 1 || diff === -1) return "left";
    return "hidden";
  };

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 mt-10 md:mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my recent work — from live products to production
            applications.
          </p>
        </motion.div>

    
        <div
          className="relative h-[440px] md:h-[480px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {projects.map((project, index) => {
            const position = getPosition(index);

            const variants = {
              center: {
                x: 0,
                scale: 1,
                opacity: 1,
                zIndex: 30,
                filter: "blur(0px)",
                rotateY: 0,
              },
              left: {
                x: "-58%",
                scale: 0.75,
                opacity: 0.45,
                zIndex: 20,
                filter: "blur(3px)",
                rotateY: 12,
              },
              right: {
                x: "58%",
                scale: 0.75,
                opacity: 0.45,
                zIndex: 20,
                filter: "blur(3px)",
                rotateY: -12,
              },
              hidden: {
                x: 0,
                scale: 0.55,
                opacity: 0,
                zIndex: 10,
                filter: "blur(6px)",
                rotateY: 0,
              },
            };

            return (
              <motion.div
                key={project.title}
                className="absolute w-full max-w-md cursor-pointer"
                initial={false}
                animate={position}
                variants={variants}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 26,
                }}
                onClick={() => {
                  if (position === "left") prev();
                  if (position === "right") next();
                }}
                style={{ perspective: 1000 }}
              >
                <div
                  className={`rounded-2xl border bg-card/80 backdrop-blur-md p-6 md:p-8 shadow-xl transition-all duration-300
                    ${
                      position === "center"
                        ? "border-primary/50 shadow-primary/15 shadow-2xl"
                        : "border-border/60"
                    }`}
                >
                  {/* Active indicator line */}
                  {position === "center" && (
                    <motion.div
                      layoutId="active-line"
                      className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
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

                  {position === "center" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3"
                    >
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
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-border bg-card/60 hover:bg-primary/10 hover:border-primary/40 transition-all active:scale-95"
          >
            <IconChevronLeft size={22} />
          </button>

          {/* Dots + Progress */}
          <div className="flex gap-2.5 items-center">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="relative"
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full border border-border bg-card/60 hover:bg-primary/10 hover:border-primary/40 transition-all active:scale-95"
          >
            <IconChevronRight size={22} />
          </button>
        </div>

        {/* Auto-play indicator */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          {isPaused ? "Paused" : "Auto-playing"} • Hover to pause
        </p>
      </div>
    </section>
  );
}
