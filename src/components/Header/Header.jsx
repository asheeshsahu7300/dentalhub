import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./../Context/AuthContext";
import { Mail, Phone, LogOut, UserCircle } from "lucide-react";

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 text-sm hidden md:block">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 px-4">
        {/* Contact Info */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Mail size={14} className="text-primary-light" />
            <span className="font-outfit tracking-wide text-xs">coming soon</span>
          </span>
          <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Phone size={14} className="text-primary-light" />
            <span className="font-outfit tracking-wide text-xs">+91 9833505077</span>
          </span>
        </div>

        {/* Authentication and Actions */}
        <div className="flex items-center space-x-4">
          {currentUser?.email ? (
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 font-medium text-xs border-r border-gray-600 pr-4">
                <UserCircle size={16} className="text-primary-light" />
                Welcome, {currentUser.displayName || currentUser.email}
              </span>
              <button
                onClick={logout}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-primary transition-colors"
              >
                <LogOut size={14} />
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/admin"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-700/50 hover:bg-gray-700 text-xs font-medium text-gray-200 hover:text-white transition-all border border-gray-600/50"
            >
              <UserCircle size={14} />
              Admin Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
