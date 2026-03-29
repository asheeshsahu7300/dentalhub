import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = ({ title }) => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 text-sm md:text-base font-inter"
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <Home size={18} className="group-hover:scale-110 transition-transform" />
            <span>Home</span>
          </Link>
          
          <ChevronRight size={16} className="text-gray-600" />
          
          <span className="text-primary-light font-bold tracking-wide uppercase text-xs border-b border-primary/30 pb-1">
            {title}
          </span>
        </motion.nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
