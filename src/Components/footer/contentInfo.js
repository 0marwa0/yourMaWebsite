import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RiYoutubeFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
const Index = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div>Call us</div>
      <div className="text-gray-600"> +79005138049</div>
      <div>Business hours </div>
      <div className="text-gray-600">Monday - Friday 10 AM - 6 PM </div>
      <div>Mail</div>
      <div className="text-gray-600"> info@your-ma.com</div>
      <div className="flex space-x-4">
        <div className="w-4 bg-gray-900 rounded-full pt-2 pb-2 pr-6 pl-1.5">
          <FaFacebookF color="#374151" />
        </div>
        <div className="w-4 bg-gray-900 rounded-full pt-2 pb-2 pr-6 pl-1.5">
          <AiOutlineTwitter color="#374151" />
        </div>
        <div className="w-4 bg-gray-900 rounded-full pt-2 pb-2 pr-6 pl-1.5">
          <SiInstagram color="#374151" />
        </div>
        <div className="w-4 bg-gray-900 rounded-full pt-2 pb-2 pr-6 pl-1.5">
          <RiYoutubeFill color="#374151" />
        </div>
      </div>
    </div>
  );
};

export default Index;
