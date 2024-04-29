
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import banner1 from "../../images/banner.png";
import banner2 from "../../images/banner2.jpg"
import ad3 from "../../images/ad3.jpeg"
import ad4 from "../../images/ad4.jpeg"
import ad5 from "../../images/ad5.jpeg"
import ad6 from "../../images/ad6.jpeg"
import ad7 from "../../images/ad7.jpeg"

const CarouselBanner = ({ image, title, text, link }) => {
  return (
    <div className="bg-cover bg-no-repeat bg-center py-36 relative"style={{
      backgroundImage: `url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'
    }} >
      
      <div className="container">
        <h1 className="text-6xl capitalize text-gray-800 font-medium mb-4">
          {title}
        </h1>
        <p className="w-50 mb-8" style={{ maxWidth: "50ch" }}>
          {text}
        </p>
        <div className="mt-12">
          <Link
            to={link}
            
          >
            
          </Link>
          <p style={{fontSize:"20px",fontWeight:"bold"}}> For Appoinment Call us at +91 983305077</p>
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
      image: "https://scontent.fdel25-3.fna.fbcdn.net/v/t39.30808-6/428507898_122101888844216992_7637761145673292781_n.png?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=j-cmDGFbaaoQ7kNvgEnJPkW&_nc_ht=scontent.fdel25-3.fna&oh=00_AfAqbzzttDCBYnXI212ZDbE-OMF1NfyZ3UQG0n2-4mEgKQ&oe=6635205D",
      title: " ",
      text: " ",
      link:  "",
    },
    {
      image: banner2,
      title: " ",
      text: " ",
      link:  "",
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
      image: ad7,
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
  };

  return (
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <CarouselBanner key={index} {...banner} />
      ))}
    </Slider>
  );
};

export default Banner;