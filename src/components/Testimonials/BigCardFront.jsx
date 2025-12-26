import React from "react";

const BigCardFront = ({ avatar }) => {
  return (
    <div className="flex h-full w-full rounded-[25px] bg-white px-[60px] py-[30px] gap-[30px] items-start">
      <div
        className="flex-1 flex flex-col gap-3 text-right"
        style={{ direction: "rtl" }}
      >
        <p className="text-[14px] text-[#040035] font-semibold">
          הלנה זר
          <span className="text-[#7A7A9D] font-normal mr-1">
            הכינה מכתב לתביעה קטנה
          </span>
        </p>
        <p className="text-[15px] leading-[1.6] text-[#040035]">
          &quot;לא ידעתי איך בכלל להתחיל לכתוב מכתב לתביעה קטנה. בבירוקליק
          הנחיתו אותי שלב אחרי שלב והרגשתי בטחון שהמכתב נראה כמו שצריך.&quot;
        </p>
      </div>

      <div className="flex items-start">
        <img src={avatar} alt="" className="w-[56px] h-[56px] rounded-full" />
      </div>
    </div>
  );
};

export default BigCardFront;
