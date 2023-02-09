import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 border-b-[1px] border-b-zinc-800 flex items-center">
        <div className="py-5">
          <p className="text-base leading-6 ">
            We are a passionate team building better tomorrow.
            We love building amazing products and providing first-class IT services.
            We are a tech driven company supercharged by the feedback of our customers. We work with the leading companies, both in the automotive industry and in other sectors.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 border-b-[1px] border-b-zinc-800 ">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Countries Connected:</span>
            <span className="aboutLeftLiSpan">28</span>
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Partners Worldwide:</span>
            <span className="aboutLeftLiSpan">850+</span>
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Data Sets per Day:</span>
            <span className="aboutLeftLiSpan">100M+</span>
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Devices Connected:</span>
            <span className="aboutLeftLiSpan">200K+</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
