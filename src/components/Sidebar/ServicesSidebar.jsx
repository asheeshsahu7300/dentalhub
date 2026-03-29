import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ServicesSidebar = ({ service }) => {
  const location = useLocation();
  const slug = service?.title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
  
  const path = `/service/${service?.id}/${slug}`;
  const isActive = location.pathname === path;

  return (
    <li className="mb-2">
      <Link 
        to={path}
        className={`flex items-center justify-between px-6 py-4 rounded-xl border-l-4 transition-all duration-300 group ${
          isActive 
            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
            : "bg-white text-gray-700 border-gray-100 shadow-sm hover:border-primary hover:bg-gray-50"
        }`}
      >
        <span className="font-outfit font-bold text-sm md:text-base">
          {service?.title}
        </span>
        <ChevronRight 
          size={18} 
          className={`transition-transform duration-300 ${
            isActive ? "translate-x-1" : "text-gray-300 group-hover:text-primary group-hover:translate-x-1"
          }`} 
        />
      </Link>
    </li>
  );
};

export default ServicesSidebar;
