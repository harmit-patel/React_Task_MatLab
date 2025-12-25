import React from "react";
import StepItem from "./StepItem";
import girlImg from "../../assets/images/how-it-works-girl.svg";

// import as normal files, NO ReactComponent
import step1Icon from "../../assets/images/step1.svg";
import step2Icon from "../../assets/images/step2.svg";
import step3Icon from "../../assets/images/step3.svg";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="flex min-h-[600px] items-center justify-center bg-white px-5 py-20 md:px-16"
    >
      <div className="grid w-full max-w-6xl items-start gap-12 md:grid-cols-[1.4fr_1.2fr]">
        {/* LEFT – full SVG illustration */}
        <div className="flex justify-center md:justify-start">
          <div className="relative flex items-center justify-center">
            <img
              src={girlImg}
              alt="אישה עובדת על מחשב נייד"
              className="h-auto w-[260px] md:w-[320px] lg:w-[500px]"
            />
          </div>
        </div>

        {/* RIGHT – text + steps (RTL) */}
        <div className="direction-rtl text-right">
          <h2 className="mb-8 text-[42px] font-light leading-tight text-[#040035]">
            איך זה עובד?
            <span className="text-[#F54387] font-semibold"> פשוט</span>
            <span className="text-[#040035]">.</span>
          </h2>

          <div className="flex flex-col gap-10">
            <StepItem
              stepNumber="1"
              title="מילוי פרטים"
              iconSrc={step1Icon}
            >
              הזינו את פרטי התביעה ותתארו את המקרה
              בליווי בוט AI חכם שמלווה אתכם בכל שלב.
            </StepItem>

            <StepItem
              stepNumber="2"
              title="צירוף מסמכים"
              iconSrc={step2Icon}
            >
              העלו מסמכים ותמונות בקלות ובמהירות.
            </StepItem>

            <StepItem
              stepNumber="3"
              title="הגשה וסיום"
              iconSrc={step3Icon}
            >
              סקירה סופית ותשלום מאובטח והגשה
              מקוונת של התביעה.
            </StepItem>
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
            <button className="rounded-pill bg-[#F54387] px-10 py-3 text-[15px] font-semibold text-white shadow-cta transition-transform transition-shadow hover:-translate-y-[1px] hover:bg-[#e93679] hover:shadow-ctaHover">
              התחילו עכשיו
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
