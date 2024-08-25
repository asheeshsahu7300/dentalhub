import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row text-center md:text-left md:justify-between">
        
        {/* Footer Section 1 */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <i className="fas fa-tooth text-3xl md:text-4xl text-primary"></i>
            <span className="text-xl md:text-2xl font-Poppins text-secondary ml-2 md:ml-3">
              Archana's Dental <span className="text-primary">Hub</span>
            </span>
          </div>
          <p className="text-sm md:text-base text-justify px-4 md:px-0">
            To have your lawn look its best, trust Landscaping & Gardening, Inc.
            to get the job done right. We take a great deal of pride in the
            quality of our work. We understand what complete customer satisfaction means.
          </p>
          <div className="text-primary text-xl md:text-2xl flex justify-center md:justify-start mt-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/people/Dr-Archanas-Dental-Hub/61556509773846/?mibextid=LQQJ4d"
              className="ml-2"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/"
              className="ml-2"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/"
              className="ml-2"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/"
              className="ml-2"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Footer Section 2 */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl font-Poppins text-secondary mb-4">
            Quick Links
          </h1>
          <ul className="text-sm md:text-base">
            <li className="py-1 hover:text-primary">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Services</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Footer Section 3 */}
        <div className="w-full md:w-auto">
          <h1 className="text-xl md:text-2xl font-Poppins text-secondary mb-4">
            Subscribe
          </h1>
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              className="border px-3 py-2 border-primary border-r-0 rounded-l-md focus:outline-none text-sm md:text-base"
              placeholder="Your Email Address"
            />
            <button className="bg-primary border border-primary text-white px-4 py-2 rounded-r-md text-sm md:text-base hover:bg-transparent hover:text-primary transition mt-2 md:mt-0">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
