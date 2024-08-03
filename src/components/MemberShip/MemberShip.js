import React from "react";
import offer1 from "../../assets/offer1.png";
import CustomTitle from "../UI/CustomTitle";
import { Card } from "react-bootstrap";
import one from "../../assets/image 13.png";
import two from "../../assets/image 14.png";
import three from "../../assets/image 15.png";
import four from "../../assets/image 16.png";

const MemberShip = () => {
  return (
    <div className="py-4 bg-white">
      <div className="w-2/3 mx-auto flex flex-col justify-center items-center">
        <img src={offer1} alt="offer1" />
        <CustomTitle className="mt-10">Popular Membership</CustomTitle>

        <div className="grid grid-cols-2 gap-3">
          {[one, two, three, four].map((img, i) => (
            <img key={i} src={img} />
          ))}
        </div>
        <div className="mt-4">
          <div className="flex justify-center gap-2">
            <div className="w-8 h-2 rounded-full bg-black"></div>
            <div className="w-8 h-2 rounded-full bg-gray-300"></div>
            <div className="w-8 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
