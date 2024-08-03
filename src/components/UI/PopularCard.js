import React from "react";

const PopularCard = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`cursor-pointer rounded-xl px-4 py-2 ${
        props.active ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-center items-center gap-2">
        {props.icon}
        <div className={`${props.active ? "text-red-600" : "text-black"}`}>
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
