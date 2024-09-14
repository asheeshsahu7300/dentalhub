import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom"; // Import useNavigate
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import { useAuth } from "../../components/Context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setError("");
      setLoading(true);

      await login(data.email, data.password);

      history.push("/admin");
      console.log("/admin");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumbs title="Admin Login" />
      <div className="container">
        <div
          className="flex gap-8 items-center justify-center"
          style={{ minHeight: "65vh" }}
        >
          <div
            className="inline-block border-2 border-gray-200 p-8 rounded-md shadow-lg"
            style={{ width: "450px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-Poppins text-center">
                Log In Your Account
              </h2>
              {error && <span className="text-red-600 py-2">{error}</span>}

              <div className="mt-4 mb-4">
                <label htmlFor="email">Email</label>
                <input
                  className="border border-gray-400 w-full px-4 py-2"
                  placeholder="Enter Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="mt-4 mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 w-full px-4 py-2"
                  {...register("password", { required: true })}
                />
                <Link
                  to="/forget-password"
                  className="float-right text-secondary"
                >
                  Forget password?
                </Link>
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <button
                className="w-full bg-primary text-white mt-4 mb-4 py-2 px-4 rounded-md"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              <h1 className="py-4">
                Don't Have an Account?
                <Link className="text-primary px-2" to="/adminregister">
                  Register now
                </Link>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
