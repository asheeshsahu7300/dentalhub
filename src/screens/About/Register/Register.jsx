import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, AlertCircle, ArrowRight, LogIn, ShieldCheck } from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import { useAuth } from "../../../components/Context/AuthContext";

const Register = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const redirect_url = location.state?.from || "/admin";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setError("");
      setLoading(true);
      await signUp(data.email, data.password);
      navigate(redirect_url);
    } catch (error) {
      setError(error.message || "Failed to create account. SuperAdmin privileges may be required.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Breadcrumbs title="Admin Registration" />
      
      <div className="container mx-auto px-6 py-16 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-3xl shadow-premium border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-secondary to-gray-900 p-8 text-center text-white relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <UserPlus size={32} />
              </div>
              <h2 className="text-2xl font-outfit font-bold">Create Admin Account</h2>
              <p className="text-white/60 text-sm mt-1">Join the Dental Hub medical staff</p>
            </div>

            {/* Form */}
            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl text-sm flex items-center gap-3"
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    {error}
                  </motion.div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={14} className="text-primary" /> Email
                  </label>
                  <input
                    placeholder="official@dentalhub.com"
                    className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm`}
                    {...register("email", { required: "Email is required" })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Lock size={14} className="text-primary" /> Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create password"
                    className={`w-full bg-gray-50 border ${errors.password ? 'border-red-300' : 'border-gray-200'} rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm`}
                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 characters" } })}
                  />
                  {errors.password && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.password.message}</span>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={14} className="text-primary" /> Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Repeat password"
                    className={`w-full bg-gray-50 border ${errors.reEnterPassword ? 'border-red-300' : 'border-gray-200'} rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm`}
                    {...register("reEnterPassword", { 
                        required: "Please confirm password",
                        validate: value => value === password || "Passwords do not match"
                    })}
                  />
                  {errors.reEnterPassword && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.reEnterPassword.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group mt-4"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Register Admin
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-500 text-sm">
                  Already have an account?
                  <Link to="/adminlogin" className="text-primary font-bold ml-2 hover:underline inline-flex items-center gap-1 group">
                    Sign In <LogIn size={14} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
