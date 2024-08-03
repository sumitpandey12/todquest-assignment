import React from "react";
import CustomTitle from "../UI/CustomTitle";
import CategoryTab from "./CategoryTab";
import fashion from "../../assets/fashion.png";
import food from "../../assets/food.png";
import beauty from "../../assets/beauty care.png";
import toys from "../../assets/toys.png";
import hosting from "../../assets/hosting.png";
import DealCard2 from "../UI/DealCard2";

const CouponByCategory = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);

  const tabList = [
    {
      id: 1,
      title: "Fashion",
      image: fashion,
    },
    {
      id: 2,
      title: "Food",
      image: food,
    },
    {
      id: 3,
      title: "Beauty",
      image: beauty,
    },
    {
      id: 4,
      title: "Cloud",
      image: hosting,
    },
    {
      id: 5,
      title: "Games",
      image: toys,
    },
    {
      id: 6,
      title: "Phones",
      image: toys,
    },
    {
      id: 7,
      title: "Travel",
      image: toys,
    },
    {
      id: 8,
      title: "Movies",
      image: toys,
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="my-16 w-min flex flex-col justify-center items-center">
        <CustomTitle>Coupon By Category</CustomTitle>

        {/* Category */}
        <div className="flex justify-between items-center w-full gap-2">
          {tabList.map((item) => (
            <CategoryTab
              key={item.id}
              title={item.title}
              image={item.image}
              active={item.id === selectedTab}
              onClick={() => setSelectedTab(item.id)}
              className="flex-1"
            />
          ))}
        </div>
        {/* CategoryItems */}
        <div className="bg-white grid grid-cols-4 gap-3 p-4 w-full">
          {[1, 2, 3, 4].map((item) => (
            <DealCard2 className="border-none w-full" key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponByCategory;
