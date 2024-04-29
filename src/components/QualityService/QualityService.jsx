import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clinic1 from "../../images/clinic1.jpeg"
import clinic2 from "../../images/clinic2.jpeg"
import clinic3 from "../../images/clinic3.jpeg"
import clinic4 from "../../images/clinic4.jpeg"
import clinic5 from "../../images/clinic5.jpeg"
import teeth1 from "../../images/teeth1.jpg";
import ad1 from "../../images/ad1.jpeg"
import ad2 from "../../images/ad2.jpeg"
import ad3 from "../../images/ad3.jpeg"
import ad4 from "../../images/ad4.jpeg"
import ad5 from "../../images/ad5.jpeg"
import ad6 from "../../images/ad6.jpeg"
import ad7 from "../../images/ad7.jpeg"

const QualityService = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <div className="container lg:flex py-16">
        <div className="h-full lg:w-2/3 w-full">
          <Slider {...settings}>
          <div>
              <img className="w-full" src={clinic1} alt="" />
            </div>
            <div>
              <img className="w-full" src={clinic2} alt="" />
            </div>
            <div>
              <img className="w-full" src={clinic3} alt="" />
            </div>
            <div>
              <img className="w-full" src={clinic4} alt="" />
            </div>
            <div>
              <img className="w-full" src={clinic5} alt="" />
            </div>
            <div>
              <img className="w-full" src={ad1} alt="" />
            </div>
            <div>
              <img className="w-full" src={ad2} alt="" />
            </div>           
             <div>
              <img className="w-full" src={ad3} alt="" />
            </div>
            <div>
              <img className="w-full" src={ad4} alt="" />
            </div>
            <div>
              <img className="w-full" src={ad5} alt="" />
            </div>
            <div>
              <img className="w-full" src={ad6} alt="" />
            </div>
            <div>
              <img className="w-full" src={ad7} alt="" />
            </div>
           
          </Slider>
        </div>
        <div className="lg:ml-8">
          <h1 className="text-3xl font-Poppins font-semibold text-secondary">
            Quality Service in{" "}
            <span className="text-primary">Dental Practice</span>
          </h1>
          <p className="py-8">
            To have your lawn look its best, trust Landscaping & Gardening, Inc.
            to get the job done right. We take a great deal of pride in the
            quality of our work. We understand what complete customer
            satisfaction means.
          </p>
          <div className="lg:flex justify-between">
            <ul>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                  Trained Staff
                </h1>
              </li>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                  We provide quality Treatment
                </h1>
              </li>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                  Best Price
                </h1>
              </li>
            </ul>
            <div>
              <img src={teeth1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityService;
