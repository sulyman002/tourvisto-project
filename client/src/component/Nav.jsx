import React, { useEffect } from "react";
import homeAssets from "../assets/allData";
import { useSelector, useDispatch } from "react-redux";

import { setUser } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.authRed.user);
  const getProfilePicture = user?.picture;
  console.log(getProfilePicture);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(setUser(null));
  };
  return (
    <div className="py-8 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <img src={homeAssets.tourvistoLogo} alt="tourvisto logo" />
        <p className=" text-[#1F1F36] font-700 font-bold leading-[24px] text-[24px] text-[Plus Jakarta Sans] ">
          Tourvisto
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p onClick={() => {
          navigate("/admin/dashboard")
          window.scrollTo({top: 0, behavior: "smooth"})
        }} className=" text-[18px] leading-[24px] text-[#292D32] cursor-pointer hover:text-gray-200 ">Admin Panel</p>
        <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center ">
          <img
            src={getProfilePicture || homeAssets.logout}
            alt="user profile"
            className="w-[34px] rounded-full"
          />
        </div>
       
        <div
          onClick={() => handleLogout()}
          className="cursor-pointer h-[40px] w-[40px] bg-white/30 rounded-full flex items-center justify-center "
        >
          <img src={homeAssets.logout} alt="logout" className="w-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
