import React from "react";
import CustomTitle from "../UI/CustomTitle";
import HowToWorkCard from "./HowToWorkCard";
import { IoMdLogIn, IoMdCard } from "react-icons/io";
import { RiCoupon2Line } from "react-icons/ri";

const HowToWork = () => {
  const itemList = [
    {
      id: 1,
      icon: <IoMdLogIn />,
      title: "SignUp",
      subTitle:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
    },
    {
      id: 2,
      icon: <RiCoupon2Line />,
      title: "Choose Coupon",
      subTitle:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
    },
    {
      id: 3,
      icon: <IoMdCard />,
      title: "Grab Coupon",
      subTitle:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
    },
  ];

  return (
    <div className="w-2/3 mx-auto py-10">
      <CustomTitle>How To Work</CustomTitle>
      <div className="w-full flex justify-between">
        {itemList.map((i) => (
          <HowToWorkCard key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
};

export default HowToWork;
