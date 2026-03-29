import React from "react";
import { motion } from "framer-motion";

const Feature = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative z-20 py-12 md:py-16 bg-white shrink-0">
      <div className="container mx-auto px-6 lg:px-12 -mt-24 md:-mt-32 relative">
        <motion.div 
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1 */}
          <motion.div 
            variants={itemVariants}
            className="group bg-white rounded-2xl p-8 shadow-premium hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 w-20 h-20 rounded-[24px] bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0">
              <i className="fas fa-teeth-open text-4xl"></i>
            </div>
            <h2 className="relative z-10 text-2xl font-outfit font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
              Dental Implants
            </h2>
            <p className="relative z-10 text-gray-600 font-inter leading-relaxed">
              Dental implants are the closest you can get to healthy, beautiful, and natural teeth.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={itemVariants}
            className="group bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-premium hover:shadow-secondary/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center text-white"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 w-20 h-20 rounded-[24px] bg-white/20 backdrop-blur-sm text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 -rotate-3 group-hover:rotate-0">
              <i className="fas fa-tooth text-4xl"></i>
            </div>
            <h2 className="relative z-10 text-2xl font-outfit font-bold mb-3">
              Periodontal Care
            </h2>
            <p className="relative z-10 text-white/90 font-inter leading-relaxed">
              Timely diagnosed and treated periodontal disease can save you from severe tooth loss.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={itemVariants}
            className="group bg-white rounded-2xl p-8 shadow-premium hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 w-20 h-20 rounded-[24px] bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0">
              <i className="fas fa-teeth text-4xl"></i>
            </div>
            <h2 className="relative z-10 text-2xl font-outfit font-bold text-gray-800 mb-3 group-hover:text-secondary transition-colors">
              Teeth Whitening
            </h2>
            <p className="relative z-10 text-gray-600 font-inter leading-relaxed">
              Teeth whitening improves how your teeth look by removing stains and discoloration perfectly.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
