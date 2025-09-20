import React from "react";
import { useSelector } from "react-redux";
import plus from "../assets/plus.svg";
import { useNavigate } from "react-router-dom";

const AiTrips = () => {
  const grabData = useSelector((state) => state.authRed.user);
  // const navigate = useNavigate();
  console.log(grabData?.name);
  return (
    <div className="md:p-14 p-6 w-full">
      <div className="flex items-start flex-col md:flex-row md:justify-between gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#1F1F36] font-600 font-semibold text-[24px] ">
            Manage Users
          </h2>
          <p className="text-[#7F7E83] text-[18px] ">
            Filter, sort, and access detailed user profiles
          </p>
        </div>
        <div className="flex items-center justify-center w-full bg-[#256FF1] md:w-[233px] h-[44px] gap-3 rounded-[8px] text-white ">
          <img src={plus} alt="plus" />
          Add new user
        </div>
      </div>

      
      



     
     


     
    </div>
  );
};

export default AiTrips;
