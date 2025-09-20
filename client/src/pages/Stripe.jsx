import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { destinations } from "../assets/allData";
import { useEffect } from "react";
import homeAssets from "../assets/allData";
import arrow_left from "../assets/arr_left.svg";
import applePay from "../assets/applePay.svg";
import americaExpress from "../assets/americaExpress.svg";
import masterCard from "../assets/masterCard.svg";
import visa from "../assets/visa.svg";
import discover from "../assets/discover.svg";

const Stripe = () => {
  const param = useParams();
  const { id } = param;
  const [grabData, setGrabData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getHoldOfId = destinations.find((item) => item.id === parseInt(id));
    setGrabData(getHoldOfId);
  }, [id]);

  return (
    <div className="bg-[#F9FBFC]">
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 px-6  h-screen">
        <div className=" flex flex-col justify-between gap-10 py-20 ">
          <div className="flex flex-col">
            <div>
              <div className="flex items-center gap-3">
                <img src={arrow_left} alt="" />
                <div
                  onClick={navigate("/home")}
                  className="flex items-center gap-3 "
                >
                  <img src={homeAssets.tourvistoLogo} alt="tourvisto logo" />
                  <p className=" text-[#1F1F36] font-700 font-bold leading-[24px] text-[24px] text-[Plus Jakarta Sans] ">
                    Tourvisto
                  </p>
                </div>
              </div>
              <div className="flex flex-col pt-10">
                <h2 className="text-[#2E2C48] text-[18px]">{`Pay 5-Day ${grabData?.title} Highlights: Culture, Food and Adventure`}</h2>
                <h1 className="text-[#1F1F36] font-semibold text-[40px]">
                  $ {grabData?.price?.toFixed(2)}
                </h1>
              </div>
            </div>
            <div className="flex flex-col pt-8">
              <img
                src={grabData?.image}
                alt="card image"
                className="w-[500px] rounded-[12px]"
              />
              <div className="flex flex-col pt-10">
                <h2 className="font-600 text-[20px] font-600 font-semibold leading-[26px] text-[#1F1F36] ">
                  5-Day {grabData?.title}
                </h2>
                <p className="text-[#7F7E83] text-[16px] leading-[20px] ">
                  {grabData?.location}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 border-r pr-10 border-[#8792A2]">
              <p className="text-[#8792A2] font-500 text-[12px] tracking-[1.5px] leading-[22px] ">
                Powered by
              </p>
              <p className="text-[#8792A2] font-bold text-[14px] ">stripe</p>
            </div>
            <div className="flex items-center gap-10 ">
              <p className="text-[#8792A2] font-500 text-[12px] leading-[22px] ">
                Terms
              </p>
              <p className="text-[#8792A2] font-500 text-[12px] leading-[22px] ">
                Privacy
              </p>
            </div>
          </div>
        </div>

        {/* second content here */}
        <div className="w-full bg-white shadow-md py-20 px-6 md:px-20 flex flex-col">
          <button className="flex items-center justify-center h-[42px] bg-black rounded-[4px]">
            <img src={applePay} alt="apple pay" />
          </button>
          <p className="text-center text-[#8792A2] font-[16px] py-6 ">
            Or pay with card
          </p>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[#697386] text-[14px] font-600 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full pl-4 outline-none shadow h-[40px] rounded-[8px] text-gray-500 "
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-[#697386] text-[14px] font-600 "
              >
                Country or region
              </label>
              <div className=" bg-white shadow-md rounded-sm">
                <div className="flex items-center justify-between py-[6px] px-4 border-b border-gray-200">
                  <input
                    type="text"
                    placeholder="+ 234-012-345"
                    className="w-2/3 outline-none"
                  />
                  <div className="flex items-center gap-2">
                    <img src={visa} alt="" className="h-[16px]" />
                    <img src={masterCard} alt="" className="h-[16px]" />
                    <img src={americaExpress} alt="" className="h-[16px]" />
                    <img src={discover} alt="" className="h-[16px]" />
                  </div>
                </div>
                <div className="flex items-center w-full py-[6px] px-4">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="w-1/2  outline-none border-r border-gray-400"
                  />
                  <div className="flex items-center w-1/2 ">
                    <div className="flex items-center justify-between gap-14 ">
                      <input
                        type="text"
                        placeholder="CVC"
                        className=" outline-none w-full pl-4"
                      />
                      <div className="flex items-center gap-2">
                        <img src={visa} alt="" className="h-[16px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[#697386] text-[14px] font-600 "
              >
                Name on card
              </label>
              <input
                type="email"
                id="email"
                className="w-full pl-4 outline-none shadow h-[40px] rounded-[8px] text-gray-500 "
              />
            </div>

            {/* country region */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-[#697386] text-[14px] font-600 "
              >
                Country or region
              </label>
              <div className=" bg-white shadow-md rounded-sm">
                <div className="flex items-center justify-between py-[8px] px-4 border-b border-gray-200">
                  <select
                    name=""
                    id=""
                    className="w-full outline-none text-[#1A1F36]"
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
                <div className="flex items-center w-full py-[8px] px-4">
                  <input
                    type="number"
                    placeholder="ZIP"
                    className="w-full  outline-none"
                  />
                </div>
              </div>
            </div>

            {/* pay button */}
            <button
              onClick={() => navigate("/thankyou")}
              className="flex cursor-pointer items-center font-500 text-[18px] text-white/40 justify-center h-[42px] bg-[#3C4257] rounded-[4px]"
            >
              Pay $ {grabData?.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stripe;
