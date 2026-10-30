"use client";

import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React.js", "React Native", "Expo", "TypeScript", "JavaScript"],
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "shadcn/ui", "Mantine", "Figma", "Responsive Design", "Framer Motion", "Radix UI"],
  },
  {
    title: "State Management",
    skills: ["Zustand", "Redux"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "Docker", "GitHub", "Git"],
  },
  {
    title: "Project Management",
    skills: ["Jira", "Microsoft Teams", "Blue"],
  },
  {
    title: "Communication & Tools",
    skills: ["Microsoft Teams", "Microsoft Office", "Jira"],
  },
];

const floatingWords = [
  "Next.js", "React", "TypeScript", "Azure", "Docker", "Jira",
  "Zustand", "Redux", "Tailwind", "Expo", "GitHub", "Teams",
  "Mantine", "Figma", "React Native", "JavaScript", "shadcn/ui",
  "Framer Motion", "Radix UI", "Blue"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Strong floating background words */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {floatingWords.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="absolute text-base md:text-lg font-bold text-white/20 select-none"
            initial={{
              x: `${(index * 47) % 100}vw`,
              y: `${(index * 31) % 100}vh`,
            }}
            animate={{
              x: [
                `${(index * 47) % 100}vw`,
                `${((index * 47) + 40) % 100}vw`,
                `${((index * 47) - 30) % 100}vw`,
                `${(index * 47) % 100}vw`,
              ],
              y: [
                `${(index * 31) % 100}vh`,
                `${((index * 31) - 25) % 100}vh`,
                `${((index * 31) + 35) % 100}vh`,
                `${(index * 31) % 100}vh`,
              ],
              opacity: [0.15, 0.35, 0.2, 0.3, 0.15],
            }}
            transition={{
              duration: 18 + (index % 6) * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg mb-4">{group.title}</h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}