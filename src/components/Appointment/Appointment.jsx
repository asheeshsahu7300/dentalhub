import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify/dist/react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useServices from "../../useHook/useServices";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Appointment = () => {
  const [services] = useServices();
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = () => {
    toast.info("Coming soon!");
  };

  return (
    <>
      <Breadcrumbs title="Appointment" />
      <div className="container py-16 flex justify-center">
        <div className="flex flex-col w-full max-w-4xl items-center shadow-2xl mb-8 border-l-2 border-opacity-100 rounded-lg border-primary px-4 sm:px-8 py-8 bg-white transform transition duration-200 hover:scale-105">
          <h1 className="text-3xl sm:text-4xl text-center font-bold font-Roboto mb-4">
            Drop your <span className="text-primary">Appointment</span>{" "}
          </h1>
          <p className="text-gray-400 py-2 text-center mb-4 text-sm sm:text-base">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
          <fieldset className="w-full max-w-lg">
            <label htmlFor="name" className="block mb-2 font-bold text-lg font-Poppins py-2 hover:text-primary">
              Name:
            </label>
            <input
              className="border-opacity-100 w-full border px-4 border-gray-800 py-2 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              type="text"
              id="name"
              name="name"
            />
            <label htmlFor="email" className="block mb-2 font-bold text-lg font-Poppins py-2 hover:text-primary">
              Email:
            </label>
            <input
              className="border-opacity-100 w-full border px-4 border-gray-800 py-2 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              type="email"
              id="email"
              name="email"
            />
            <label htmlFor="services" className="block mb-2 font-bold text-lg font-Poppins py-2 hover:text-primary">
              Services:
            </label>
            <select
              name="services"
              id="services"
              className="border-opacity-100 w-full border px-4 border-gray-800 py-2 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary mb-4"
            >
              <option value="">Select Services</option>
              {services.length > 0 &&
                services.map((service) => (
                  <option key={service.id} value={service?.title}>
                    {service?.title}
                  </option>
                ))}
            </select>
            <label htmlFor="date" className="block mb-2 font-bold text-lg font-Poppins py-2 hover:text-primary">
              Date:
            </label>
            <input
              className="border-opacity-100 w-full border px-4 border-gray-800 py-2 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              type="date"
              id="date"
              name="date"
            />
            <label htmlFor="message" className="block mb-2 font-bold text-lg font-Poppins py-2 hover:text-primary">
              Message:
            </label>
            <textarea
              className="border-opacity-100 w-full border px-4 border-gray-800 py-2 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              rows="4"
              id="message"
              name="message"
            />
            <button
              onClick={handleSubmit}
              className="bg-white mt-4 border border-primary text-black py-3 px-6 rounded-md hover:bg-primary hover:text-white transition text-sm sm:text-base"
            >
              Submit
            </button>
          </fieldset>
          <p className="text-center font-Roboto mt-8 text-sm sm:text-base">
            If getting an error message, please book an appointment by calling us at
            <i className="fas fa-phone-square-alt text-2xl text-secondary mx-2" style={{ color: "rgba(103, 108, 184, var(--tw-text-opacity))" }}></i>
            +91 9833505077
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Appointment;
