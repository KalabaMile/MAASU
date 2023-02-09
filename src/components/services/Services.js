import React from "react";
import Title from "../home/Title";
import OurServices from "./OurServices";

const Services = () => {
  return (
    <section id="services" className="w-full">
      <Title title="Our" subTitle="Services"/>
      <OurServices />
    </section>
  );
};

export default Services;
