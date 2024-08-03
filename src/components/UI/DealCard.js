import React from "react";
import amazon from "../../assets/amazon.png";
import { Card } from "react-bootstrap";
import Button from "./Button";

const DealCard = () => {
  return (
    <Card className="p-3 w-48">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-green-600 font-bold">
          Upto 60% off on Appliances
        </div>
        <img
          src={amazon}
          style={{ width: "80px", height: "24px" }}
          alt="deal"
          className="w-20 h-20"
        />
        <div className="text-gray-500 text-xs">
          Upto 60% off on summer Appliances
        </div>
        <Button className="text-sm font-normal w-full">GRAB DEAL</Button>
      </div>
    </Card>
  );
};

export default DealCard;
