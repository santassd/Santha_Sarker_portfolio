"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero3D from "./hero-3d";

gsap.registerPlugin(ScrollTrigger);



function SplitText({
  children,
  className = "",
  delay = 0,
  type = "chars",
}: {
  children: string;
  className?: string;
  delay?: number;
  type?: "chars" | "words";
}) {
  const parts =
    type === "chars"
      ? children.split("").map((char) => (char === " " ? "\u00A0" : char))
      : children.split(" ");

  return (
    <span className={`inline-block ${className}`} aria-label={children}>
      {parts.map((part, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.65,
            delay: delay + i * (type === "chars" ? 0.03 : 0.07),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {part}
          {type === "words" && i < parts.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

function MagneticButton({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`
        relative inline-flex items-center justify-center
        rounded-full px-7 py-3 text-sm font-medium
        transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </motion.a>
  );
}


function UniqueBackground({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const moveX = useTransform(mouseX, [0, 1], [-15, 15]);
  const moveY = useTransform(mouseY, [0, 1], [-10, 10]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      
      {/* Soft center glow - same style as Projects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        style={{ x: moveX, y: moveY }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left soft blob */}
      <motion.div
        className="absolute top-16 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Right soft blob */}
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
  );
}


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#05050a] text-white"
    >
      <UniqueBackground mouseX={mouseX} mouseY={mouseY} />

     
<div className="absolute inset-0 z-0 opacity-30 md:opacity-40">
  <Hero3D />
</div>

      
      <div className="hero-content relative z-10 mx-auto w-full max-w-3xl px-5 text-center sm:px-6">
        
        
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-2 text-sm text-indigo-300/80"
        >
          Hi, I&apos;m
        </motion.p>

      
        <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <SplitText
            delay={0.2}
            className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent"
          >
            Santha Sarker
          </SplitText>
        </h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6 text-[11px] font-medium tracking-[0.22em] text-white/45 uppercase sm:text-xs"
        >
          Front-End Developer
        </motion.p>

   
<motion.h2
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.11,
        delayChildren: 0.15,
      },
    },
  }}
  className="mb-5 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
>
  {"Building digital".split(" ").map((word, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 22, 
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1], // more refined, slower ease-out
          },
        },
      }}
      className="inline-block mr-[0.28em]"
    >
      {word}
    </motion.span>
  ))}

  <br className="sm:hidden" />

  <motion.span
    variants={{
      hidden: { 
        opacity: 0, 
        y: 22, 
        filter: "blur(6px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.08,
        },
      },
    }}
    className="inline-block bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent"
  >
    experiences
  </motion.span>
</motion.h2>


<motion.p
  initial={{ 
    opacity: 0, 
    y: 16,
  }}
  animate={{ 
    opacity: 1, 
    y: 0,
  }}
  transition={{
    duration: 1.05,
    delay: 1.05,           
    ease: [0.16, 1, 0.3, 1],
  }}
  className="mx-auto mb-9 max-w-md text-[15px] leading-relaxed text-white/55 sm:text-base"
>
  I craft clean, performant and visually polished web applications
  with modern tools and thoughtful interactions.
</motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <MagneticButton
            href="#projects"
            className="bg-white text-black hover:bg-white/90"
          >
            View Projects
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="border border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            Let&apos;s Talk
          </MagneticButton>
        </motion.div>
      </div>

    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1.5 text-white/30">
          <span className="text-[10px] tracking-[0.18em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-px bg-gradient-to-b from-white/35 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}