"use client";

import { motion } from "motion/react";

const experiences = [
  {
    company: "Sysonex",
    role: "Frontend Developer – Risk Management Software",
    period: "July 2024 – Present",
    type: "Remote",
    description:
      "Building scalable frontend solutions for enterprise risk management software using Next.js, Mantine and Redux.",
  },
  {
    company: "Sysonex",
    role: "Mobile App Developer – Resident Management App",
    period: "May 2024 – July 2024",
    type: "Remote",
    description:
      "Developed a React Native mobile application for residential community management with Expo and Zustand.",
  },
  {
    company: "Ideapeel",
    role: "Frontend Developer – Event Management Software",
    period: "Aug 2024 – Mar 2025",
    type: "Remote",
    description:
      "Created modern and responsive interfaces for event management platform using Next.js and Tailwind CSS.",
  },
];


const devIcons = [
  "</>", "{ }", "=>", "fn()", "const", "async", "await",
  "React", "Next", "TS", "JS", "CSS", "API", "git",
  "npm", "yarn", "UI", "UX", "Hook", "Props", "State",
  "Redux", "Zustand", "Expo", "Node", "HTML", "JSON",
];

function TriangleFloatingIcon({
  item,
  index,
}: {
  item: string;
  index: number;
}) {
 
  const duration = 14 + (index % 6) * 1.8;
  const delay = index * 0.35;

  return (
    <motion.span
      className="absolute text-sm md:text-base font-mono font-bold text-primary/30 select-none pointer-events-none"
      style={{
        left: "50%",
        top: "10%",
      }}
      animate={{
 
        x: [0, -160, 160, 0],
        y: [0, 220, 220, 0],
        rotate: [0, 120, 240, 360],
        opacity: [0.15, 0.4, 0.35, 0.15],
        scale: [0.9, 1.2, 1.1, 0.9],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {item}
    </motion.span>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-muted/20 overflow-hidden"
    >

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {devIcons.map((item, index) => (
          <TriangleFloatingIcon
            key={`${item}-${index}`}
            item={item}
            index={index}
          />
        ))}

      
        <motion.div
          className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-primary/12 rounded-full blur-3xl"
          animate={{
            x: [0, 60, -30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-20 w-[480px] h-[480px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -70, 40, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">
            My professional journey so far
          </p>
        </motion.div>


        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="relative group"
            >
             
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border/60" />
              <div className="absolute -left-[7px] top-3 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />

              {/* Card */}
              <div className="ml-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-primary font-medium mb-3">
                    {exp.company} · {exp.type}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}