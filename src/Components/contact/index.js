import React from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
const Index = () => {
  return (
    <div className="flex bg-gray-100 pt-20 pb-20 pr-52 pl-52 mt-20 space-x-20">
      <div className="font-bold text-2xl w-72">
        Have a project for us? Get in touch!
      </div>
      <div className="flex space-x-4 items-center text-xl">
        <div>
          <FiPhone color="green" size="70" />
        </div>
        <div>
          <div className="text-green-600">DROP US A LINE </div>
          <div className="font-semibold">info@your-ma.com</div>
        </div>
      </div>
      <div className="flex space-x-4 items-center text-xl">
        <div>
          <HiOutlineMail color="green" size="70" />
        </div>
        <div>
          <div className="text-green-600">CALL US </div>
          <div className="font-semibold">+79005138049</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
