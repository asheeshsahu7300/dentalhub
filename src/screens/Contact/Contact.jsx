import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submission status to true
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://dentalhubbackend.onrender.com/contact/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Include the JWT token in the Authorization header
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      // Display success toast
      toast.success("Message sent successfully!");

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      // Display error toast
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false); // Reset submission status after request completes
    }
  };

  return (
    <div>
      <Breadcrumbs title="Contact us" />
      <ToastContainer />
      <div className="container py-16 ">
        <div className="pb-8">
          <h1 className="text-4xl font-bold font-Roboto text-secondary">
            Drop a <span className="text-primary">Message</span>{" "}
          </h1>
          <p className="text-gray-400 py-2">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-2 justify-between">
            <div className="">
              <div className="">
                <fieldset>
                  <label htmlFor="name">First name:</label>
                  <input
                    className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <br />
                  <br />
                  <label htmlFor="email">Email:</label>
                  <input
                    className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <br />
                  <br />
                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                    rows="4"
                    cols="50"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <br />
                  <button
                    type="submit"
                    className="bg-white mt-4 border border-primary text-black py-3 px-6 rounded-md hover:bg-transparent hover:bg-primary hover:text-white transition"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </fieldset>
              </div>
            </div>
            <div className="inset-0 lg:px-16 px-8">
              <h1 className="text-4xl py-2 font-Poppins font-semibold text-secondary">
                Get In <span className="text-primary"> Touch</span>
              </h1>
              <div className="flex py-4">
                <div className="">
                  <i className="fas fa-map-marker-alt text-3xl text-secondary"></i>
                </div>
                <div className="px-8">
                  <p>
                    Shop No 2. E2 Building. SAI SANKUL NX, next to Prabhat
                    Kitchen, Khadakpada, Kalyan-421301
                  </p>
                </div>
              </div>
              <div className="flex py-4">
                <div className="">
                  <i className="far fa-envelope text-3xl text-secondary"></i>
                </div>
                <div className="px-8">
                  <p>coming soon</p>
                </div>
              </div>
              <div className="flex py-4">
                <div className="">
                  <i className="fas fa-phone text-3xl text-secondary"></i>
                </div>
                <div className="px-8 font-bold">
                  <p>+91 9833505077</p>
                </div>
              </div>
              <div className="flex py-4">
                <div className="">
                  <i className="fab fa-facebook-f text-3xl text-secondary"></i>
                </div>
                <div className="px-8">
                  <p>
                    <a href="https://www.facebook.com/people/Dr-Archanas-Dental-Hub/61556509773846/?mibextid=LQQJ4d">
                      Dr-Archanas-Dental-Hub
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex py-4">
                <div className="">
                  <i className="fab fa-instagram text-3xl text-secondary"></i>
                </div>
                <div className="px-8">
                  <p>
                    <a href="https://www.instagram.com/dentalhubkalyan/?igsh=MTc0NmF0d2l4bDBuaw%3D%3D&utm_source=qr">
                      Dr-Archanas-Dental-Hub
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
