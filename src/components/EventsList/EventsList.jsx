import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const SpecialtyCard = ({ title, path, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-premium hover:shadow-2xl transition-all duration-300 border border-gray-100 flex items-center justify-between mb-6 overflow-hidden"
  >
    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary group-hover:w-3 transition-all duration-300"></div>
    
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Sparkles size={20} />
      </div>
      <h3 className="text-xl md:text-2xl font-outfit font-bold text-gray-800 group-hover:text-primary transition-colors">
        {title}
      </h3>
    </div>

    <Link 
      to={path} 
      className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform duration-300"
    >
      <span className="hidden md:inline">Explore Details</span>
      <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
        <ArrowRight size={18} />
      </div>
    </Link>
  </motion.div>
);

const EventsList = () => {
  const specialties = [
    { title: "Root Canal Procedure", path: "/service/1/root-canal-procerdure" },
    { title: "Dental Implant", path: "/service/2/dental-implant" },
    { title: "Dental Bridge", path: "/service/3/dental-bridge" },
    { title: "Urgent Dental Care", path: "/service/4/dental-care" },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 text-gray-900">
              Our Core <span className="text-primary">Specialities</span>
            </h2>
            <p className="text-gray-600 font-inter text-lg">
              We focus on specialized treatments to provide the most effective and comfortable dental experience for every patient.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {specialties.map((item, index) => (
            <SpecialtyCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
