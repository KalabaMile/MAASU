import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <div>
      <Title title="Our" subTitle="Team" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <TeamCard
            title="Samir Kadunić"
            category="Founder"
            image={workImgSix}
          />
          <TeamCard
            title="Asmir Zukić"
            category="Testing Lead"
            image={workImgOne}
          />
          <TeamCard
            title="Muhamed Trumić"
            category="Software Engineer"
            image={workImgTwo}
          />
          <TeamCard
            title="Igor Slagalo"
            category="Software Engineer"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <TeamCard
            title="Hana Džindo"
            category="Requirement Lead"
            image={workImgFour}
          />
          <TeamCard
            title="Dijana Čaušević"
            category="Embedded Lead"
            image={workImgSix}
          />
          <TeamCard
            title="Kenad Mulahalilovic"
            category="Software Engineer"
            image={workImgEight}
          />
          <TeamCard
            title="Ali Hashemi"
            category="Software Engineer"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
