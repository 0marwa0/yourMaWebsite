import React from "react";
import Posts from "./Posts";
const Index = () => {
  return (
    <div>
      {Posts.map((item) => (
        <div key={item.name} className="flex gap-10">
          <img src={item.image} alt="post" className="w-20 h-16 mb-4" />
          <div className="flex flex-col">
            <div>{item.name}</div>
            <div className="text-gray-600">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
