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
        <h2 className="mb-12 text-[36px] font-light text-[#040035]">
          כל הסיבות <span className="text-[#3C8DFB]">לבחור</span>
          <span className="text-[#F54387]"> בנו</span>
        </h2>

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
