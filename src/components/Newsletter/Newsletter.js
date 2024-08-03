import React from "react";
import formImage from "../../assets/form-img.png";
import Button from "../UI/Button";

const Newsletter = () => {
  return (
    <div className="py-12 flex justify-center bg-gray-300">
      <div className="w-2/3 flex  bg-white  rounded-xl gap-3">
        <img src={formImage} />
        <div className="flex flex-col justify-evenly">
          <p className="text-4xl text-start">
            Subscribe to our <br />
            Newsletter!
          </p>
          <p className="text-gray-500 text-xl font-thin text-start">
            Be the first to get exclusive offers <br /> ands the latest news
          </p>
          <div className="rounded-xl bg-white px-4 py-2 border-2 border-gray-200">
            <input
              type="text"
              className="bg-white border-none outline-none w-full"
              placeholder="Enter your email address"
            />
          </div>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
