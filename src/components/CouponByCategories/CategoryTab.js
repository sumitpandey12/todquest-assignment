import React from "react";

const CategoryTab = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="cursor-pointer w-24 h-24 flex flex-col gap-2 justify-between items-center bg-white"
    >
      <img src={props.image} alt="fashion" className="w-10 h-10 mt-2" />
      <div className="text-sm">{props.title}</div>
      <div
        className={`h-1 ${
          props.active ? "bg-red-600" : "bg-white"
        } w-full rounded-full`}
      ></div>
    </div>
  );
};

export default CategoryTab;
