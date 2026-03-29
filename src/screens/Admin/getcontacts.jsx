import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, Calendar, MessageSquare, Trash2, ArrowLeft, RefreshCw, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://dentalhubbackend.onrender.com/contact/getcontacts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }
      const data = await response.json();
      setAppointments(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setError("Unable to load messages at this time. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const deleteAppointment = async (email) => {
    if(!window.confirm("Are you sure you want to delete this message?")) return;
    
    try {
      const response = await fetch(
        `https://dentalhubbackend.onrender.com/contact/delete/${encodeURIComponent(email)}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete appointment");
      }
      setAppointments(
        appointments.filter((appointment) => appointment.email !== email)
      );
    } catch (error) {
      console.error("Error deleting appointment:", error);
      alert("Failed to delete message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Breadcrumbs title="Admin / Messages" />
      
      <div className="container mx-auto px-6 py-12 md:py-20 lg:max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <Link 
              to="/admin" 
              className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all mb-4"
            >
              <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-gray-900 leading-tight">
              Customer <span className="text-primary">Messages</span>
            </h1>
            <p className="text-gray-500 font-inter text-sm md:text-base mt-2">Manage and respond to patient inquiries</p>
          </div>

          <button 
            onClick={fetchAppointments}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-primary transition-all disabled:opacity-50"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            Refresh Data
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 font-inter font-medium tracking-widest uppercase text-xs">Syncing Cloud Database...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-center max-w-md mx-auto">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
              <AlertCircle size={40} />
            </div>
            <h3 className="text-xl font-outfit font-bold text-gray-800">Connection Error</h3>
            <p className="text-gray-500 font-inter mb-6">{error}</p>
            <button 
              onClick={fetchAppointments}
              className="px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30"
            >
              Retry Connection
            </button>
          </div>
        ) : appointments.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 shadow-premium p-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 mx-auto mb-6">
              <MessageSquare size={40} />
            </div>
            <p className="text-gray-500 font-inter text-lg">No messages found in the database.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {appointments.map((appointment, index) => (
                <motion.div
                  layout
                  key={appointment.email + index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-premium border border-gray-100 relative overflow-hidden flex flex-col h-full"
                >
                  <div className="mb-6 space-y-4 flex-grow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <User size={24} />
                      </div>
                      <div>
                        <h4 className="font-outfit font-bold text-gray-800 text-lg">{appointment.name}</h4>
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                          <Mail size={12} />
                          <span className="truncate max-w-[150px]">{appointment.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 italic font-inter text-gray-600 leading-relaxed min-h-[100px]">
                      "{appointment.message}"
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-gray-400 font-inter text-sm">
                      <Calendar size={16} />
                      {appointment.date || "N/A"}
                    </div>
                    <button
                      onClick={() => deleteAppointment(appointment.email)}
                      className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
                      title="Delete message"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
