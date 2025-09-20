import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import homeAssets from "../assets/allData";
import { useSelector } from "react-redux";
import { setUser } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import hamburger from "../assets/hamburger.svg";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const grabData = useSelector((state) => state.authRed.user);
  const handleLogout = () => {
    dispatch(setUser(null));
  };

  useEffect(() => {
    if (grabData === null) {
      navigate("/");
    }
  }, [grabData, navigate]);

  console.log(grabData?.name);
  const [changeAdmin, setChangeAdmin] = useState("dashboard");

  const [openNav, setOpenNav] = useState(false);
  const handleToggleNav = () => {
    setOpenNav(!openNav);
    console.log("user click me");
  };

  return (
    <div className="bg-[#F9FBFC] flex flex-col md:flex-row h-screen w-full">
      {/* common in admin */}
      <div className="w-1/5 bg-gray-300 h-screen px-8 py-10 hidden md:flex ">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 ">
              <img src={homeAssets.tourvistoLogo} alt="tourvisto logo" />
              <p className=" text-[#1F1F36] font-700 font-bold leading-[24px] text-[24px] text-[Plus Jakarta Sans] ">
                Tourvisto
              </p>
            </div>
            {/* three tabs */}
            <div className="flex flex-col py-6 gap-5">
              <button
                name="dashboard"
                onClick={(event) => {
                  setChangeAdmin(event.target.name);
                  console.log(event.target);
                  navigate("dashboard");
                }}
                className={`flex items-center gap-3 cursor-pointer justify-start pl-10 py-4 rounded-[10px] font-600 font-semibold text-[18px] leading-[24px] ${
                  changeAdmin === "dashboard"
                    ? "bg-[#256FF1]  text-white "
                    : "text-[#7F7E83] "
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    opacity="0.34"
                    d="M10 15V12.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    d="M8.39172 2.34998L2.61672 6.97498C1.96672 7.49164 1.55006 8.58331 1.69172 9.39998L2.80006 16.0333C3.00006 17.2166 4.13339 18.175 5.33339 18.175H14.6667C15.8584 18.175 17.0001 17.2083 17.2001 16.0333L18.3084 9.39998C18.4417 8.58331 18.0251 7.49164 17.3834 6.97498L11.6084 2.35831C10.7167 1.64164 9.27506 1.64164 8.39172 2.34998Z"
                    stroke="white"
                    //   {changeAdmin === Dashboard ? "white" : "[#7F7E83]"}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </svg>
                Dashboard
              </button>
              <button
                name="allUsers"
                onClick={(event) => {
                  setChangeAdmin(event.target.name);
                  console.log(event.target);
                  navigate("all-users");
                }}
                className={`flex items-center gap-3 cursor-pointer justify-start pl-10 py-4 rounded-[10px] font-600 font-semibold text-[18px] leading-[24px] ${
                  changeAdmin === "allUsers"
                    ? "bg-[#256FF1]  text-white "
                    : "text-[#7F7E83] "
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.63338 9.05835C7.55005 9.05002 7.45005 9.05002 7.35838 9.05835C5.37505 8.99169 3.80005 7.36669 3.80005 5.36669C3.80005 3.32502 5.45005 1.66669 7.50005 1.66669C9.54172 1.66669 11.2 3.32502 11.2 5.36669C11.1917 7.36669 9.61671 8.99169 7.63338 9.05835Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M13.675 3.33331C15.2916 3.33331 16.5917 4.64165 16.5917 6.24998C16.5917 7.82498 15.3417 9.10831 13.7833 9.16665C13.7167 9.15831 13.6417 9.15831 13.5667 9.16665"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.46672 12.1333C1.45006 13.4833 1.45006 15.6833 3.46672 17.025C5.75839 18.5583 9.51672 18.5583 11.8084 17.025C13.8251 15.675 13.8251 13.475 11.8084 12.1333C9.52506 10.6083 5.76672 10.6083 3.46672 12.1333Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M15.2833 16.6667C15.8833 16.5417 16.45 16.3 16.9167 15.9417C18.2167 14.9667 18.2167 13.3584 16.9167 12.3834C16.4583 12.0334 15.9 11.8 15.3083 11.6667"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                All Users
              </button>
              <button
                name="aitrip"
                onClick={(event) => {
                  setChangeAdmin(event.target.name);
                  console.log(event.target);
                  navigate("ai-trips");
                }}
                className={`flex items-center gap-3 cursor-pointer justify-start pl-10 py-4 rounded-[10px] font-600 font-semibold text-[18px] leading-[24px] ${
                  changeAdmin === "aitrip"
                    ? "bg-[#256FF1]  text-white "
                    : "text-[#7F7E83] "
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.90833 6.48335V14.5917C1.90833 16.175 3.03333 16.825 4.39999 16.0417L6.35833 14.925C6.78333 14.6834 7.49166 14.6584 7.93333 14.8834L12.3083 17.075C12.75 17.2917 13.4583 17.275 13.8833 17.0334L17.4917 14.9667C17.95 14.7 18.3333 14.05 18.3333 13.5167V5.40835C18.3333 3.82502 17.2083 3.17502 15.8417 3.95835L13.8833 5.07502C13.4583 5.31669 12.75 5.34169 12.3083 5.11669L7.93333 2.93335C7.49166 2.71669 6.78333 2.73335 6.35833 2.97502L2.74999 5.04169C2.28333 5.30835 1.90833 5.95835 1.90833 6.48335Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M7.1333 3.33331V14.1666"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M13.1083 5.51666V16.6667"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                AI Trips
              </button>
            </div>
          </div>

          {/* profile */}
          <div className="flex items-center gap-2">
            <div className="rounded-full">
              <img
                src={grabData?.picture}
                alt="profile picture"
                className="w-[34px] rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-600 font-semibold text-[16px] text-[#141627] ">
                {grabData?.name}
              </p>
              <p className="text-[#7F7E83] text-[14px]  ">{grabData?.email}</p>
            </div>
            <div
              onClick={() => handleLogout()}
              className="cursor-pointer h-[40px] w-[40px]  rounded-full flex items-center justify-center "
            >
              <img src={homeAssets.logout} alt="logout" className="w-[24px]" />
            </div>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className="md:hidden w-full px-6 py-8 flex items-center justify-between bg-white shadow-md ">
        <div className="flex items-center gap-3 ">
          <img src={homeAssets.tourvistoLogo} alt="tourvisto logo" />
          <p className=" text-[#1F1F36] font-700 font-bold leading-[24px] text-[24px] text-[Plus Jakarta Sans] ">
            Tourvisto
          </p>
        </div>
        <div onClick={() => handleToggleNav()} className="">
          <img src={hamburger} alt="hamburger" className="w-[24px]" />
        </div>
      </div>

      {/* Nav content */}

      <div
        className={`fixed w-3/4 bg-[#F9FBFC] z-20 top-0 left-0 h-screen flex-col p-10 shadow-lg transform transition-transform duration-1000 ${
          openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-gray-400 pb-6 ">
          <img src={homeAssets.tourvistoLogo} alt="tourvisto logo" />
          <p className=" text-[#1F1F36] font-700 font-bold leading-[24px] text-[24px] text-[Plus Jakarta Sans] ">
            Tourvisto
          </p>
        </div>
        {/* Three tabs */}
        <div className="flex h-full flex-col justify-between ">
          <div className="flex flex-col py-6 gap-5">
            <button
              name="dashboard"
              onClick={(event) => {
                setChangeAdmin(event.target.name);
                console.log(event.target);
                navigate("dashboard");
                setOpenNav(false);
              }}
              className={`flex items-center gap-3 cursor-pointer justify-start pl-10 py-4 rounded-[10px] font-600 font-semibold text-[18px] leading-[24px] ${
                changeAdmin === "dashboard"
                  ? "bg-[#256FF1]  text-white "
                  : "text-[#7F7E83] "
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  opacity="0.34"
                  d="M10 15V12.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M8.39172 2.34998L2.61672 6.97498C1.96672 7.49164 1.55006 8.58331 1.69172 9.39998L2.80006 16.0333C3.00006 17.2166 4.13339 18.175 5.33339 18.175H14.6667C15.8584 18.175 17.0001 17.2083 17.2001 16.0333L18.3084 9.39998C18.4417 8.58331 18.0251 7.49164 17.3834 6.97498L11.6084 2.35831C10.7167 1.64164 9.27506 1.64164 8.39172 2.34998Z"
                  stroke="white"
                  //   {changeAdmin === Dashboard ? "white" : "[#7F7E83]"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </svg>
              Dashboard
            </button>
            <button
              name="allUsers"
              onClick={(event) => {
                setChangeAdmin(event.target.name);
                console.log(event.target);
                navigate("all-users");
                setOpenNav(false);
              }}
              className={`flex items-center gap-3 cursor-pointer justify-start pl-10 py-4 rounded-[10px] font-600 font-semibold text-[18px] leading-[24px] ${
                changeAdmin === "allUsers"
                  ? "bg-[#256FF1]  text-white "
                  : "text-[#7F7E83] "
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.63338 9.05835C7.55005 9.05002 7.45005 9.05002 7.35838 9.05835C5.37505 8.99169 3.80005 7.36669 3.80005 5.36669C3.80005 3.32502 5.45005 1.66669 7.50005 1.66669C9.54172 1.66669 11.2 3.32502 11.2 5.36669C11.1917 7.36669 9.61671 8.99169 7.63338 9.05835Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M13.675 3.33331C15.2916 3.33331 16.5917 4.64165 16.5917 6.24998C16.5917 7.82498 15.3417 9.10831 13.7833 9.16665C13.7167 9.15831 13.6417 9.15831 13.5667 9.16665"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.46672 12.1333C1.45006 13.4833 1.45006 15.6833 3.46672 17.025C5.75839 18.5583 9.51672 18.5583 11.8084 17.025C13.8251 15.675 13.8251 13.475 11.8084 12.1333C9.52506 10.6083 5.76672 10.6083 3.46672 12.1333Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M15.2833 16.6667C15.8833 16.5417 16.45 16.3 16.9167 15.9417C18.2167 14.9667 18.2167 13.3584 16.9167 12.3834C16.4583 12.0334 15.9 11.8 15.3083 11.6667"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              All Users
            </button>
            <button
              name="aitrip"
              onClick={(event) => {
                setChangeAdmin(event.target.name);
                console.log(event.target);
                navigate("ai-trips");
                setOpenNav(false);
              }}
              className={`flex items-center gap-3 cursor-pointer justify-start pl-10 py-4 rounded-[10px] font-600 font-semibold text-[18px] leading-[24px] ${
                changeAdmin === "aitrip"
                  ? "bg-[#256FF1]  text-white "
                  : "text-[#7F7E83] "
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.90833 6.48335V14.5917C1.90833 16.175 3.03333 16.825 4.39999 16.0417L6.35833 14.925C6.78333 14.6834 7.49166 14.6584 7.93333 14.8834L12.3083 17.075C12.75 17.2917 13.4583 17.275 13.8833 17.0334L17.4917 14.9667C17.95 14.7 18.3333 14.05 18.3333 13.5167V5.40835C18.3333 3.82502 17.2083 3.17502 15.8417 3.95835L13.8833 5.07502C13.4583 5.31669 12.75 5.34169 12.3083 5.11669L7.93333 2.93335C7.49166 2.71669 6.78333 2.73335 6.35833 2.97502L2.74999 5.04169C2.28333 5.30835 1.90833 5.95835 1.90833 6.48335Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M7.1333 3.33331V14.1666"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M13.1083 5.51666V16.6667"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              AI Trips
            </button>
          </div>
          {/* Profile */}
          <div className="flex items-center gap-2 mb-10">
            <div className="rounded-full">
              <img
                src={grabData?.picture}
                alt="profile picture"
                className="w-[34px] rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-600 font-semibold text-[16px] text-[#141627] ">
                {grabData?.name}
              </p>
              <p className="text-[#7F7E83] text-[14px]  ">{grabData?.email}</p>
            </div>
            <div
              onClick={() => handleLogout()}
              className="cursor-pointer h-[40px] w-[40px]  rounded-full flex items-center justify-center "
            >
              <img src={homeAssets.logout} alt="logout" className="w-[24px]" />
            </div>
          </div>
        </div>
      </div>

      {/* outlet pages */}
      <div className="md:w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
