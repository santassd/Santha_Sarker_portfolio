"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

function buildBustTargets(w: number, h: number, count: number) {
  const off = document.createElement("canvas");
  off.width = 280;
  off.height = 360;
  const ctx = off.getContext("2d");
  if (!ctx) return [] as { x: number; y: number }[];

  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.ellipse(140, 118, 62, 74, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(108, 170);
  ctx.quadraticCurveTo(140, 210, 172, 170);
  ctx.lineTo(168, 210);
  ctx.lineTo(112, 210);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(78, 250);
  ctx.quadraticCurveTo(140, 210, 202, 250);
  ctx.lineTo(230, 360);
  ctx.lineTo(50, 360);
  ctx.closePath();
  ctx.fill();
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.moveTo(140, 248);
  ctx.lineTo(108, 360);
  ctx.lineTo(140, 330);
  ctx.lineTo(172, 360);
  ctx.closePath();
  ctx.fill();

  const data = ctx.getImageData(0, 0, off.width, off.height).data;
  const pts: { x: number; y: number }[] = [];
  for (let y = 0; y < off.height; y += 3) {
    for (let x = 0; x < off.width; x += 3) {
      if (data[(y * off.width + x) * 4 + 3] > 140) pts.push({ x, y });
    }
  }

  const cx = w * 0.5;
  const cy = h * 0.42;
  const scale = Math.min(w, h) * 0.00115;
  const picked: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const p = pts[Math.floor(Math.random() * pts.length)];
    picked.push({
      x: cx + (p.x - 140) * scale * 2.15,
      y: cy + (p.y - 180) * scale * 2.15,
    });
  }
  return picked;
}

export function ParticleStage({ gather }: { gather: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const gatherRef = useRef(gather);
  gatherRef.current = gather;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let parts: Particle[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = w < 700 ? 700 : 1400;
      parts = buildBustTargets(w, h, count).map((t) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        tx: t.x,
        ty: t.y,
        vx: 0,
        vy: 0,
        r: Math.random() < 0.08 ? 1.6 : 0.7 + Math.random() * 0.7,
        a: 0.35 + Math.random() * 0.65,
      }));
      if (reduced) {
        for (const p of parts) {
          p.x = p.tx;
          p.y = p.ty;
        }
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    let t = 0;
    const tick = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.008;
      const pulling = gatherRef.current && !reduced;
      for (const p of parts) {
        if (pulling) {
          p.vx += (p.tx - p.x) * 0.012;
          p.vy += (p.ty - p.y) * 0.012;
          p.vx *= 0.86;
          p.vy *= 0.86;
          p.x += p.vx + Math.sin(t * 2 + p.tx) * 0.12;
          p.y += p.vy + Math.cos(t * 1.6 + p.ty) * 0.12;
        } else if (!reduced) {
          p.x += Math.sin(t + p.a * 8) * 0.18;
          p.y += Math.cos(t * 0.8 + p.a * 6) * 0.12;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(226, 232, 240, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}