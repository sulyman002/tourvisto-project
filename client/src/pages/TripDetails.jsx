import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { destinations } from "../assets/allData";
import Nav from "../component/Nav";
import location from "../assets/handPicked-trip/location.svg";
import arrowLeft from "../assets/arrow-left.svg"

const TripDetails = () => {
  const param = useParams();
  const [singleData, setSingleData] = useState(null);
  const navigate = useNavigate();

  const { id } = param;
  useEffect(() => {
    const findId = destinations.find((item) => item.id === parseInt);
    setSingleData(findId);
  }, [id]);

  return (
    <div className="container mx-auto bg-[#F9FBFC]">
      <Nav />
      {/* big container */}
      <div className="flex gap-14 items-start px-6">
        {/* button */}
        <button

          href=""
          className=" cursor-pointer font-medium text-[14px] flex items-center justify-center gap-2 text-[#2E2C48] bg-white shadow-lg rounded-md h-[50px] w-[147px] "
        >
          <img src={arrowLeft} alt="" />
          Go Back
        </button>
        {/* big content */}
        <div className="w-full">
            
            <div>
               
                <h1 className="text-[#1F1F36] font-semibold font-600 text-[40px] leading-[44px] ">5-Day Japan Highlights: Culture, Food <br /> and Adventure</h1>
            </div>
        </div>
      </div>

      {/* popular trip */}

      <div className="flex flex-col gap-6 px-6">
        <div>
          <h1 className="text-[24px] font-semibold text-[#1F1F36] ">
            Popular Trips
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.slice(0, 4).map((card, index) => (
            <div
              onClick={() => navigate(`trip/${card.id}`)}
              className="cursor-pointer bg-white hover:bg-gray-400/10 rounded-[20px] shadow "
              key={index}
            >
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
      </div>
    </div>
  );
};

export default TripDetails;
