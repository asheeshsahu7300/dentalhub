import React from "react";

const Feature = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-8 md:py-12 mt-4 ">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start text-white">
            <i className="fas fa-teeth-open text-3xl sm:text-4xl md:text-5xl py-4 px-2"></i>
            <div className="ml-3">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl pb-1 uppercase font-bold leading-snug hover:opacity-75">
                Dental Implants
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                Dental implants are the closest you can get to healthy, beautiful and natural teeth.
              </p>
            </div>
          </div>
          <div className="flex items-start text-white">
            <i className="fas fa-tooth text-3xl sm:text-4xl md:text-5xl py-4 px-2"></i>
            <div className="ml-3">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl pb-1 uppercase font-bold leading-snug hover:opacity-75">
                Parodontosis Care
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                Timely diagnosed and treated parodontosis disease can save you from tooth loss.
              </p>
            </div>
          </div>
          <div className="flex items-start text-white">
            <i className="fas fa-teeth text-3xl sm:text-4xl md:text-5xl py-4 px-2"></i>
            <div className="ml-3">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl pb-1 uppercase font-bold leading-snug hover:opacity-75">
                Teeth Whitening
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                Teeth Whitening improves how your teeth look by removing stains and discoloration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
