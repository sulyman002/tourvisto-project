import React from "react";
import { useSelector } from "react-redux";
import plus from "../assets/plus.svg";
import arrowUp from "../assets/arrow-up.svg";
// import arrowDown from "../assets/arrow-down.svg"
import line1 from "../assets/line1.png";
import { destinations } from "../assets/allData";
import location from "../assets/handPicked-trip/location.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const grabData = useSelector((state) => state.authRed.user);
  const navigate = useNavigate();
  console.log(grabData?.name);
  return (
    <div className="md:p-14 p-6 w-full">
      <div className="flex items-start flex-col md:flex-row md:justify-between gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#1F1F36] font-600 font-semibold text-[24px] ">
            {grabData?.name} 👋
          </h2>
          <p className="text-[#7F7E83] text-[18px] ">
            Track activity, trends, and popular destinations in real time
          </p>
        </div>
        <div className="flex items-center justify-center w-full bg-[#256FF1] md:w-[233px] h-[44px] gap-3 rounded-[8px] text-white ">
          <img src={plus} alt="plus" />
          Create trip
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* first */}
        <div className="p-5 bg-white shadow rounded-[20px] ">
          <p className="text-[#2E2C48] font-500 font-medium text-[16px] ">
            Total Users
          </p>
          <div className="flex items-center gap-4 justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#1F1F36] font-600 font-semibold text-[36px] ">
                12,450
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img src={arrowUp} alt="arrow up" className="w-[20px]" />
                  <p className="text-[#027A48] font-500 font-medium text-[14px] ">
                    12%
                  </p>
                </div>
                <p className="text-[#7F7E83] font-500 font-medium text-[14px] ">
                  vs last month
                </p>
              </div>
            </div>
            <div className="">
              <img src={line1} alt="" />
            </div>
          </div>
        </div>
        {/* two */}
        <div className="p-5 bg-white shadow rounded-[20px] ">
          <p className="text-[#2E2C48] font-500 font-medium text-[16px] ">
            Total Users
          </p>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#1F1F36] font-600 font-semibold text-[36px] ">
                12,450
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img src={arrowUp} alt="arrow up" className="w-[20px]" />
                  <p className="text-[#027A48] font-500 font-medium text-[14px] ">
                    12%
                  </p>
                </div>
                <p className="text-[#7F7E83] font-500 font-medium text-[14px] ">
                  vs last month
                </p>
              </div>
            </div>
            <div className="">
              <img src={line1} alt="" />
            </div>
          </div>
        </div>
        {/* first */}
        <div className="p-5 bg-white shadow rounded-[20px] ">
          <p className="text-[#2E2C48] font-500 font-medium text-[16px] ">
            Total Users
          </p>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#1F1F36] font-600 font-semibold text-[36px] ">
                12,450
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img src={arrowUp} alt="arrow up" className="w-[20px]" />
                  <p className="text-[#027A48] font-500 font-medium text-[14px] ">
                    12%
                  </p>
                </div>
                <p className="text-[#7F7E83] font-500 font-medium text-[14px] ">
                  vs last month
                </p>
              </div>
            </div>
            <div className="">
              <img src={line1} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* trip de */}
      <div className="flex flex-col gap-6 px-6 py-16">
        <div>
          <h1 className="text-[24px] font-semibold text-[#1F1F36] ">
            Popular Trips
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.slice(4, 8).map((card, index) => (
            <div
              onClick={() => {
                navigate(`/trip/${card.id}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
                    className={` px-[10px] ${
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

      {/* chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* first */}
        <div className="bg-white shadow-md rounded-[20px] p-6 space-y-6 overflow-x-auto">
          <h3 className="text-[#1F1F36] font-600 font-semibold text-[20px] ">
            Latest user sign ups
          </h3>

          <table className="w-full border-collapse overflow-x-auto">
            <thead>
              <tr className="bg-[#F9FBFC] uppercase text-[#7F7E83">
                <th className=" px-4 py-4 text-[12px] text-left ">Name</th>
                <th className=" px-4 py-4 text-[12px] text-center">Itinerary Created</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td  className="w-[300px] flex items-center gap-4 px-4 py-4 text-[14px] text-left text-[#1F1F36] font-600 font-semibold ">
                <img src={grabData?.picture} alt="" className="w-[40px] rounded-full"/>
                <p className="capitalize ">{grabData?.name}</p>
                </td>
                <td  className="w-[300px] px-4 py-4 text-[14px] text-center text-[#1F1F36] font-600 font-semibold">12</td>
              </tr>
              <tr>
                <td  className="w-[300px] flex items-center gap-4 px-4 py-4 text-[14px] text-left text-[#1F1F36] font-600 font-semibold ">
                <img src={grabData?.picture} alt="" className="w-[40px] rounded-full"/>
                <p className="capitalize ">{grabData?.name}</p>
                </td>
                <td  className="w-[300px] px-4 py-4 text-[14px] text-center text-[#1F1F36] font-600 font-semibold">12</td>
              </tr>
              <tr>
                <td  className="w-[300px] flex items-center gap-4 px-4 py-4 text-[14px] text-left text-[#1F1F36] font-600 font-semibold ">
                <img src={grabData?.picture} alt="" className="w-[40px] rounded-full"/>
                <p className="capitalize ">{grabData?.name}</p>
                </td>
                <td  className="w-[300px] px-4 py-4 text-[14px] text-center text-[#1F1F36] font-600 font-semibold">12</td>
              </tr>
              <tr>
                <td  className="w-[300px] flex items-center gap-4 px-4 py-4 text-[14px] text-left text-[#1F1F36] font-600 font-semibold ">
                <img src={grabData?.picture} alt="" className="w-[40px] rounded-full"/>
                <p className="capitalize ">{grabData?.name}</p>
                </td>
                <td  className="w-[300px] px-4 py-4 text-[14px] text-center text-[#1F1F36] font-600 font-semibold">12</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        {/* second */}
        <div className="bg-white shadow-md rounded-[20px] p-6 space-y-6 ">
          <h3 className="text-[#1F1F36] font-600 font-semibold text-[20px] ">
            Latest trip bookings
          </h3>

          <div className=" overflow-x-auto">
            <table className="w-full border-collapse overflow-x-auto">
            <thead>
              <tr className="bg-[#F9FBFC] uppercase text-[#7F7E83">
                <th className="w-[300px] px-4 py-4 text-[12px] text-left">Booking</th>
                <th className="w-[300px] px-4 py-4 text-[12px] text-center">Travel Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td  className="w-[300px] flex items-center gap-4 px-4 py-4 text-[14px] text-left text-[#1F1F36] font-600 font-semibold ">
                <img src={grabData?.picture} alt="" className="w-[40px] rounded-full"/>
                <p className="capitalize ">{grabData?.name}</p>
                </td>
                <td  className="w-[300px] px-4 py-4 text-[14px] text-center text-[#1F1F36] font-600 font-semibold">Jun 02 - Jun 12</td>
              </tr>
              <tr>
                <td  className="w-[300px] flex items-center gap-4 px-4 py-4 text-[14px] text-left text-[#1F1F36] font-600 font-semibold ">
                <img src={grabData?.picture} alt="" className="w-[40px] rounded-full"/>
                <p className="capitalize ">{grabData?.name}</p>
                </td>
                <td  className="w-[300px] px-4 py-4 text-[14px] text-center text-[#1F1F36] font-600 font-semibold">Jun 07 - Jun 09</td>
              </tr>
              <tr>
                <td  className="w-[300px] flex items-center gap-4 px-4 py-4 text-[14px] text-left text-[#1F1F36] font-600 font-semibold ">
                <img src={grabData?.picture} alt="" className="w-[40px] rounded-full"/>
                <p className="capitalize ">{grabData?.name}</p>
                </td>
                <td  className="w-[300px] px-4 py-4 text-[14px] text-center text-[#1F1F36] font-600 font-semibold">Jun 10 - Jun 23</td>
              </tr>
              <tr>
                <td  className="w-[300px] flex items-center gap-4 px-4 py-4 text-[14px] text-left text-[#1F1F36] font-600 font-semibold ">
                <img src={grabData?.picture} alt="" className="w-[40px] rounded-full"/>
                <p className="capitalize ">{grabData?.name}</p>
                </td>
                <td  className="w-[300px] px-4 py-4 text-[14px] text-center text-[#1F1F36] font-600 font-semibold">Jun 12 - Jun 26</td>
              </tr>
              
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
