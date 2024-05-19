import React from "react";
import { Link } from "react-router-dom";
import eventBg from "../../images/event-bg.png";
const EventsList = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: `url(${eventBg})`,
      }}
    >
      <div className="container py-16">
        <div className="py-8 text-center">
          <h1 className="text-center text-4xl font-bold font-Roboto text-secondary">
            Our Admin Data
          </h1>
          <p className="text-gray-400 py-2">
            
          </p>
        </div>

        <div className="shadow-2xl mb-8 border-l-2 border-opacity-100 rounded-lg border-primary px-8 py-8 bg-white transform transition duration-200 hover:scale-105">
          
          <div className="flex  items-center justify-between">
            <h1 className="text-lg font-Poppins font-bold py-2 hover:text-primary">
              <Link to="#">Messages from Customers </Link>
            </h1>
            <h1 className="text-right hover:text-primary">
              <Link to="/messages" className="flex">
                <span className="px-2">View More</span>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            </h1>
          </div>
        </div>

        <div className="shadow-2xl mb-8 border-l-2 border-opacity-100 rounded-lg border-primary px-8 py-8 bg-white transform transition duration-200 hover:scale-105">
          
          <div className="flex  items-center justify-between">
            <h1 className="text-lg font-Poppins font-bold py-2 hover:text-primary">
              <Link to="#">Appointment From Customers</Link>
            </h1>
            <h1 className="text-right hover:text-primary">
              <Link to="#" className="flex">
                <span className="px-2">Coming Soon</span>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            </h1>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default EventsList;
