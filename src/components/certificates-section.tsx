"use client";

import { motion } from "motion/react";
import { IconCertificate } from "@tabler/icons-react";

const certificates = [
  {
    title: "Certificate Placeholder 1",
    issuer: "Coming Soon",
    image: null, // তুমি পরে লিঙ্ক দিবে
  },
  {
    title: "Certificate Placeholder 2",
    issuer: "Coming Soon",
    image: null,
  },
  {
    title: "Certificate Placeholder 3",
    issuer: "Coming Soon",
    image: null,
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-24 px-6 overflow-hidden bg-muted/20">
    
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
             
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-muted-foreground">
                    <IconCertificate size={48} stroke={1.2} className="opacity-40 group-hover:opacity-70 transition-opacity" />
                    <span className="text-sm">Image Coming Soon</span>
                  </div>
                )}


                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>

              <div className="p-5">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}