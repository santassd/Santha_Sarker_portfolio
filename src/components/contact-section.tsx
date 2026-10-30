"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconBuilding,
  IconUser,
} from "@tabler/icons-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
      
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-14 max-w-lg mx-auto text-base md:text-lg">
            I'm currently open to new opportunities. Feel free to reach out if
            you'd like to work together.
          </p>
        </motion.div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          <motion.a
            href="mailto:sarkersantha@gmail.com"
            initial={{ opacity: 0, y: 30, rotateY: -12 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 flex flex-col items-center gap-3 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <IconMail size={26} />
            </div>
            <span className="text-sm text-muted-foreground">Email</span>
            <span className="font-medium text-sm md:text-base break-all">
              sarkersantha@gmail.com
            </span>
          </motion.a>

          <motion.a
            href="tel:+8801929015357"
            initial={{ opacity: 0, y: 30, rotateY: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 flex flex-col items-center gap-3 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <IconPhone size={26} />
            </div>
            <span className="text-sm text-muted-foreground">Phone</span>
            <span className="font-medium text-sm md:text-base">
              +88 01929-015357
            </span>
          </motion.a>
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
       
          <motion.a
            href="https://github.com/santassd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-card/70 backdrop-blur-md hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <IconBrandGithub size={20} />
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <IconUser size={12} /> Personal
              </span>
              <span className="text-sm font-medium">santassd</span>
            </div>
          </motion.a>

    
          <motion.a
            href="https://github.com/sarker-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-card/70 backdrop-blur-md hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <IconBrandGithub size={20} />
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <IconBuilding size={12} /> Sysonex
              </span>
              <span className="text-sm font-medium">sarker-dev</span>
            </div>
          </motion.a>

    
          <motion.a
            href="https://www.linkedin.com/in/santha-sarker-913b01300"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-card/70 backdrop-blur-md hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <IconBrandLinkedin size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}