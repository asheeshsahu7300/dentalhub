import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// Provider component
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useHistory(); // Replacing useHistory with useNavigate for React Router v6

  // User login using email and password
  const login = async (email, password) => {
    try {
      const response = await fetch(
        "https://dentalhubbackend.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setCurrentUser(result.user); // Save user info
        localStorage.setItem("token", result.token); // Save token in local storage
        return result;
      } else {
        throw new Error(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  };

  // User registration (sign up) using email and password
  const register = async (email, password) => {
    try {
      const response = await fetch(
        "https://dentalhubbackend.onrender.com/register",
        {
          // Corrected register endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setCurrentUser(result.user); // Save user info
        localStorage.setItem("token", result.token); // Save token in local storage
        return result;
      } else {
        throw new Error(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      throw error;
    }
  };

  // User logout
  const logout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    setCurrentUser(null); // Clear user state
    navigate.push("/"); // Redirect to login page
  };

  // Check if the user is logged in on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Verify token with backend or check user session
      fetch("https://dentalhubbackend.onrender.com/verifyToken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.user) {
            setCurrentUser(data.user);
          }
        })
        .catch((err) => console.error("Token Verification Error:", err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  // Context values
  const value = {
    currentUser,
    login,
    register, // Added register method
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
