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

// Floating background words
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

  const duration = 16 + (index % 6) * 2.5;
  const xRange = 50 + (index % 4) * 15;
  const yRange = 60 + (index % 5) * 12;

  return (
    <motion.span
      className="absolute text-xs md:text-sm font-medium text-primary/10 select-none pointer-events-none whitespace-nowrap"
      style={{ left: `${start.x}%`, top: `${start.y}%` }}
      animate={{
        x: [0, xRange, -xRange * 0.6, xRange * 0.3, 0],
        y: [0, -yRange, yRange * 0.5, -yRange * 0.25, 0],
        rotate: [0, 6, -5, 3, 0],
        opacity: [0.06, 0.18, 0.1, 0.16, 0.06],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.4,
      }}
    >
      {word}
    </motion.span>
  );
}


const cardVariants = [
  { hidden: { opacity: 0, x: -80, y: 30 }, visible: { opacity: 1, x: 0, y: 0 } }, // left
  { hidden: { opacity: 0, x: 80, y: 30 }, visible: { opacity: 1, x: 0, y: 0 } },  // right
  { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } },                 // bottom
  { hidden: { opacity: 0, y: -60, x: -40 }, visible: { opacity: 1, y: 0, x: 0 } }, // top-left
  { hidden: { opacity: 0, y: -60, x: 40 }, visible: { opacity: 1, y: 0, x: 0 } },  // top-right
];

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
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my recent work — from live products to production
            applications.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const variant = cardVariants[index % cardVariants.length];

            return (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={variant}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}