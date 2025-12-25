import React from "react";
import Orbit from "./orbit/Orbit";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-between bg-white px-5 pb-16 pt-28 md:px-16"
    >
      {/* main layout */}
      <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        {/* LEFT: orbit + arrow */}
        <div className="flex justify-center md:justify-start">
          <Orbit />
        </div>

        {/* RIGHT: text */}
        <div className="mx-auto max-w-md text-center md:ml-auto md:text-right">
          <div className="mb-3">
            <span className="inline-flex items-center rounded-pill bg-badgeBg px-4 py-1 text-[12px] text-primary">
              פלטפורמת AI לתהליכים בירוקרטיים
            </span>
          </div>

          <h1 className="mb-3 text-3xl font-semibold leading-snug text-textDark md:text-[40px]">
            פחות בירוקרטיה,{" "}
            <span className="bg-gradient-to-l from-primary to-accentBlue bg-clip-text text-transparent">
              יותר כסף בכיס שלך.
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-sm text-[15px] text-textMuted md:mx-0">
            בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל את מה שמגיע לך- פשוט,
            חכם ובמינימום מאמץ.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start">
            <button className="rounded-pill bg-primary px-7 py-3 text-[14px] text-white shadow-cta transition-transform transition-shadow hover:-translate-y-[1px] hover:bg-primaryDark hover:shadow-ctaHover">
              התחילו עכשיו
            </button>
          </div>
        </div>
      </div>

      {/* bottom infinite strip */}
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
