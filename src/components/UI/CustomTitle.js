import React from "react";

const CustomTitle = (props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${props.className}`}
    >
      <h2 className="text-3xl">{props.children}</h2>
      <div className="h-1 bg-red-600 w-36 rounded-full mb-4"></div>
    </div>
  );
};

export default CustomTitle;
