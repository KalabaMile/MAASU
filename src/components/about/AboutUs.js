import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 text-white px-6 border-r-[1px] border-r-zinc-800 border-b-[1px] border-b-zinc-800 flex items-center">
        <div className="py-5">
          <p className="text-base leading-6 ">
            We are a passionate team building better tomorrow.
            We love building amazing products and providing first-class IT services.
            We are a tech driven company supercharged by the feedback of our customers. We work with the leading companies, both in the automotive industry and in other sectors.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 border-b-[1px] border-b-zinc-800 ">
        <ul className="grid grid-cols-1 md:grid-cols-2 h-full">
          <li className="py-4 px-4 flex flex-col items-center justify-center gap-2 border border-zinc-800">
            <span className="">Countries:</span>
            <span className="aboutLeftLiSpan">28</span>
          </li>
          <li className="lgl:mr-2 py-4 px-4 flex flex-col items-center justify-center gap-2 border border-zinc-800">
            <span className="">Partners:</span>
            <span className="aboutLeftLiSpan">850+</span>
          </li>
          <li className="py-4 px-4 flex flex-col items-center justify-center gap-2 border border-zinc-800">
            <span className="">Data Sets per Day:</span>
            <span className="aboutLeftLiSpan">100M+</span>
          </li>
          <li className="lgl:mr-2 py-4 px-4 flex flex-col items-center justify-center gap-2 border border-zinc-800">
            <span className="">Devices:</span>
            <span className="aboutLeftLiSpan">200K+</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
