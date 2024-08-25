import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-wrap items-center justify-between px-4 py-3 mx-auto bg-white shadow-md">
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link
          to="/"
          className="text-sm font-bold leading-relaxed inline-block py-1 whitespace-nowrap uppercase text-secondary"
        >
          <i className="fas fa-tooth text-3xl text-primary"></i>
          <span className="text-xl font-Poppins">
            Dr.Archana's Dental <span className="text-primary">Hub</span>
          </span>
        </Link>
        <button
          className="text-black cursor-pointer text-lg leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`lg:flex lg:items-center lg:justify-between w-full ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className={`flex flex-col lg:flex-row list-none lg:ml-auto ${menuOpen ? "space-y-2 lg:space-y-0" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className="block px-2 py-1 text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="block px-2 py-1 text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="block px-2 py-1 text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="block px-2 py-1 text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            >
              Contact Us
            </Link>
          </li>
          <li className="bg-primary text-white font-normal py-1 px-2 rounded-md hover:bg-primary-dark transition">
            <Link to="/appointment">Get Appointment</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
