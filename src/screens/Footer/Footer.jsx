import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Send, ToyBrick as Tooth, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Get Appointment", path: "/appointment" },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/people/Dr-Archanas-Dental-Hub/61556509773846/?mibextid=LQQJ4d" },
    { icon: Instagram, url: "https://www.instagram.com/" },
    { icon: Twitter, url: "https://twitter.com/" },
    { icon: Linkedin, url: "https://www.linkedin.com/" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-primary/20 text-primary-light p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Tooth size={28} />
              </div>
              <span className="text-2xl font-outfit font-bold text-white tracking-tight">
                Dental<span className="text-primary-light">Hub</span>
              </span>
            </Link>
            <p className="text-gray-400 font-inter leading-relaxed">
              Experience the best dental care with Dr. Archana's Dental Hub. We are committed to providing personalized, high-quality treatments for a healthier, more beautiful smile.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-400"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-outfit font-bold text-white mb-8 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 font-inter">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-primary-light transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-outfit font-bold text-white mb-8 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-6 font-inter text-sm">
              <li className="flex gap-4">
                <MapPin className="text-primary-light shrink-0" size={20} />
                <span>Shop No 2. E2 Building. SAI SANKUL NX, next to Prabhat Kitchen, Khadakpada, Kalyan-421301</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-primary-light shrink-0" size={20} />
                <a href="tel:+919833505077" className="hover:text-primary-light">+91 9833505077</a>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-outfit font-bold text-white mb-8 uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm mb-6 text-gray-400">Subscribe for dental health tips and latest clinic updates.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800 border border-gray-700 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-primary transition-colors text-white"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-inter">
          <p>© {currentYear} Dr. Archana's Dental Hub. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
