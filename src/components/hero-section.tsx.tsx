"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const Hero3D = dynamic(() => import("@/components/hero-3d"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background" />,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

   
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-background/40 to-background" />

      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
     

      
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="block">Hi, I&apos;m</span>
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Santha Sarker
          </span>
        </motion.h1>

      
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Frontend Developer
        </motion.h2>

        
        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          I craft clean, scalable, and high-performance web & mobile experiences
          using <span className="text-foreground font-medium">Next.js</span>,{" "}
          <span className="text-foreground font-medium">React Native</span>, and
          modern tools. Passionate about turning complex problems into elegant
          digital solutions.
        </motion.p>

      
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <Button
            size="lg"
            className="px-8 h-12 text-base gap-2"
            render={<a href="#projects" />}
            nativeButton={false}
          >
            View My Work
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="px-8 h-12 text-base gap-2"
            render={<a href="#contact" />}
            nativeButton={false}
          >
            Let&apos;s Talk
          </Button>
        </motion.div>


       
      </div>
    </section>
  );
}