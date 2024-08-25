import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import banner1 from "../../images/banner.png";
import banner2 from "../../images/banner2.jpg";
import ad3 from "../../images/ad3.jpeg";
import ad4 from "../../images/ad4.jpeg";
import ad5 from "../../images/ad5.jpeg";
import ad6 from "../../images/ad6.jpeg";
import ad7 from "../../images/ad7.jpeg";

const CarouselBanner = ({ image, title, text, link }) => {
  return (
    <div
      className="relative w-full h-64 sm:h-32 md:h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Adjust as necessary
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-16 text-center flex flex-col items-center">
          {/* Conditionally render this div based on title */}
          {title && text && (
            <div className="bg-black bg-opacity-60 p-4 rounded w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl capitalize text-white font-medium mb-4">
                {title}
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white mb-8">
                {text}
              </p>
              {link && (
                <Link
                  to={link}
                  className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-secondary transition"
                >
                  Get Appointment
                </Link>
              )}
            </div>
          )}
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
      text: "Relax, this is going to be so easy. The smart way to find a dentist. Get matched with a great dentist today. Seriously, it’s time.",
      link: "/appointment",
    },
    {
      image: banner2,
      title: "",
      text: "",
      link: "",
    },
    {
      image: banner2,
      title: "",
      text: " ",
      link: "",
    },
    {
      image: ad3,
      title: "Care That Makes You Smile",
      text: "Your smile is your best accessory. Let us help you keep it beautiful and healthy for years to come.",
      link: "/appointment",
    },
    {
      image: ad4,
      title: "Smile Freely",
      text: "Your smile is your best accessory. Let us help you keep it beautiful and healthy for years to come.",
      link: "/appointment",
    },
    {
      image: ad5,
      title: "Healthy Smile, Happy Life",
      text: "Discover the joy of a healthy smile. Our team is dedicated to helping you achieve optimal oral health.",
      link: "/appointment",
    },
    {
      image: ad6,
      title: "Care That Makes You Smile",
      text: "Your smile is your best accessory. Let us help you keep it beautiful and healthy for years to come.",
      link: "/appointment",
    },
    {
      image: ad5,
      title: "Your Smile Matters",
      text: "Your smile is your best accessory. Let us help you keep it beautiful and healthy for years to come.",
      link: "/appointment",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Hide arrows if not needed
  };

  return (
    <Slider {...settings} className="w-full h-full overflow-hidden">
      {banners.map((banner, index) => (
        <CarouselBanner key={index} {...banner} />
      ))}
    </Slider>
  );
};

export default Banner;
