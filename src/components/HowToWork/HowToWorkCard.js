import React from "react";
import { IoMdLogIn } from "react-icons/io";

const HowToWorkCard = (props) => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-white rounded p-2 w-56 h-48">
      <div className="bg-red-300 p-3 rounded">{props.icon}</div>
      <span className="font-medium">{props.title}</span>
      <span className="font-light text-sm text-gray-600">{props.subTitle}</span>
    </div>
  );
};

export default HowToWorkCard;
