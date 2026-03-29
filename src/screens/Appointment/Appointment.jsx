import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Calendar, User, Mail, MessageSquare, ChevronDown, PhoneCall } from "lucide-react";

import CONST_DATA_SERVICES from "../../Constants/Services";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Appointment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Coming soon ,Please call us at +91 9833505077 for booking .", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      color: "#000",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumbs title="Book Appointment" />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Side: Contact Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-6">
                Ready for a <span className="text-primary">Perfect Smile?</span>
              </h2>
              <p className="text-gray-600 font-inter text-lg leading-relaxed">
                Book your visit today and experience world-class dental care. Our experts are here to help you achieve the smile you've always wanted.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-premium border border-gray-100 group hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-inter">Call for Urgent Booking</p>
                  <p className="text-lg font-outfit font-bold text-gray-800">+91 9833505077</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary to-secondary rounded-2xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h4 className="text-xl font-bold mb-4 relative z-10 font-outfit">Quick Support</h4>
                <p className="text-white/80 text-sm font-inter relative z-10 mb-4">
                  Response time: Less than 2 hours during working days.
                </p>
                <div className="w-full h-1 bg-white/20 rounded-full relative z-10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-white rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Appointment Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5 bg-white rounded-3xl p-8 md:p-12 shadow-premium border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 font-inter flex items-center gap-2">
                    <User size={16} className="text-primary" /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-inter"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 font-inter flex items-center gap-2">
                    <Mail size={16} className="text-primary" /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-inter"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 font-inter flex items-center gap-2">
                    <ChevronDown size={16} className="text-primary" /> Preferred Service
                  </label>
                  <select
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-inter appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {CONST_DATA_SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 font-inter flex items-center gap-2">
                    <Calendar size={16} className="text-primary" /> Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-inter cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 font-inter flex items-center gap-2">
                  <MessageSquare size={16} className="text-primary" /> Special Requests or Messages
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your concern..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-inter resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Confirm Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Appointment;
