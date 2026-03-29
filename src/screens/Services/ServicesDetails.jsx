import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, CheckCircle2, Phone } from "lucide-react";
import CONST_DATA_SERVICES from "../../Constants/Services";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ServicesSidebar from "../../components/Sidebar/ServicesSidebar";

const ServicesDetails = () => {
  const [data, setData] = useState(null); 
  const { serviceId } = useParams();

  useEffect(() => {
    if (CONST_DATA_SERVICES) {
      const serviceData = CONST_DATA_SERVICES.find(
        (service) => parseInt(service.id) === parseInt(serviceId)
      );
      setData(serviceData || {}); 
    }
  }, [serviceId]);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    ); 
  }

  return (
    <div className="bg-white">
      <Breadcrumbs title={data?.title || "Service Details"} />
      
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-10"
          >
            {/* Page Header */}
            <div className="space-y-4">
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all"
              >
                <ArrowLeft size={16} /> Back to all services
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-gray-900 leading-tight">
                {data?.title || "Specialized Procedure"}
              </h1>
            </div>

            {/* Featured Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-premium">
              {data?.image ? (
                <img 
                  src={data?.image} 
                  alt={data?.title} 
                  className="w-full h-[400px] md:h-[500px] object-cover" 
                />
              ) : (
                <div className="bg-gray-100 h-96 w-full flex items-center justify-center text-gray-400">
                  <span>Visual Representation Coming Soon</span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="prose prose-lg max-w-none text-gray-600 font-inter space-y-8">
              <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                {data?.description || "No description available currently. Our dental experts prioritize high-quality results for every procedural case."}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-12 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-gray-800 text-lg">Safe & Effective</h4>
                    <p className="text-sm">We utilize state-of-the-art instruments ensuring comfort and precision.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-gray-800 text-lg">Expert Consultation</h4>
                    <p className="text-sm">Pre and post procedure guidance provided for every patient.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl md:text-3xl font-outfit font-bold">Need a consultation?</h3>
                <p className="text-white/80 font-inter">Book an expert session for this specific procedure.</p>
              </div>
              <Link 
                to="/appointment"
                className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-3 relative z-10"
              >
                <Calendar size={20} />
                Get Appointment
              </Link>
            </div>
          </motion.div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-8 mt-12 lg:mt-0">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-outfit font-bold text-gray-900 mb-8 border-b-2 border-primary/20 pb-4">
                Other <span className="text-primary">Medical</span> Procedures
              </h3>
              <ul className="space-y-4">
                {CONST_DATA_SERVICES.length > 0 ? (
                  CONST_DATA_SERVICES.map((service) => (
                    <ServicesSidebar key={service.id} service={service} />
                  ))
                ) : (
                  <p>No services available</p>
                )}
              </ul>
            </div>

            {/* Support Box */}
            <div className="bg-secondary p-8 rounded-3xl text-white shadow-premium">
              <h4 className="text-xl font-bold mb-4 font-outfit">Instant Help?</h4>
              <p className="text-white/70 mb-6 font-inter text-sm">Our medical receptionists are active 24/7 to help you book your procedure sessions.</p>
              <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase opacity-70">Hotline</p>
                  <p className="font-bold">+91 9833505077</p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
