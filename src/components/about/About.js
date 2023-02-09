import React from "react";
import Title from "../home/Title";
import AboutUs from "./AboutUs";
import TrustedBy from "./TrustedBy";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Us" />
      <AboutUs />
      <Title title="Trusted" subTitle="By"/>
      <TrustedBy />
    </section>
  );
};

export default About;
