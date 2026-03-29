import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clinic1 from "../../assets/images/clinic1.jpeg";
import clinic2 from "../../assets/images/clinic2.jpeg";
import clinic3 from "../../assets/images/clinic3.jpeg";
import clinic4 from "../../assets/images/clinic4.jpeg";
import clinic5 from "../../assets/images/clinic5.jpeg";
import teeth1 from "../../assets/images/teeth1.jpg";
import ad1 from "../../assets/images/ad1.jpeg";
import ad2 from "../../assets/images/ad2.jpeg";
import ad3 from "../../assets/images/ad3.jpeg";
import ad4 from "../../assets/images/ad4.jpeg";
import ad5 from "../../assets/images/ad5.jpeg";
import ad6 from "../../assets/images/ad6.jpeg";
import ad7 from "../../assets/images/ad7.jpeg";

const images = [clinic1, clinic2, clinic3, clinic4, clinic5, ad1, ad2, ad3, ad4, ad5, ad6, ad7];

const QualityService = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="bg-gray-50 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Slider Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl z-10 pointer-events-none"></div>
              <Slider {...settings} className="w-full h-[350px] sm:h-[450px] md:h-[550px] [&_.slick-dots]:bottom-4 [&_.slick-dots_li_button:before]:text-white">
                {images.map((img, index) => (
                  <div key={index} className="w-full h-[350px] sm:h-[450px] md:h-[550px] outline-none">
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt={`Clinic view ${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary opacity-10 rounded-full blur-2xl z-0"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-gray-800 mb-6 leading-tight">
              Quality Service in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Dental Practice
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 font-inter text-lg leading-relaxed mb-8">
              To have your smile look its best, trust our specialized Dental Hub to get the job done right. We take a great deal of pride in the quality of our clinical work. We understand what complete patient satisfaction means and strive to deliver it every single time.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
              <ul className="space-y-4 font-inter text-gray-700">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span className="text-lg font-medium">Highly Trained Staff</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span className="text-lg font-medium">Quality Guaranteed</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span className="text-lg font-medium">Affordable Best Prices</span>
                </li>
              </ul>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl scale-150"></div>
                <img
                  className="w-40 sm:w-48 lg:w-56 drop-shadow-xl relative z-10 rounded-2xl"
                  src={teeth1}
                  alt="Beautiful healthy teeth"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default QualityService;
