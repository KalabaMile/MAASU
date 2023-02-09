import React from "react";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import Card from "./Card";

const AboutCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <Card
                icons={<BiCodeAlt />}
                title="Product Development"
                subTitle="Understanding the problem requirements and devising the architecture necessary for the solution."
            />
            <Card
                icons={<SiAntdesign />}
                title="Data Science & Machine Learning"
                subTitle="Analyzing data and creating prediction models."
            />
            <Card
                icons={<BiCodeAlt />}
                title="Testing Software"
                subTitle="We test the software and bring it to the highest level."
            />
            <Card
                icons={<SiAntdesign />}
                title="Web Development"
                subTitle="Designing and Developing Web applications."
            />
            <Card
                icons={<BiCodeAlt />}
                title="DevOps"
                subTitle="Cloud solutions using platforms such as AWS."
            />
            <Card
                icons={<SiAntdesign />}
                title="Mobile Development"
                subTitle="Designing and Developing Mobile applications."
            />
        </div>
    );
};

export default AboutCards;
