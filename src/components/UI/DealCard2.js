import React from "react";
import amazon from "../../assets/amazon.png";
import { Card } from "react-bootstrap";
import Button from "./Button";

const DealCard2 = (props) => {
  return (
    <div className={`p-3 w-48 ${props.className}`}>
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src={amazon}
          style={{ width: "80px", height: "24px" }}
          alt="deal"
          className="w-20 h-20"
        />
        <div className="text-gray-500 text-xs">amazon</div>
        <div className="text-green-600 text-xs mt-2">Flat 30% Off</div>
        <Button className="text-sm font-normal w-full">GRAB DEAL</Button>
      </div>
    </div>
  );
};

export default DealCard2;
