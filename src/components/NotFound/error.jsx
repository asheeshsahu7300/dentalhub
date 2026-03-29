import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldAlert, ShieldX, ArrowLeft, LifeBuoy } from "lucide-react";

const Errors = () => {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center text-red-600 mb-8 rotate-3 shadow-xl">
              <ShieldX size={48} />
            </div>
            <h1 className="text-4xl md:text-6xl font-outfit font-black leading-tight text-gray-900">
              Access <span className="text-red-600">Restricted</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-outfit font-bold text-gray-800">
              Self-Registration is Disabled
            </h2>
            <p className="text-gray-500 font-inter text-lg max-w-md mx-auto leading-relaxed">
              For security reasons, new dental staff accounts must be manually authorized by the SuperAdmin. 
              Please contact the clinic administrator to get your credentials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link 
              to="/adminlogin" 
              className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-black transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Login
            </Link>
            <a 
              href="mailto:it-support@dentalhub.com"
              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              <LifeBuoy size={20} />
              Contact IT Support
            </a>
          </motion.div>
          
          <div className="pt-8 flex items-center justify-center gap-2 text-red-600/50">
            <ShieldAlert size={16} />
            <span className="text-sm font-bold uppercase tracking-widest font-inter">Security Protocol Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errors;
