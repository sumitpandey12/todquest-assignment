import React from "react";
import img from "../../assets/image 65-1.png";
import CustomTitle from "../UI/CustomTitle";

const PopularCategory = () => {
  return (
    <div className="w-2/3 mx-auto">
      <div className="my-6 rounded-xl bg-white flex gap-2">
        <div className="">
          <img className="rounded-l-xl h-full object-cover" src={img} />
        </div>
        <div className="flex flex-col m-1 flex-grow">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl">Popular Category</h2>
            <div className="h-1 bg-red-600 w-24 rounded-full mb-4"></div>
          </div>
          <div className="grid grid-cols-4 w-full">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28,
            ].map((item) => (
              <div key={item} className="border py-3">
                Flight
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
