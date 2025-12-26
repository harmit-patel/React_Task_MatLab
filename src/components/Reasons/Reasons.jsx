import React from "react";
import ReasonCard from "./ReasonCard";

import techIcon from "../../assets/images/reason-tech.svg";
import riskIcon from "../../assets/images/reason-risk.svg";
import simpleIcon from "../../assets/images/reason-simple.svg";

const Reasons = () => {
  return (
    <section className="bg-white px-5 py-20 md:px-16">
      <div className="mx-auto max-w-6xl text-center">
        {/* title */}
<div className="w-full flex justify-center">
  <h2
    className="mb-12 text-[60px] leading-[1] font-light text-right flex gap-2"
    style={{ fontFamily: "Noto Sans Hebrew, sans-serif" }}
  >
    {/* black part */}
    <span className="text-[#040035]">כל הסיבות</span>

    {/* gradient part: לבחור בנו */}
    <span
      className="font-normal"
      style={{
        background:
          "linear-gradient(270deg, #F54387 58.65%, #41AEF7 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      לבחור בנו
    </span>
  </h2>
</div>


        {/* cards row */}
        <div className="grid gap-10 md:grid-cols-3">
          <ReasonCard iconSrc={techIcon} title="טכנולוגיה">
            בינה מלאכותית שמותאמת במיוחד בשבילכם, לא להיפך.
          </ReasonCard>

          <ReasonCard iconSrc={riskIcon} title="חיסכון">
            זמן, בירוקרטיה וכסף שנשאר אצלכם בכיס.
          </ReasonCard>

          <ReasonCard iconSrc={simpleIcon} title="פשטות">
            תהליך תביעות בירוקרטיים שמרגישים קלים וברורים.
          </ReasonCard>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
