import React from "react";

const Card = ({ image, icons, title, subTitle }) => {
  return (
    <div className="py-8 px-6 flex flex-col items-center gap-2 borderRight borderBottom">
      <span className="text-4xl text-designColor mb-2">{icons}</span>
      <h2 className="font-titleFont text-lg font-semibold">{title}</h2>
      <p className="text-base text-center text-zinc-400 px-6">{subTitle}</p>
      <img className="px-10 py-2 mb-2" src={image}></img>
    </div>
  );
};

export default Card;
