import React from "react";
import { CiTrophy, CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PopularCard from "../UI/PopularCard";
import DealCard from "../UI/DealCard";

const PopularProducts = () => {
  const [activeItem, setActiveItem] = React.useState(1);

  const popularItemList = [
    {
      id: 1,
      title: "Popular Coupons",
      icon: <CiTrophy />,
    },
    {
      id: 2,
      title: "Ending Soon",
      icon: <CiTimer />,
    },
    {
      id: 3,
      title: "Leatest Coupons",
      icon: <FaFire />,
    },
  ];

  const handlerItemClick = (item) => {
    setActiveItem(item.id);
    console.log(item);
  };

  return (
    <div className="px-6 my-16 flex flex-col justify-center items-center">
      {/* Tabs */}
      <div>
        <div className="flex justify-center gap-2">
          {popularItemList.map((item) => (
            <PopularCard
              key={item.id}
              active={activeItem === item.id}
              title={item.title}
              icon={item.icon}
              onClick={() => handlerItemClick(item)}
            />
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-4 gap-3 my-4 justify-center items-center">
        <DealCard />
        <DealCard />
        <DealCard />
        <DealCard />
        <DealCard />
        <DealCard />
        <DealCard />
        <DealCard />
      </div>

      {/* Pagination */}

      <div>
        <div className="flex justify-center gap-2">
          <div className="w-8 h-2 rounded-full bg-black"></div>
          <div className="w-8 h-2 rounded-full bg-gray-300"></div>
          <div className="w-8 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
