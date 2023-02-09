import React from "react";
import Card from "./Card";

const TrustedBy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Card
        title="Walter"
      />
      <Card
        title="E-ON"
      />
      <Card
        title="Porsche Engineering"
      />
      <Card
        title="ELD"
      />
    </div>
  );
};

export default TrustedBy;
