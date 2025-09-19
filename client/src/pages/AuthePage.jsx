import React, { useEffect } from "react";
import authBg from "../assets/authBg.png";
import { jwtDecode } from "jwt-decode";
import tourvistoLogo from "../assets/tourvistoLogo.svg";
import { toast } from "react-toastify";
import { setUser } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const handleResponseData = (resp) => {
      try {
        const userData = jwtDecode(resp.credential);
        console.log(`User data:`, userData.email);
        dispatch(setUser(userData));
        const check = userData.email.includes("@gmail.com");
        if(check) {
          navigate("/home")
        }else {
          toast.error("Only Gmail accounts are allowed")
        }

        toast.success(`signed into: ${userData?.email}`);
        console.log(userData);
      } catch (error) {
        console.error("please try again");
        toast.error(error.message);
      }
    };

    /* global google */
    google.accounts.id.initialize({
      client_id:
        "285617373993-69o262siv3m4qth6dks593gn781br2ok.apps.googleusercontent.com",
      callback: handleResponseData,
    });

    google.accounts.id.renderButton(document.getElementById("googleBtn"), {
      theme: "outline",
      size: "large",
    });
  }, [dispatch, navigate]);


 

  return (
    <div>
      <div
        className="w-full h-screen relative bg-cover bg-top flex items-center justify-center"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center w-[495px] px-4">
          <div className="bg-white rounded-[20px] py-6 px-8 flex flex-col gap-6 ">
            <div className="flex items-center justify-center gap-2">
              <img src={tourvistoLogo} alt="tourvisto logo" />
              <h2 className="text-[#1F1F36] font-bold font-700 leading-[28px] text-[28px] ">
                Tourvisto
              </h2>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-2 items-center justify-center ">
                <h2 className="font-600 text-[#1F1F36] font-semibold text-[28px] text-center ">
                  Admin Dashboard Login
                </h2>
                <p className="text-[18px] leading-[28px]  text-[#7F7E83] px-8 text-center ">
                  Sign in with Google to manage destinations, itineraries, and
                  user activity with ease.
                </p>
              </div>
              <div id="googleBtn"></div>

              {/* <button
                id="googleBtn"
                
                className=" text-[18px] cursor-pointer w-full rounded-[8px] font-semibold py-2 text-white bg-[#256FF1] "
              >
                Sign in with Google
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthePage;
