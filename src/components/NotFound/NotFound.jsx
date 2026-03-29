import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="bg-white min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[120px] md:text-[180px] font-outfit font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-light/20 select-none">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-gray-900">
              Oops! Page not found
            </h2>
            <p className="text-gray-500 font-inter text-lg max-w-md mx-auto leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link 
              to="/" 
              className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Home size={20} />
              Return Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
