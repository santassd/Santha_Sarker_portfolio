"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
   { name: "Skills", href: "#skills" }, 
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
 
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-tight">
              SS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors">
                Santha Sarker
              </span>
              <span className="text-[11px] text-muted-foreground -mt-0.5">
                Frontend Developer
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-secondary/80 transition-colors"
          >
            {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] right-4 z-50 w-48 rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-xl md:hidden overflow-hidden"
          >
            <nav className="flex flex-col py-1.5">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
