import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgImg2 from "./../../assets/images/bg_3.jpg";
import { Award, Users, Smile, ShieldCheck } from "lucide-react";

const FactItem = ({ icon: Icon, value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
    >
      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="text-primary-light" size={32} />
      </div>
      <h3 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-2">
        {value}
      </h3>
      <p className="text-gray-300 font-inter font-medium text-sm md:text-base uppercase tracking-widest text-center">
        {label}
      </p>
    </motion.div>
  );
};

const ClinicalFacts = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const facts = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Smile, value: "100%", label: "Satisfaction" },
    { icon: ShieldCheck, value: "24/7", label: "Care Support" }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-gray-900"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, backgroundImage: `url(${bgImg2})` }}
        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-transparent to-gray-900/80"></div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-6"
          >
            Our <span className="text-primary-light">Clinical</span> Facts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-inter italic tracking-wide"
          >
            "If your smile is not becoming to you, then you should be coming to us!"
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {facts.map((fact, index) => (
            <FactItem key={index} {...fact} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalFacts;
