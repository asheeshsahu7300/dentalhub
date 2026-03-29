import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServicesItem = ({ service, index }) => {
  const { id, title, description, image } = service;
  
  // Format title for URL slug
  const slug = title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <Link 
            to={`/service/${id}/${slug}`}
            className="text-white flex items-center gap-2 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            Explore Procedure <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-outfit font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors line-clamp-1">
          <Link to={`/service/${id}/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 font-inter leading-relaxed mb-8 flex-grow line-clamp-3">
          {description}
        </p>
        
        <div className="pt-6 border-t border-gray-50 mt-auto">
          <Link
            to={`/service/${id}/${slug}`}
            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm hover:text-secondary transition-colors"
          >
            Read More
            <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all"></div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesItem;
