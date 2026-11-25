// src/components/certificates-section.tsx
"use client";

import { motion } from "motion/react";
import { IconCertificate, IconExternalLink } from "@tabler/icons-react";

const certificates = [
  {
    title: "Work Experience Certificate",
    issuer: "Ideapeel — Frontend Developer",
    image: "/certificates/cert-1.jpg",
    period: "Aug 2024 – Mar 2025",
  },
  {
    title: "Certificate of Completion",
    issuer: "Sysonex — Technology Intern",
    image: "/certificates/cert-2.jpg",
    period: "May 2024 – Nov 2024",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <p className="text-muted-foreground">
            Achievements and certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-muted/80 to-muted/40 p-4 sm:p-6 flex items-center justify-center">
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg shadow-black/20 ring-1 ring-white/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 text-sm font-medium backdrop-blur-sm">
                    <IconExternalLink size={16} />
                    View Full
                  </span>
                </div>
              </div>

              <div className="p-5 border-t border-border/50">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <IconCertificate size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      {cert.period}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
