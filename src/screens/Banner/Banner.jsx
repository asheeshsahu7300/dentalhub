import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

import banner1 from "../../assets/images/banner2.jpg";
import ad3 from "../../assets/images/bg_3.jpg";
import ad5 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg"

const CarouselBanner = ({ image, title, text, link }) => {
  return (
    <div
      className="relative w-full h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})`, }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-center">

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">

          {/* Glow Effect */}
          <div className="absolute -z-10 w-72 h-72 bg-accent/20 blur-sm rounded-full top-10 left-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/20 shadow-premium rounded-2xl p-8 md:p-12 max-w-2xl"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg"
            >
              {text}
            </motion.p>

            {/* Button */}
            {link && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to={link}
                  className="group inline-flex items-center gap-2 bg-primary hover:bg-accent-light text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Calendar size={20} />
                  <span>Get Appointment</span>
                  <ArrowRight
                    size={20}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  const banners = [
    {
      image: banner1,
      title: "Eat wisely, smile nicely",
      text: "Relax, this is going to be so easy. The smart way to find a dentist. Get matched with a great dentist today.",
      link: "/appointment",
    },
    {
      image: ad3,
      title: "Care That Makes You Smile",
      text: "Your smile is your best accessory. Let us help you keep it beautiful and healthy.",
      link: "/appointment",
    },
    {
      image: ad5,
      title: "Healthy Smile, Happy Life",
      text: "Discover the joy of a healthy smile with our expert dental care services.",
      link: "/appointment",
    },
    {
      image: banner4,
      title: "Smile with Confidence",
      text: "Experience the confidence that comes with a radiant smile. Our expert dental care services are designed to bring out your best smile.",
      link: "/appointment",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="w-full relative">
      <Slider
        {...settings}
        className="w-full h-full overflow-hidden 
        [&_.slick-dots]:bottom-8 
        [&_.slick-dots_li_button:before]:text-white 
        [&_.slick-dots_li_button:before]:text-sm"
      >
        {banners.map((banner, index) => (
          <CarouselBanner key={index} {...banner} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;