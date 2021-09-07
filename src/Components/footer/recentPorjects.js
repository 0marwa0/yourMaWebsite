import React from "react";
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
import project4 from "../../assets/images/project4.jpg";
import project5 from "../../assets/images/project5.jpg";
import project6 from "../../assets/images/project6.jpg";
const Index = () => {
  return (
    <div>
      <div class="grid grid-cols-3 w-60">
        <img src={project1} alt="project" className="w-40 h-20" />
        <img src={project2} alt="project" className="w-40 h-20" />
        <img src={project3} alt="project" className="w-40 h-20" />
        <img src={project4} alt="project" className="w-40 h-20" />
        <img src={project5} alt="project" className="w-40 h-20" />
        <img src={project6} alt="project" className="w-40 h-20" />
      </div>
    </div>
  );
};

export default Index;
