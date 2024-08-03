import React from "react";
import logo from "../../assets/logo.png";
import btn1 from "../../assets/btn1.png";
import btn from "../../assets/btn.png";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { GrDrawer } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className=" bg-blue-950">
      <div className="w-2/3 mx-auto py-3">
        <div className="flex justify-evenly">
          <div className="flex-1 flex flex-col gap-2">
            <img className="w-24" src={logo} />
            <span className="text-white text-sm text-start">
              Lorem Ipsum is simply dummy of the printing and type setting.
            </span>
            <div className="bg-white rounded-xl px-1 py-1 w-32 flex justify-evenly items-center">
              <div className="flex flex-col justify-center items-center">
                <BsApple size="18" />
              </div>
              <div>
                <div className="" style={{ fontSize: "10px" }}>
                  Download From
                </div>
                <div className="font-bold" style={{ fontSize: "14px" }}>
                  APP STORE
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl px-1 py-1 w-32 flex justify-evenly items-center">
              <div className="flex flex-col justify-center items-center">
                <FaGooglePlay size="18" />
              </div>
              <div>
                <div style={{ fontSize: "10px" }}>Download From</div>
                <div className="font-bold" style={{ fontSize: "14px" }}>
                  PLAY STORE
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start items-center gap-1">
            <div className="text-red-600 text-sm my-4">COMPANY</div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start items-center gap-1">
            <div className="text-red-600 text-sm my-4">GENERAL</div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start items-center gap-1">
            <div className="text-red-600 text-sm my-4">PAGES</div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start items-center gap-1">
            <div className="text-red-600 text-sm my-4">MORE</div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <GrDrawer color="white" size="10" />
              <div className="text-white text-sm font-light">About</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
