"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "motion/react";

const links = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
   
        <a href="#" className="group flex items-center gap-3">
   
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20"
          >
            SS
   
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>


          <div className="flex flex-col leading-none">
            <span className="font-semibold text-sm tracking-tight group-hover:text-primary transition-colors">
              Santha Sarker
            </span>
            <span className="text-[11px] text-muted-foreground">
              Frontend Developer
            </span>
          </div>
        </a>

        {/* ===== Right: Animated Link Boxes + Theme ===== */}
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-1.5">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -2 }}
                className="relative px-3.5 py-1.5 text-sm font-medium text-muted-foreground rounded-full border border-transparent hover:border-border hover:bg-secondary/60 hover:text-foreground transition-all duration-300"
              >
                {link.name}

                {/* animated underline on hover */}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-primary rounded-full"
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            ))}
          </nav>


        </div>
      </div>
    </motion.header>
  );
}