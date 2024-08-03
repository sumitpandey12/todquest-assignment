import React from "react";
import DealCard2 from "../UI/DealCard2";
import CustomTitle from "../UI/CustomTitle";
import { Card } from "react-bootstrap";

const DealsOfTheDay = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <CustomTitle>Deals Of The Day</CustomTitle>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <Card>
              <DealCard2 key={i} />
            </Card>
          ))}
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
    </div>
  );
};

export default DealsOfTheDay;
