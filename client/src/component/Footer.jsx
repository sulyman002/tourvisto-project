import React from 'react';
import homeAssets from '../assets/allData';

const Footer = () => {
  return (
    <div className="py-8 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src={homeAssets.tourvistoLogo} alt="tourvisto logo" />
            <p className=" text-[#1F1F36] font-700 font-bold leading-[24px] text-[24px] text-[Plus Jakarta Sans] ">
              Tourvisto
            </p>
          </div>
          <div className='text-[#7F7E83] text-[16px] leading-[24px] flex items-center gap-8 '>
            <p className='cursor-pointer'>Terms & Condition</p>
            <p className='cursor-pointer'>Privacy Policy</p>
          </div>
         
        </div>
  )
}

export default Footer