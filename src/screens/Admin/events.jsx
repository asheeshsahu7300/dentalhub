import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, ChevronRight, LayoutDashboard } from "lucide-react";

const AdminDashboard = () => {
  const adminCards = [
    { 
      title: "Customer Messages", 
      desc: "View and manage inquiries from the contact form.",
      path: "/messages", 
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-600"
    },
    { 
      title: "Appointments", 
      desc: "Manage patient booking requests and scheduling.",
      path: "#", 
      icon: Calendar,
      color: "from-emerald-500 to-teal-600",
      comingSoon: true
    },
  ];

  return (
    <div className="bg-gray-50 min-h-[70vh] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <LayoutDashboard size={28} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900">
                Admin <span className="text-primary">Console</span>
              </h1>
              <p className="text-gray-500 font-inter text-sm md:text-base">Management and data overview</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {adminCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-premium border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                  <card.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-outfit font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-500 font-inter text-sm leading-relaxed mb-8">{card.desc}</p>
                
                {card.comingSoon ? (
                  <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-400 font-bold text-xs uppercase tracking-widest">
                    Coming Soon
                  </span>
                ) : (
                  <Link 
                    to={card.path}
                    className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all"
                  >
                    Manage Data <ChevronRight size={16} />
                  </Link>
                )}

                {/* Decorative glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
