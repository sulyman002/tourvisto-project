import React from "react";
import { tours } from "../assets/allData";

const FeaturedTravel = () => {
  return (
    <div className="px-6 py-20 flex flex-col gap-4">
      <div className="flex flex-col space-y-3">
        <h1 className="text-[36px] font-bold leading-[44px] text-[#1F1F36] ">
          Featured Travel Destinations
        </h1>
        <p className="text-[18px] leading-[32px] text-[#7F7E83]  ">
          Check out some of the best places you can visit around the world.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-6 md:w-2/3">
          <div
            className=" bg-no-repeat p-6 flex flex-col justify-between bg-cover bg-bottom rounded-[14px] h-[297px]"
            style={{ backgroundImage: `url(${tours[0]?.image})` }}
          >
            <div className="w-[65px] h-[28px] py-2 flex items-center justify-center text-[#FF543D] font-bold text-[18px] leading-[24px] bg-white shadow rounded-full">
              {tours[0]?.rating}
            </div>
            <div className="flex flex-col">
              <h1 className="font-700 font-bold text-[30px] leading-[36px] text-white ">
                {tours[0]?.title}
              </h1>
              <div className="flex items-center gap-4">
                <img
                  src={tours[0]?.profile}
                  alt=""
                  className="w-[28.57px] h-[28.57px] rounded-full "
                />
                <p className="text-white text-[18px] ">
                  {tours[0]?.activities}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="h-[390px] p-6 flex flex-col justify-between bg-no-repeat bg-cover rounded-[14px]"
              style={{ backgroundImage: `url(${tours[1]?.image})` }}
            >
              <div className="w-[65px] h-[28px] py-2 flex items-center justify-center text-[#FF543D] font-bold text-[18px] leading-[24px] bg-white shadow rounded-full">
                {tours[1]?.rating}
              </div>
              <div className="flex flex-col">
                <h1 className="font-700 font-bold text-[30px] leading-[36px] text-white ">
                  {tours[1]?.title}
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    src={tours[1]?.profile}
                    alt=""
                    className="w-[28.57px] h-[28.57px] rounded-full "
                  />
                  <p className="text-white text-[18px] ">
                    {tours[1]?.activities}
                  </p>
                </div>
              </div>
            </div>


            <div
              className="h-[390px] p-6 flex flex-col justify-between bg-no-repeat bg-cover rounded-[14px]"
              style={{ backgroundImage: `url(${tours[2]?.image})` }}
            >
              <div className="w-[65px] h-[28px] py-2 flex items-center justify-center text-[#FF543D] font-bold text-[18px] leading-[24px] bg-white shadow rounded-full">
                {tours[2]?.rating}
              </div>
              <div className="flex flex-col">
                <h1 className="font-700 font-bold text-[30px] leading-[36px] text-white ">
                  {tours[2]?.title}
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    src={tours[2]?.profile}
                    alt=""
                    className="w-[28.57px] h-[28.57px] rounded-full "
                  />
                  <p className="text-white text-[18px] ">
                    {tours[2]?.activities}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="second md:w-1/3 flex flex-col gap-5 ">
        {/* one */}
        <div
              className="h-[390px] md:h-full p-6 flex bg-bottom flex-col justify-between bg-no-repeat bg-cover rounded-[14px]"
              style={{ backgroundImage: `url(${tours[3]?.image})` }}
            >
              <div className="w-[65px] h-[28px] py-2 flex items-center justify-center text-[#FF543D] font-bold text-[18px] leading-[24px] bg-white shadow rounded-full">
                {tours[3]?.rating}
              </div>
              <div className="flex flex-col">
                <h1 className="font-700 font-bold text-[30px] leading-[36px] text-white ">
                  {tours[3]?.title}
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    src={tours[3]?.profile}
                    alt=""
                    className="w-[28.57px] h-[28.57px] rounded-full "
                  />
                  <p className="text-white text-[18px] ">
                    {tours[3]?.activities}
                  </p>
                </div>
              </div>
            </div>
        {/* two */}
        <div
              className=" h-[390px] md:h-full p-6 flex bg-bottom flex-col justify-between bg-no-repeat bg-cover rounded-[14px]"
              style={{ backgroundImage: `url(${tours[4]?.image})` }}
            >
              <div className="w-[65px] h-[28px] py-2 flex items-center justify-center text-[#FF543D] font-bold text-[18px] leading-[24px] bg-white shadow rounded-full">
                {tours[4]?.rating}
              </div>
              <div className="flex flex-col">
                <h1 className="font-700 font-bold text-[30px] leading-[36px] text-white ">
                  {tours[4]?.title}
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    src={tours[4]?.profile}
                    alt=""
                    className="w-[28.57px] h-[28.57px] rounded-full "
                  />
                  <p className="text-white text-[18px] ">
                    {tours[2]?.activities}
                  </p>
                </div>
              </div>
            </div>
        {/* three */}
        <div
              className="h-[390px] md:h-full bg-bottom p-6 flex flex-col justify-between bg-no-repeat bg-cover rounded-[14px]"
              style={{ backgroundImage: `url(${tours[5]?.image})` }}
            >
              <div className="w-[65px] h-[28px] py-2 flex items-center justify-center text-[#FF543D] font-bold text-[18px] leading-[24px] bg-white shadow rounded-full">
                {tours[5]?.rating}
              </div>
              <div className="flex flex-col">
                <h1 className="font-700 font-bold text-[30px] leading-[36px] text-white ">
                  {tours[5]?.title}
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    src={tours[5]?.profile}
                    alt=""
                    className="w-[28.57px] h-[28.57px] rounded-full "
                  />
                  <p className="text-white text-[18px] ">
                    {tours[5]?.activities}
                  </p>
                </div>
              </div>
            </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default FeaturedTravel;
