import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CONST_DATA_SERVICES from "../../Constants/Services";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ServicesSidebar from "../../components/Sidebar/ServicesSidebar";

const ServicesDetails = () => {
  const [data, setData] = useState(null); 
  const { serviceId } = useParams();

  useEffect(() => {
    if (CONST_DATA_SERVICES) {
      const serviceData = CONST_DATA_SERVICES.find(
        (service) => parseInt(service.id) === parseInt(serviceId)
      );
      setData(serviceData || {}); 
    }
  }, [serviceId]);

  if (!data) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Breadcrumbs title={data?.title || "Service Details"} />
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-6 lg:justify-items-end">
          <div className="lg:col-span-2">
            {data?.image ? (
              <img src={data?.image} alt={data?.title} />
            ) : (
              <div className="bg-gray-200 h-64 w-full flex items-center justify-center">
                <span>No Image Available</span>
              </div>
            )}
            <h1 className="text-2xl font-Poppins py-4 text-secondary">
              {data?.title || "Service Title"}
            </h1>
            <p>{data?.description || "No description available."}</p>
          </div>
          <div className="lg:mt-0 mt-16">
            <h1 className="text-4xl text-center px-4 py-2 font-Poppins bg-secondary text-white">
              All Services
            </h1>
            {CONST_DATA_SERVICES.length > 0 ? (
              CONST_DATA_SERVICES.map((service) => (
                <ServicesSidebar key={service.id} service={service} />
              ))
            ) : (
              <p>No services available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
