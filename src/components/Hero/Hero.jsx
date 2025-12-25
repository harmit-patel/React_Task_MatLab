import React from "react";
import Orbit from "./orbit/Orbit";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-between bg-white px-5 pb-16 pt-32 md:px-16"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        {/* LEFT: orbit + arrow */}
        <div className="flex justify-center md:justify-start">
          <Orbit />
        </div>

        {/* RIGHT: text, base RTL */}
        <div className="mx-auto max-w-md text-center md:ml-auto md:text-right direction-rtl">
          {/* top badge */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-pill bg-[#FFE6F3] px-5 py-2 text-[12px] font-semibold text-[#F54387]">
              פלטפורמת AI לתהליכים בירוקרטיים
            </span>
          </div>

          {/* main title */}
          <h1 className="mb-5 text-[52px] leading-[1.1] font-light text-[#040035] direction-ltr">
            פחות בירוקרטיה,
            <span className="font-semibold bg-gradient-to-l from-[#F54387] via-[#D94AAE] to-[#3C8DFB] bg-clip-text text-transparent">
              {" "}
              יותר כסף בכיס שלך
            </span>
            <span className="text-[#3C8DFB]">.</span>
          </h1>

          {/* subtitle */}
          <p className="mx-auto mb-7 max-w-sm text-[16px] leading-relaxed text-[#040035] md:mx-0">
            בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל
            את מה שמגיע לך – פשוט, חכם ובמינימום מאמץ.
          </p>

          {/* CTA button row – button on left */}
          <div className="flex items-center justify-center gap-3 md:justify-start direction-rtl">
            <button className="rounded-pill bg-[#F54387] px-8 py-3 text-[15px] font-semibold text-white shadow-cta transition-transform transition-shadow hover:-translate-y-[1px] hover:bg-[#e93679] hover:shadow-ctaHover">
              התחילו עכשיו
            </button>
          </div>
        </div>
      </div>

      {/* bottom infinite strip (unchanged) */}
      <div className="mt-10 overflow-hidden">
        <div className="strip-scroll flex">
          <div className="flex w-[200%]">
            <StripRow />
            <StripRow />
          </div>
        </div>
      </div>
    </section>
  );
};

const StripRow = () => (
  <div className="flex w-1/2 flex-none gap-4 px-4">
    <div className="h-16 flex-1 rounded-lg bg-gradient-to-l from-white via-slate-100 to-slate-100" />
    <div className="h-16 flex-1 rounded-lg bg-slate-100" />
    <div className="h-16 flex-1 rounded-lg bg-slate-100" />
    <div className="h-16 flex-1 rounded-lg bg-slate-100" />
  </div>
);

export default Hero;
