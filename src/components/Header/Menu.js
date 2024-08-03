import React, { useState } from "react";

const Menu = (props) => {
  const [activeItem, setActiveItem] = useState("Home");
  const menuItems = ["Home", "Deals", "Coupon", "Stores", "Contact us"];

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <React.Fragment>
      <div className="" style={{ backgroundColor: "#091431" }}>
        <div className="w-2/3 mx-auto py-3 flex justify-center items-center">
          <div className="flex justify-evenly w-1/2">
            {menuItems.map((item) => (
              <div
                key={item}
                className={`cursor-pointer w-20 text-center ${
                  activeItem === item ? "text-red-600" : "text-white"
                }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-2/3 mx-auto flex justify-center items-center">
        <div className="flex justify-evenly w-1/2">
          {menuItems.map((item, index) => (
            <p
              key={index}
              className={`h-0.5 w-20 ${
                activeItem === item ? "bg-red-600" : "bg-transparent"
              }`}
            ></p>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
