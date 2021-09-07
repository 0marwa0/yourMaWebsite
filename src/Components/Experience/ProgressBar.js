import React from "react";
import Progress from "./Progress";
const Index = () => {
  return (
    <div className="flex flex-col" style={{ width: "400px" }}>
      <div>
        <div>Web development - 11 years</div>
        <Progress percent="80%" />
      </div>
      <div>
        <div>Photography - 3 years </div>
        <Progress percent="80%" />
      </div>
      <div>
        <div>Marketing - 2 years</div>
        <Progress percent="80%" />
      </div>
      <div>
        <div>Design - 8 years</div>
        <Progress percent="80%" />
      </div>
    </div>
  );
};

export default Index;
