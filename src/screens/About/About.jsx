import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import EventsList from "../../components/EventsList/EventsList";
import QualityService from "../../components/QualityService/QualityService";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Smile } from "lucide-react";
import clinic_img from "../../assets/images/clinic1.jpeg";

const About = () => {
  const values = [
    { icon: ShieldCheck, title: "Trusted Care", desc: "15+ years of clinical excellence in dental practice." },
    { icon: Heart, title: "Patient First", desc: "Personalized treatment plans tailored to your needs." },
    { icon: Sparkles, title: "Modern Tech", desc: "Equipped with state-of-the-art dental technology." },
    { icon: Smile, title: "Gentle approach", desc: "Painless procedures designed for nervous patients." },
  ];

  return (
    <div className="bg-white">
      <Breadcrumbs title="About Our Clinic" />
      
      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                <img 
                  src={clinic_img} 
                  alt="Dr. Archana's Dental Hub" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[400px] md:h-[500px]"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block">
                  <div className="text-primary font-outfit font-bold text-4xl mb-1">15+</div>
                  <div className="text-gray-500 text-sm font-inter leading-tight">Years of Clinical Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-primary"></div>
                  Who We Are
                </h4>
                <h2 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 leading-tight">
                  Providing Premium <span className="text-primary">Dental Solutions</span> for Your Family
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 font-inter text-lg leading-relaxed">
                <p>
                  At Dr. Archana's Dental Hub, we believe that a healthy smile is a beautiful smile. Our clinic was founded on the principle of providing compassionate, comprehensive dental care that families can trust.
                </p>
                <p>
                  We prioritize your comfort and well-being, using the latest dental technology and evidence-based practices to deliver results that exceed expectations. Whether it's a routine check-up or complex reconstruction, we are here to support your dental journey.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {values.map((v, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                      <v.icon size={20} />
                    </div>
                    <div>
                      <h5 className="font-outfit font-bold text-gray-800 text-sm group-hover:text-primary transition-colors">{v.title}</h5>
                      <p className="text-xs text-gray-500 font-inter mt-1">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QualityService />
      <EventsList />
    </div>
  );
};

export default About;
