import React from "react";

const FlipCard = ({ front, back, className = "" }) => {
  return (
    <div className={`group [perspective:1000px] ${className}`}>
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 h-full w-full rounded-[25px] bg-white shadow-[4px_4px_20.4px_rgba(0,0,0,0.05)] [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 h-full w-full rounded-[25px] bg-white shadow-[4px_4px_20.4px_rgba(0,0,0,0.05)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
