import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Contact = () => {
  return (
    <div>
      <Breadcrumbs title="Contact us" />
      <div className="container py-16 ">
        <div className="pb-8">
          <h1 className="text-4xl font-bold font-Roboto text-secondary">
            Drop a <span className="text-primary">Message</span>{" "}
          </h1>
          <p className="text-gray-400 py-2">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-2 justify-between">
          <div className="">
            <div className="">
              <fieldset>
                <label for="fname">First name:</label>
                <input
                  className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                  type="text"
                  id="name"
                  name="name"
                />
                <br />
                <br />
                <label for="email">Email:</label>
                <input
                  className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                  type="email"
                  id="email"
                  name="email"
                />
                <br />
                <br />
                <label for="message">Message:</label>
                <textarea
                  className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
                  rows="4"
                  cols="50"
                />
                <br />
                <button className="bg-white mt-4 border border-primary text-black py-3 px-6 rounded-md hover:bg-transparent hover:bg-primary hover:text-white transition">
                  Submit
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
                <i class="fas fa-map-marker-alt text-3xl text-secondary"></i>
              </div>
              <div className="px-8">
                <p>Shop No 2. E2 Building. SAI SANKUL NX, next to Prabhat Kitchen, Khadakpada, Kalyan-421301</p>
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
                <p><a href="https://www.facebook.com/people/Dr-Archanas-Dental-Hub/61556509773846/?mibextid=LQQJ4d">Dr-Archanas-Dental-Hub</a></p>  
              </div>
              </div>
              <div className="flex py-4">
              <div className="">
                <i className="fab fa-instagram text-3xl text-secondary"></i>
              </div>
              <div className="px-8">
                <p><a href="https://www.instagram.com/dentalhub4?igsh=MTc0NmF0d2l4bDBuaw%3D%3D&utm_source=qr">Dr-Archanas-Dental-Hub</a></p>  
              </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
