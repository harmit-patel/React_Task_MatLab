import React from "react";

const StepItem = ({ stepNumber, title, children, iconSrc }) => {
  return (
    // full row, text centered, icon locked to the right
    <div className="flex items-start justify-center gap-6">
      {/* fixed icon column on the right */}
      <div className="flex h-12 w-12 flex-none items-center justify-center">
        {iconSrc ? (
          <img src={iconSrc} alt="" className="h-8 w-8" />
        ) : null}
      </div>

      {/* text block – same width for all steps so icons align vertically */}
      <div className="w-[420px] text-right">
        <span className="mb-2 block text-[14px] font-normal text-[#F54387]">
          שלב {stepNumber}
        </span>

        <h3 className="mb-2 text-[22px] font-semibold text-[#040035]">
          {title}
        </h3>

        <p className="text-[15px] leading-relaxed text-[#040035]">
          {children}
        </p>
      </div>
    </div>
  );
};

export default StepItem;
