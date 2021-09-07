import React from "react";
import ContentInfo from "./contentInfo";
import RecetntPost from "./recentPost";
import CopyRight from "./copyRight";
import RecentPorjects from "./recentPorjects";
const Index = () => {
  return (
    <div>
      <div class="pr-5 pl-5 pt-10 pb-5 md:flex   md:space-x-80 md:px-14 bg-black text-white">
        <div className="tex-bold">Contact info</div>
        <div className="text-bold pl-5">Recent Post</div>
        <div className="text-bold pl-40">Recent Projects</div>
      </div>

      <div class="p-20 pt-0 md:flex md:justify-center items-center  md:space-x-52 md:px-14 bg-black text-white">
        {" "}
        <ContentInfo />
        <RecetntPost />
        <RecentPorjects />
      </div>
      <CopyRight />
    </div>
  );
};

export default Index;
