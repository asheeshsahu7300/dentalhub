import React from "react";
import bgImg2 from "./../../images/bg_3.jpg";

const ClinicalFacts = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center w-full h-80"
      style={{
        backgroundImage: `url(${bgImg2})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container py-8 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-2 font-Poppins font-semibold">
          Our <span className="text-primary">Clinical</span> Facts
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          If your smile is not becoming to you, then you should be coming to
          me!
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Poppins font-extrabold"></h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white italic font-Roboto font-semibold">
              Experience in Dental Services
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Poppins font-extrabold"></h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white italic font-Roboto font-semibold">
              Happy Customers
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Poppins font-extrabold"></h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white italic font-Roboto font-semibold">
              Satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalFacts;
