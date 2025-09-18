import React, { useState } from "react";
import { destinations } from "../assets/allData.js";
import location from "../assets/handPicked-trip/location.svg";
import arrowRight from "../assets/arrow-right.svg"
import arrowLeft from "../assets/arrow-left.svg"
 
const HandPicked = () => {
    const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="px-6 py-20 flex flex-col gap-4">
      <div className="flex flex-col space-y-3">
        <h1 className="text-[36px] font-bold leading-[44px] text-[#1F1F36] ">
          Handpicked Trips
        </h1>
        <p className="text-[18px] leading-[32px] text-[#7F7E83]  ">
          Browse well-planned trips designed for different travel styles and
          interests
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.slice(0, 8).map((card, index) => (
          <div className="bg-white rounded-[20px] shadow " key={index}>
            <div className="w-full relative">
              <img
                src={card?.image}
                className="w-full h-[180px] rounded-t-[20px]"
                alt=""
              />
              <div className="font-semibold font-600 text-[14px] z-10 absolute top-6 right-6 flex items-center justify-center shadow w-[54px] h-[22px] bg-white rounded-full text-black ">
                ${card?.price}
              </div>
            </div>
            <div className="px-4 flex flex-col py-6 gap-5">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#1F1F36] font-semibold text-[18px] leading-[20px] ">
                  {card.title}
                </h2>
                <div className="flex items-center gap-2">
                  <img
                    src={location}
                    alt={card.title}
                    className="w-[16px] h-[16px] "
                  />
                  <p className="text-[#7F7E83] text-[14px] leading-[20px] ">
                    {card.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`px-[10px] ${
                    card.tags[0] === "Mountains"
                      ? "text-[#027A48] bg-[#ECFDF3]  "
                      : card.tags[0] === "Solo travel"
                      ? "text-[#026AA2] bg-[#F0F9FF] "
                      : card.tags[0] === "Luxury"
                      ? "text-[#C11574] bg-[#F7EDF6]"
                      : card.tags[0] === "Sports"
                      ? "bg-[#FFF4ED] text-[#B93815]"
                      : card.tags[0] === "Beach"
                      ? "text-[#175CD3] bg-[#E9F3FB]"
                      : ""
                  } py-[2px] rounded-full`}
                >
                  {card.tags[0]}
                </div>
                <div
                  className={`px-[10px] ${
                    card.tags[1] === "City"
                      ? "text-[#6941C6] bg-[#F3F0FB]  "
                      : card.tags[1] === "Budget"
                      ? "text-[#363F72] bg-[#F8F9FC] "
                      : card.tags[1] === "Luxury"
                      ? "text-[#C11574] bg-[#F7EDF6]"
                      : card.tags[1] === "Adventurous"
                      ? "bg-[#FFF1F3] text-[#C01048]"
                      : card.tags[1] === "Beach"
                      ? "text-[#175CD3] bg-[#E9F3FB]"
                      : ""
                  } py-[2px] rounded-full`}
                >
                  {card.tags[0]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className="w-full flex items-center justify-between text-[#2E2C48] mt-6">
        <a href="" className=" font-medium text-[14px] flex items-center gap-2 text-[#2E2C48] bg-white shadow rounded-md px-[14px] py-[8px] ">
            <img src={arrowLeft} alt="" />
            Previous
        </a>
        <div className="flex gap-3">
            {Array.from({length:Math.ceil(destinations.length/8)}).map((_,index) => (
                <a href="" className={`flex shadow flex-row items-center text-[14px] ${currentPage === index + 1 ? "bg-[#256FF1] text-white " : "text-[#2E2C48] bg-white " } font-medium justify-center gap-10 h-[40px] w-[40px] rounded-md`}>{index + 1}</a>
            ))}
        </div>
        <a href="" className="font-medium text-[14px] flex items-center gap-2 shadow rounded-md px-[14px] py-[8px]">
            <img src={arrowRight} alt="" />
            Previous
        </a>

      </div>
    </div>
  );
};

export default HandPicked;
