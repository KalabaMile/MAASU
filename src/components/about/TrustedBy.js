import React from "react";
import { eld, eon, porsche, walter } from "../../assets";
import Card from "./Card";

const TrustedBy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Card
        image={eld}
      />
      <Card
        image={porsche}
      />
      <Card
        image={eon}
      />
      <Card
        image={walter}
      />
    </div>
  );
};

export default TrustedBy;
