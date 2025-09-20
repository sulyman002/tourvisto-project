import React, { useState } from "react";
import { useSelector } from "react-redux";
import plus from "../assets/plus.svg";
import users from "../assets/dummyTableData.js";
import deleteContainer from "../assets/delete.svg";
import arrowRight from "../assets/arrow-right.svg"
import arrowLeft from "../assets/arrow-left.svg"




const AllUsers = () => {
  const grabData = useSelector((state) => state.authRed.user);
  const [currentPage, setCurrentPage] = useState(1)
  // const navigate = useNavigate();
  console.log(grabData?.name);
  return (
    <div className="md:p-14 p-6 w-full">
      <div className="flex items-start flex-col md:flex-row md:justify-between gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#1F1F36] font-600 font-semibold text-[24px] ">
            Manage Users
          </h2>
          <p className="text-[#7F7E83] text-[18px] ">
            Filter, sort, and access detailed user profiles
          </p>
        </div>
        <div className="flex items-center justify-center w-full bg-[#256FF1] md:w-[233px] h-[44px] gap-3 rounded-[8px] text-white ">
          <img src={plus} alt="plus" />
          Add new user
        </div>
      </div>

      <div className=" py-10 flex flex-col overflow-x-auto">
        <table>
          <thead>
            <tr className="uppercase text-[#7F7E83] text-[12px] ">
              <th className="p-4 w-[300px] text-left">Name</th>
              <th className="p-4 w-[250px] text-left">Email</th>
              <th className="p-4 w-[180px] text-left">Date Joined</th>
              <th className="p-4 w-[180px] text-left">Itnerary Created</th>
              <th className="p-4 w-[180px] text-left">status Created</th>
              <th className="p-4 w-[180px] text-left"></th>
            </tr>
          </thead>
          <tbody>
            {users.slice((currentPage - 1) * 9, currentPage * 9).map((item, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-6">
                    <img
                      src={item?.image}
                      alt="profile"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <p className="text-[#1F1F36] text-[14px] font-bold">
                      {item?.name}
                    </p>
                  </div>
                </td>

                <td className="py-4 px-4">{item?.email}</td>
                <td className="py-4 px-4">{item?.date_joined}</td>
                <td className="py-4 px-4">{item?.itinerary_created}</td>
                <td className="py-4 px-4 capitalize">{item?.status_checked}</td>
                <td className="py-4 px-4 text-right">
                  <img src={deleteContainer} alt="delete container" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* pagination */}
       

<div className="w-full flex items-center flex-col md:flex-row justify-between  text-[#2E2C48] mt-6 gap-4">
        <button onClick={() => {
          setCurrentPage(Math.max(currentPage -1),1)
          window.scrollTo({top: 3600, behavior: "smooth"})
          }}  className=" font-medium text-[14px] flex items-center gap-2 text-[#2E2C48] bg-white shadow rounded-md px-[14px] py-[8px] ">
            <img src={arrowLeft} alt="" />
            Previous
        </button>
        <div className="flex gap-3">
            {Array.from({length:Math.ceil(users.length/9)}).map((_,index) => (
                <button key={index} onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo({top: 3600})
                }} className={`cursor-pointer flex shadow flex-row items-center text-[14px] ${currentPage === index + 1 ? "bg-[#256FF1] text-white " : "text-[#2E2C48] bg-white " } font-medium justify-center gap-10 h-[40px] w-[40px] rounded-md`}>{index + 1}</button>
            ))}
        </div>
        <button  onClick={() => {
          setCurrentPage(Math.min(currentPage + 1),1)
          window.scrollTo({top: 3600, behavior: "smooth"})

        }}  className="font-medium text-[14px] flex items-center gap-2 shadow rounded-md px-[14px] py-[8px]">
            <img src={arrowRight} alt="" />
            Previous
        </button>




        </div>
      </div>
    </div>
  );
};

export default AllUsers;
