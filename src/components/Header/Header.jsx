import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./../Context/AuthContext";

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-1 px-2">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center text-primary text-xs space-x-2">
          <span className="flex items-center ">
            <i className="far fa-envelope text-primary text-sm mr-1"></i> coming soon
          </span>
          <span className="flex items-center">
          <i className="fas fa-phone text-primary text-sm mr-1"></i> +91 9833505077
          </span>
        </div>

        {/* Authentication and Actions */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 mt-1 sm:mt-0 text-xs">
          {currentUser?.email ? (
            <>
              <span className="font-bold border-b sm:border-b-0 sm:border-r-2 border-black pb-1 sm:pb-0 pr-2">
                Welcome, {currentUser.displayName || currentUser.email}
              </span>
              <button
                onClick={logout}
                className="px-2 py-1 font-bold text-secondary hover:text-gray-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/admin"
              className="px-2 py-1 font-bold text-secondary hover:text-gray-600"
            >
              Admin Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
