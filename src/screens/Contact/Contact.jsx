import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Facebook, Instagram, Send, User, MessageSquare } from "lucide-react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://dentalhubbackend.onrender.com/contact/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("Message sent successfully!", {
        theme: "colored"
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Clinic",
      details: "Shop No 2. E2 Building. SAI SANKUL NX, next to Prabhat Kitchen, Khadakpada, Kalyan-421301",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "coming soon",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9833505077",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/people/Dr-Archanas-Dental-Hub/61556509773846/?mibextid=LQQJ4d",
      label: "Facebook"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/dentalhubkalyan/?igsh=MTc0NmF0d2l4bDBuaw%3D%3D&utm_source=qr",
      label: "Instagram"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Breadcrumbs title="Contact Us" />
      <ToastContainer />

      <div className="container mx-auto px-6 mt-16 md:mt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-premium border border-gray-100"
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-4">
                Drop us a <span className="text-primary">Message</span>
              </h2>
              <p className="text-gray-600 font-inter">
                Have a question or just want to say hi? Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 font-inter flex items-center gap-2">
                  <User size={16} className="text-primary" /> Full Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@email.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-inter"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 font-inter flex items-center gap-2">
                  <MessageSquare size={16} className="text-primary" /> Your Message
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-inter resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-6 font-Poppins">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-gray-600 font-inter text-lg leading-relaxed">
                We're always open to discuss your dental health and provide the best solutions for your smile.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-premium border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <item.icon size={28} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-outfit font-bold text-gray-800 tracking-wide uppercase text-xs opacity-50">{item.title}</h4>
                    <p className="text-gray-600 font-inter leading-relaxed max-w-xs">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 font-inter">Follow Our Community</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-premium border border-gray-100 hover:border-primary hover:text-primary transition-all duration-300 group"
                  >
                    <social.icon size={20} className="text-gray-400 group-hover:text-primary" />
                    <span className="font-outfit font-bold text-gray-700 group-hover:text-primary">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
