import React from "react";

const PinkStatCard = ({ value, label }) => {
  return (
    <div
      className="w-[428px] h-[190px] rounded-[25px] bg-[#F14285] shadow-[4px_4px_20.4px_rgba(0,0,0,0.05)] px-[41px] py-[30px] flex flex-col justify-center items-end gap-[7.5px]"
      style={{ direction: "rtl" }}
    >
      <div className="text-white text-[48px] font-bold leading-none">
        {value}
      </div>
      <div className="text-white text-[18px] font-normal">
        {label}
      </div>
    </div>
  );
};

export default PinkStatCard;
