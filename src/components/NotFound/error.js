import React from "react";

const Errors = () => {
  return (
    <>
      <div className="bg-gray-500">
        <div className="container text-center mt-8 py-20  ">
          <div className="inline-block align-middle mx-auto ">
            <h1 className="text-9xl text-red-300 font-Poppins">Sorry Can't Register</h1>
            <h1 className="text-7xl text-white font-Poppins py-2">
              oops! Can't Register as Admin
            </h1>
            <h1 className="text-2xl text-white font-Poppins">
              Please Contact the Adminstrator for More Details.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errors;
