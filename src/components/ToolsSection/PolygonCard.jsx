import React from "react";
import Arrow from "../../assets/images/tools-arrow.svg";
const PolygonCard = ({
  className = "",
  badge,
  title,
  text,
  cta,
  blurred = false,
}) => {
  return (
    <div
      className={`absolute w-[465px] h-[465px] ${className}`}
      style={{ direction: "rtl" }}
    >
      {/* Polygon SVG with original shadow */}
      <svg
        width="461"
        height="517"
        viewBox="0 0 461 517"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g filter="url(#filter0_d_0_416)">
          <path
            d="M222.351 27.6795C228.539 24.1069 236.163 24.1069 242.351 27.6795L423.702 132.382C429.89 135.955 433.702 142.558 433.702 149.703V359.109C433.702 366.254 429.89 372.857 423.702 376.43L242.351 481.133C236.163 484.705 228.539 484.705 222.351 481.133L41 376.43C34.812 372.857 31 366.254 31 359.109V149.703C31 142.558 34.812 135.955 41 132.383L222.351 27.6795Z"
            fill="white"
            fillOpacity={blurred ? 0.7 : 1}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_0_416"
            x="0"
            y="0"
            width="460.702"
            height="516.812"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-2" dy="4" />
            <feGaussianBlur stdDeviation="14.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_416"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_0_416"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* content inside polygon */}
      <div
        className={`absolute inset-[110px] flex flex-col justify-between ${
          blurred ? "backdrop-blur-[25px]" : ""
        }`}
      >
        {/* badge */}
        <div className="flex justify-center">
          {badge && (
            <span className="px-3 py-1 text-xs rounded-full bg-[#F5F5FF] text-[#5261FF]">
              {badge}
            </span>
          )}
        </div>

        {/* title + text */}
        <div className="mt-4 flex flex-col gap-3">
          <h3 className="text-[22px] font-bold text-[#040035] text-right leading-snug">
            {title}
          </h3>
          {text && (
            <p className="text-[15px] leading-[1.6] text-[#7A7A9D] text-right">
              {text}
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-start mt-3">
          {cta && (
            <button className="flex items-center gap-2 text-[16px] font-bold text-[#F54387]">
              {/* text after */}
              <span className="inline-block">{cta}</span>
              {/* arrow first */}
              <img
                src={Arrow}
                alt=""
                className="w-[26px] h-[12px] inline-block"
              />
              
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolygonCard;
