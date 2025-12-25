import React from "react";

const ReasonCard = ({ iconSrc, title, children }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* icon */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F54387]">
        {iconSrc && (
          <img src={iconSrc} alt="" className="h-8 w-8 object-contain" />
        )}
      </div>

      {/* title */}
      <h3 className="mb-2 text-[18px] font-semibold text-[#040035]">
        {title}
      </h3>

      {/* description */}
      <p className="max-w-xs text-[14px] leading-relaxed text-[#040035]">
        {children}
      </p>
    </div>
  );
};

export default ReasonCard;
