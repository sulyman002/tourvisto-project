import React from "react";

const HandPicked = () => {
  return (
    <div className="px-6 py-20 flex flex-col gap-4">
      <div className="flex flex-col space-y-3">
        <h1 className="text-[36px] font-bold leading-[44px] text-[#1F1F36] ">
          Handpicked Trips
        </h1>
        <p className="text-[18px] leading-[32px] text-[#7F7E83]  ">
          Browse well-planned trips designed for different travel styles and interests
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="">
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default HandPicked;
