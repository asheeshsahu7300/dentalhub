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
      className="bg-cover bg-no-repeat bg-center relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col justify-center items-start">
        <div className="bg-black bg-opacity-50 p-4 rounded">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl capitalize text-white font-medium mb-4">
            {title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-8">
            {text}
          </p>
          {link && (
            <Link
              to={link}
              className="bg-primary text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded hover:bg-secondary transition"
            >
              Get Appointment
            </Link>
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
      title: " ",
      text: " ",
      link: "",
    },
    {
      image: banner2,
      title: " ",
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
      text: " Your smile is your best accessory. Let us help you keep it beautiful and healthy for years to come.",
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
  };

  return (
    <Slider {...settings} className="h-screen">
      {banners.map((banner, index) => (
        <CarouselBanner key={index} {...banner} />
      ))}
    </Slider>
  );
};

export default Banner;
