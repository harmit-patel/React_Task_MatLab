import React from "react";

const BigCardBack = ({ avatar }) => {
  return (
    <div className="flex h-full w-full rounded-[25px] bg-white px-[60px] py-[30px] gap-[30px] items-start">
      <div
        className="flex-1 flex flex-col gap-3 text-right"
        style={{ direction: "rtl" }}
      >
        <p className="text-[14px] text-[#040035] font-semibold">
          שם אחר
          <span className="text-[#7A7A9D] font-normal mr-1">
            חוות דעת נוספת ללקוח
          </span>
        </p>
        <p className="text-[15px] leading-[1.6] text-[#040035]">
          &quot;כאן מופיע הטקסט שמוצג אחרי ההיפוך, חוות דעת נוספת עם אותו עיצוב
          כמו הצד הקדמי של הכרטיס.&quot;
        </p>
      </div>

      <div className="flex items-start">
        <img src={avatar} alt="" className="w-[56px] h-[56px] rounded-full" />
      </div>
    </div>
  );
};

export default BigCardBack;
