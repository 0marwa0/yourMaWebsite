import React from "react";
import ProgressBar from "./ProgressBar";
import Content from "./Content";
const Index = () => {
  return (
    <div className="flex justify-center items-center space-x-8 md:px-14 mt-10 mb-10">
      <Content />
      <ProgressBar />
    </div>
  );
};

export default Index;
