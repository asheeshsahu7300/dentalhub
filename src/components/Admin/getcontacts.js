import React, { useState, useEffect } from "react";
import useServices from "../../useHook/useServices";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Appointments = () => {
  const [services] = useServices();
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  // Fetch appointments from backend on component mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:5000/contact/getcontacts");
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setError(error.message);
    }
  };

  const deleteAppointment = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/contact/delete/${encodeURIComponent(email)}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete appointment');
      }
      // Filter out the deleted appointment from the state
      setAppointments(appointments.filter(appointment => appointment.email !== email));
    } catch (error) {
      console.error("Error deleting appointment:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <Breadcrumbs title="Messages from Customers" />
      <div className="container py-16">
        <h1 className="text-4xl text-center font-bold font-Roboto">
          Messages From<span className="text-primary"> Customers</span>{" "}
        </h1>
        <p className="text-gray-400 py-2 text-center">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>
        <fieldset>
          {/* Input fields */}
        </fieldset>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {appointments.map((appointment, index) => (
            <div key={index} className="shadow-2xl mb-8 border-l-2 border-opacity-100 rounded-lg border-primary px-8 py-8 bg-white transform transition duration-200 hover:scale-105">
              <div className="p-4">
                <div className="font-bold text-lg font-Poppins font-bold py-2 hover:text-primary">Name:</div>
                <div className="text-gray-400 py-2">{appointment.name}</div>
                <div className="font-bold text-lg font-Poppins font-bold py-2 hover:text-primary">Email:</div>
                <div className="text-gray-400 py-2 ">{appointment.email}</div>
                <div className="font-bold text-lg font-Poppins font-bold py-2 hover:text-primary">Message:</div>
                <div className="text-gray-400 py-2 ">{appointment.message}</div>
                <div className="font-bold text-lg font-Poppins font-bold py-2 hover:text-primary">Date:</div>
                <div className="text-gray-400 py-2 ">{appointment.date}</div>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => deleteAppointment(appointment.email)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <p className="text-4xl text-center font-Roboto" style={{ fontSize: "22px" }}>
          {" "}
        </p>
      </div>
    </>
  );
};

export default Appointments;
