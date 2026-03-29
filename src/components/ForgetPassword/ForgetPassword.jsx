import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { KeyRound, Mail, AlertCircle, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useAuth } from "./../Context/AuthContext";

const ForgetPassword = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { forgetPassword } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setError("");
      setMessage("");
      setLoading(true);
      await forgetPassword(data.email);
      setMessage("Success! Please check your email inbox for password reset instructions.");
    } catch (error) {
      setError("Unable to find an account with that email address. Please verify and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Breadcrumbs title="Reset Password" />
      
      <div className="container mx-auto px-6 h-[60vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-3xl shadow-premium border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-secondary p-8 text-center text-white relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <KeyRound size={32} />
              </div>
              <h2 className="text-2xl font-outfit font-bold">Secure Reset</h2>
              <p className="text-white/70 text-sm mt-1">We'll send you a link to recover access</p>
            </div>

            {/* Form Area */}
            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl text-sm flex items-center gap-3"
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    {error}
                  </motion.div>
                )}

                {message && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-emerald-50 border border-emerald-100 text-emerald-600 p-4 rounded-xl text-sm flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="shrink-0" />
                    {message}
                  </motion.div>
                )}

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={14} className="text-primary" /> Registered Email
                  </label>
                  <input
                    placeholder="Enter your email"
                    className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-inter`}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Send Reset Instructions
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                <Link 
                  to="/adminlogin" 
                  className="text-gray-500 hover:text-primary font-bold text-sm inline-flex items-center gap-2 group transition-colors"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Sign In
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgetPassword;
