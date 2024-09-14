import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import EventsList from "../../components/EventsList/EventsList";
import QualityService from "../../components/QualityService/QualityService";

const About = () => {
  return (
    <>
      <Breadcrumbs title="About us" />
      <QualityService />
      <EventsList />
    </>
  );
};

export default About;
