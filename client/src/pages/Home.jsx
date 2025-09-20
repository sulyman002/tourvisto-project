import React from "react";
import homeAssets from "../assets/allData.js";
import Nav from "../component/Nav.jsx";
import FeaturedTravel from "../component/FeaturedTravel.jsx";
import HandPicked from "../component/HandPicked.jsx";
import Footer from "../component/Footer.jsx";


const Home = () => {

  return (
    <div className="bg-[#F9FBFC]">
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-right "
        style={{
          backgroundImage: `linear-gradient(to right, #CFF1FFCC, #FFFFFF00), url(${homeAssets.hero_img})`,
        }}
      >
        <div className="container mx-auto">
          <Nav />
          <div className=" px-6 mt-60 md:w-[450px] lg:w-[540px] gap-4 flex flex-col ">
            <h1 className="font-700 font-bold md:text-[72px] text-[60px] md:leading-[110px] leading-[80px] text-[#1F1F36]">
              Plan Your <br /> Trip with Ease
            </h1>
            <p className="text-[18px] leading-[30px] text-[#2E2C48] ">Customize your travel itinerary in minutes—pick your destination, set your preferences, and explore with confidence.</p>
              <div><a  href="#handPicked" className="bg-[#256FF1] px-10 py-3 text-white font-semibold text-[18px] leading-[24px] rounded-md ">Get Started</a></div>
          </div>
        </div>
        
        
      </div>
      <div className="container mx-auto">
          <FeaturedTravel />
          <HandPicked />
          <Footer />

        </div>
    </div>
  );
};

export default Home;
