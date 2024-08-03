import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`text-white px-4 py-2 rounded-xl font-bold bg-red-600 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
