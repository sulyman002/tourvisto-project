import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { destinations } from "../assets/allData";
import Nav from "../component/Nav";
import location from "../assets/handPicked-trip/location.svg";
import arrowLeft from "../assets/arrow-left.svg";
import calender from "../assets/calendar.svg";
import additional1 from "../assets/handPicked-trip/additional1.png";
import additional2 from "../assets/handPicked-trip/additional2.png";
import star from "../assets/handPicked-trip/stars.png";
import map from "../assets/map.png";

const TripDetails = () => {
  const param = useParams();
  const [singleData, setSingleData] = useState(null);
  const navigate = useNavigate();

  const { id } = param;
  useEffect(() => {
    const findId = destinations.find((item) => item.id === parseInt(id));
    setSingleData(findId);
  }, [id]);

  return (
    <div className="container mx-auto bg-[#F9FBFC]">
      <Nav />
      {/* big container */}
      <div className="flex flex-col md:flex-row gap-14 items-start px-6">
        {/* button */}
        <button
        onClick={() => navigate(`/trip/${id}`)}
          href=""
          className=" cursor-pointer font-medium text-[14px] flex items-center justify-center gap-2 text-[#2E2C48] bg-white shadow-lg rounded-md h-[50px] w-[147px] "
        >
          <img src={arrowLeft} alt="" />
          Go Back
        </button>
        {/* big content */}
        <div className="w-full">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#1F1F36] font-semibold font-600 text-[40px] leading-[44px] ">
              5-Day Japan Highlights: Culture, Food <br /> and Adventure
            </h1>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <img src={calender} alt="calender" />
                <span className="text-[#7F7E83] text-[18px]">5 day plan</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={location} alt="calender" />
                <span className="text-[#7F7E83] text-[18px]">
                  {singleData?.location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row py-8 ">
            <div className="md:w-2/3 flex ">
              <img
                src={singleData?.image}
                alt=""
                className="w-full object-cover rounded-[16px]  "
              />
            </div>
            <div className="md:w-1/3 flex flex-col gap-6">
              <img
                src={additional1}
                alt="additional pics"
                className="w-full object-cover rounded-[16px] "
              />
              <img
                src={additional2}
                alt="additional pics"
                className="w-full object-cover rounded-[16px]  "
              />
            </div>
          </div>
          <div className="flex items-center gap-6 py-6">
            {/* TAGS */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
             <div
              className={`px-[20px] text-[16px] py-[4px] bg-[#FFF4ED] text-[#B93815] rounded-full`}
            >
              Sport
            </div>
            <div
              className={`px-[20px] text-[16px] py-[4px] text-[#175CD3] bg-[#E9F3FB] rounded-full`}
            >
              Beach
            </div>
            <div
              className={`px-[20px] text-[16px] py-[4px] text-[#363F72] bg-[#F8F9FC] rounded-full`}
            >
              Budget
            </div>
            <div
              className={`px-[20px] text-[16px] py-[4px] text-[#027A48] bg-[#ECFDF3] rounded-full`}
            >
              Mountains
            </div>
           </div>

            {/* TAGS END */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src={star} alt="5 stars" className="h-[17px]" />
              <div className="text-[#B93815] font-500 font-medium text-[12px] leading-[12px] bg-[#FFF4ED] px-[20px] py-[10px] rounded-full">
                4.9 / 5.0
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between py-6">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="font-600 font-semibold text-[30px] leading-[36px] text-[#1F1F36] ">
                5-Day {singleData?.title}
              </h2>
              <p className="text-[24px] text-[#7F7E83] ">
                {singleData?.location}
              </p>
            </div>
            <div className="font-semibold font-600 text-[20px] z-10 flex items-center justify-center shadow px-[16px] py-[4px] bg-white rounded-full text-black ">
              ${singleData?.price}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[18px] leading-[30px] text-[#2E2C48] ">
              Experience the best of Japan in 5 unforgettable days, traveling
              through Tokyo, Kyoto, and Osaka. From the bustling streets of
              Shibuya to the historic temples of Kyoto and the vibrant food
              scene in Osaka, this itinerary blends culture, sightseeing, and
              local flavors. <br /> <br />
              Relax in a Hakone onsen, explore ancient shrines, and indulge in
              authentic Japanese cuisine—all while enjoying seamless travel on
              the Shinkansen. 🚄✨
            </p>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="font-600 font-semibold text-[20px] text-[#2E2C48] ">
                  Day 1: Arrival in Tokyo & Shibuya Exploration
                </h2>
                <ul className="text-[18px] list-disc pl-8 leading-[30px]  text-[#2E2C48] space-y-3 ">
                  <li className="dot">
                    Arrive at Narita/Haneda Airport & check-in at hotel
                  </li>
                  <li>Visit Shibuya Crossing & Hachiko Statue</li>
                  <li>
                    Explore Shinjuku for city views at Tokyo Metropolitan Govt.
                    Building
                  </li>
                  <li>Dinner at an Izakaya in Golden Gai</li>
                </ul>
              </div>
              {/* two */}
              <div className="flex flex-col gap-4">
                <h2 className="font-600 font-semibold text-[20px] text-[#2E2C48] ">
                  Day 2: Tokyo Sightseeing & Culture
                </h2>
                <ul className="text-[18px] list-disc pl-8 leading-[30px]  text-[#2E2C48] space-y-3 ">
                  <li className="dot">
                    Evening: Walk around Tokyo Tower & Roppongi
                  </li>
                  <li>Evening: Walk around Tokyo Tower & Roppongi</li>
                  <li>Evening: Walk around Tokyo Tower & Roppongi</li>
                </ul>
              </div>
              {/* three */}
              <div className="flex flex-col gap-4">
                <h2 className="font-600 font-semibold text-[20px] text-[#2E2C48] ">
                  Day 3: Day Trip to Hakone (Mt. Fuji Views)
                </h2>
                <ul className="text-[18px] list-disc pl-8 leading-[30px]  text-[#2E2C48] space-y-3 ">
                  <li className="dot">
                    Take the Hakone Ropeway for a scenic view
                  </li>
                  <li>Relax in an onsen (hot spring)</li>
                  <li>Visit Lake Ashi & see Fuji in the distance</li>
                </ul>
              </div>
              {/* four */}
              <div className="flex flex-col gap-4">
                <h2 className="font-600 font-semibold text-[20px] text-[#2E2C48] ">
                  Day 4: Kyoto – Temples & History
                </h2>

                <ul className="text-[18px] list-disc pl-8 leading-[30px]  text-[#2E2C48] space-y-3 ">
                  <li className="dot">
                    Travel to Kyoto via Shinkansen (bullet train)
                  </li>
                  <li>Visit Fushimi Inari Shrine (red torii gates)</li>
                  <li>Explore Gion (Geisha district) in the evening</li>
                </ul>
              </div>
              {/* five */}
              <div className="flex flex-col gap-4">
                <h2 className="font-600 font-semibold text-[20px] text-[#2E2C48] ">
                  Day 5: Shopping & Departure
                </h2>
                <ul className="text-[18px] list-disc pl-8 leading-[30px]  text-[#2E2C48] space-y-3 ">
                  <li className="dot">Last-minute shopping in Shinsaibashi</li>
                  <li>Head to Kansai/Narita Airport for departure</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-10 pt-8">
              <div className="flex flex-col gap-4">
                <h2 className="font-600 font-semibold text-[20px] text-[#2E2C48] ">
                  Best Time to Visit:
                </h2>
                <ul className="text-[18px] list-disc pl-8 leading-[30px]  text-[#2E2C48] space-y-3 ">
                  <li className="dot">
                    🌸 Spring (March–May): Cherry blossoms in full bloom, mild
                    temperatures.
                  </li>
                  <li>
                    🍁 Autumn (September–November): Beautiful fall foliage,
                    comfortable weather.
                  </li>
                  <li>
                    ❄ Winter (December–February): Quieter, with snow-covered
                    temples creating a magical scene.
                  </li>
                  <li>
                    ☀ Summer (June–August): Hot & humid but lively with
                    festivals like Gion Matsuri.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-600 font-semibold text-[20px] text-[#2E2C48] ">
                  Weather Info:
                </h2>
                <ul className="text-[18px] list-disc pl-8 leading-[30px]  text-[#2E2C48] space-y-3 ">
                  <li className="dot">Spring: 10°C – 20°C (50°F – 68°F)</li>
                  <li>Summer: 22°C – 33°C (72°F – 91°F)</li>
                  <li>Autumn: 12°C – 25°C (54°F – 77°F)</li>
                  <li>Winter: 0°C – 10°C (32°F – 50°F)</li>
                </ul>
              </div>
            </div>

            <div className="w-full flex flex-col gap-10 ">
              <div className="">
                {" "}
                <img
                  src={map}
                  alt="static map"
                  className="h-[405px] object-cover w-full rounded-[16px]"
                />
              </div>
              <button
                onClick={() => navigate(`/stripe/${singleData.id}`)}
                className="cursor-pointer bg-[#256FF1] text-[16px] font-semibold font-600 flex rounded-[8px] items-center gap-3 justify-center py-[14px] text-white "
              >
                Pay and join trip{" "}
                <span className="font-semibold font-600 text-[14px] z-10 flex items-center justify-center shadow w-[54px] h-[22px] bg-white rounded-full text-black ">
                  ${singleData?.price}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* popular trip */}

      <div className="flex flex-col gap-6 px-6 py-16">
        <div>
          <h1 className="text-[24px] font-semibold text-[#1F1F36] ">
            Popular Trips
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.slice(0, 4).map((card, index) => (
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
