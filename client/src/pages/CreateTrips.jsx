import React from "react";
import { useSelector } from "react-redux";
import plus from "../assets/plus.svg";
import googleMap from "../assets/google-map.png";
import generate from "../assets/generate.svg";
import { useNavigate } from "react-router-dom";


const CreateTrips = () => {
  const grabData = useSelector((state) => state.authRed.user);
  const navigate = useNavigate();
  console.log(grabData?.name);
  return (
    <div className="md:p-14 p-6 w-full gap-4 flex flex-col">
      <div className="flex items-start flex-col md:flex-row md:justify-between gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#1F1F36] font-600 font-semibold text-[24px] ">
            Add new Trips
          </h2>
          <p className="text-[#7F7E83] text-[18px] ">
            View and generate AI travel plans
          </p>
        </div>
        <div className="flex items-center cursor-pointer justify-center w-full bg-[#256FF1]/20 md:w-[233px] h-[44px] gap-3 rounded-[8px] text-white ">
          <img src={plus} alt="plus" />
          Add new user
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[700px] rounded-[8px] shadow bg-white flex flex-col  gap-5 p-5 ">
          <div className="">
            <label
              htmlFor="email"
              className="text-[#697386] text-[14px] font-600 "
            >
              Country or region
            </label>
            <div className="flex items-center justify-between py-[8px] px-4 border-b border-gray-200">
              <select
                name=""
                id=""
                className="w-full outline-none text-[#1A1F36]px-2 h-[48px] rounded-[8px] "
              >
                <option value="nigeria" defaultChecked>
                  Nigeria
                </option>
                <option value="america" defaultChecked>
                  America
                </option>
                <option value="india" defaultChecked>
                  India
                </option>
                <option value="korea" defaultChecked>
                  Korea
                </option>
                <option value="mecca" defaultChecked>
                  Mecca
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#697386] text-[14px] font-600 "
            >
              Duration
            </label>
            <input
              type="text"
              placeholder="Enter number of days (e.g., 5, 12)"
              className="w-full pl-4 outline-none shadow h-[48px] rounded-[8px] text-gray-500 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#697386] text-[14px] font-600 "
            >
              Group Type
            </label>
            <select
              name=""
              id=""
              className="w-full outline-none text-[#1A1F36]px-2 h-[48px] shadow px-2 rounded-[8px] text-[#7F7E83] "
            >
              <option value="nigeria" defaultChecked>
                single
              </option>
              <option value="america" defaultChecked>
                with family
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#697386] text-[14px] font-600 "
            >
              Travel style
            </label>
            <select
              name=""
              id=""
              className="w-full outline-none text-[#1A1F36]px-2 h-[48px] shadow px-2 rounded-[8px] text-[#7F7E83] "
            >
              <option value="nigeria" defaultChecked>
                By Road
              </option>
              <option value="america" defaultChecked>
                By Plane
              </option>
              <option value="america" defaultChecked>
                By Train
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#697386] text-[14px] font-600 "
            >
              Interests
            </label>
            <select
              name=""
              id=""
              className="w-full outline-none text-[#1A1F36]px-2 h-[48px] shadow px-2 rounded-[8px] text-[#7F7E83] "
            >
              <option value="nigeria" defaultChecked>
                By Road
              </option>
              <option value="america" defaultChecked>
                By Plane
              </option>
              <option value="america" defaultChecked>
                By Train
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#697386] text-[14px] font-600 "
            >
              Budget Estimate
            </label>
            <select
              name=""
              id=""
              className="w-full outline-none text-[#1A1F36]px-2 h-[48px] shadow px-2 rounded-[8px] text-[#7F7E83] "
            >
              <option value="nigeria" defaultChecked>
                By Road
              </option>
              <option value="america" defaultChecked>
                By Plane
              </option>
              <option value="america" defaultChecked>
                By Train
              </option>
            </select>
          </div>
          {/* map */}
          <div className="flex flex-col gap-3 py-3 border-b border-gray-200">
            <p className="text-[#697386] text-[14px] font-600 ">
              Location on map
            </p>
            <div className="w-full">
              <img
                src={googleMap}
                alt="google map"
                className="w-full object-cover "
              />
            </div>
          </div>
          {/* button */}
          <div onClick={() => navigate("/admin/create-trip/ai-trips")} className="flex items-center cursor-pointer justify-center w-full bg-[#256FF1] h-[44px] gap-3 rounded-[8px] text-white ">
            <img src={generate} alt="plus" />
            Generate a trip
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrips;
