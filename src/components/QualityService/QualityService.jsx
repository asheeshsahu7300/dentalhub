import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const QualityService = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mx-auto px-6 py-6 sm:px-6 lg:px-8 md:-mt-12 sm:-mt-24 md:py-16 lg:flex lg:justify-between lg:overflow-hidden">
      {/* Slider */}
      <div className="w-full lg:w-2/3 mb-8 lg:mb-0 relative sm:-mx-4">
        <Slider {...settings}>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img
              className="w-full h-full object-cover"
              src={clinic1}
              alt="Clinic 1"
            />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img
              className="w-full h-full object-cover"
              src={clinic2}
              alt="Clinic 2"
            />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img
              className="w-full h-full object-cover"
              src={clinic3}
              alt="Clinic 3"
            />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img
              className="w-full h-full object-cover"
              src={clinic4}
              alt="Clinic 4"
            />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img
              className="w-full h-full object-cover"
              src={clinic5}
              alt="Clinic 5"
            />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img className="w-full h-full object-cover" src={ad1} alt="Ad 1" />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img className="w-full h-full object-cover" src={ad2} alt="Ad 2" />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img className="w-full h-full object-cover" src={ad3} alt="Ad 3" />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img className="w-full h-full object-cover" src={ad4} alt="Ad 4" />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img className="w-full h-full object-cover" src={ad5} alt="Ad 5" />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img className="w-full h-full object-cover" src={ad6} alt="Ad 6" />
          </div>
          <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px]">
            <img className="w-full h-full object-cover" src={ad7} alt="Ad 7" />
          </div>
        </Slider>
      </div>

      {/* Content */}
      <div className="lg:w-1/3 lg:ml-8 relative overflow-visible">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-Poppins font-semibold text-secondary mb-4">
          Quality Service in{" "}
          <span className="text-primary">Dental Practice</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base py-4">
          To have your lawn look its best, trust Landscaping & Gardening, Inc.
          to get the job done right. We take a great deal of pride in the
          quality of our work. We understand what complete customer satisfaction
          means.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <ul className="text-xs sm:text-sm md:text-base">
            <li className="flex items-center py-2">
              <i className="far fa-hand-point-right text-lg sm:text-xl md:text-2xl text-green-500"></i>
              <h1 className="text-xs sm:text-sm md:text-lg px-2 uppercase font-bold text-black hover:opacity-75">
                Trained Staff
              </h1>
            </li>
            <li className="flex items-center py-2">
              <i className="far fa-hand-point-right text-lg sm:text-xl md:text-2xl text-green-500"></i>
              <h1 className="text-xs sm:text-sm md:text-lg px-2 uppercase font-bold text-black hover:opacity-75">
                We provide quality Treatment
              </h1>
            </li>
            <li className="flex items-center py-2">
              <i className="far fa-hand-point-right text-lg sm:text-xl md:text-2xl text-green-500"></i>
              <h1 className="text-xs sm:text-sm md:text-lg px-2 uppercase font-bold text-black hover:opacity-75">
                Best Price
              </h1>
            </li>
          </ul>
          <div className="mt-8 lg:mt-0 w-full flex justify-center">
            <img
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              src={teeth1}
              alt="Teeth"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityService;
