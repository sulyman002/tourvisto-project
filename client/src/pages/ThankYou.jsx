import React from "react";
import thankyouBg from "../assets/confitte.png";
import Nav from "../component/Nav";
import check from "../assets/check.png";
import arrowLeft from "../assets/arrow-left.svg"
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="mx-auto container">
        {" "}
        <Nav />
      </div>
      <div
        className="h-screen bg-cover flex flex-col items-center justify-center gap-4 "
        style={{ backgroundImage: `url(${thankyouBg})` }}
      >
        <div className="w-[448px] flex flex-col items-center ">
          <img
            src={check}
            alt="success check"
            className="w-[100px] h-[100px] "
          />
        
        <h2 className="font-600 font-semibold text-[30px] text-[#1F1F36] ">
          Thank You & Welcome Aboard!
        </h2>
        <p className="text-[18px] leading-[30px] text-center py-2 ">
          Your trip’s booked — can’t wait to have you on this adventure! 🌍️ Get
          ready to explore & make memories.✨
        </p>
        <div className="flex flex-col gap-3 w-full">
          <button className="bg-[#256FF1] py-2 rounded-[8px] text-white font-600 font-semibold text-[16px]  ">
            View trip details
          </button>
          <button onClick={() => {
            navigate("/home");
            window.scrollTo({top: 0, behavior: "smooth"});
          }} className="text-[#1F1F36] py-2 rounded-[8px] shadow-md bg-white font-600 font-semibold text-[16px] flex items-center justify-center  ">
            <img src={arrowLeft} alt="arrow left" />
            Return to homepage
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
