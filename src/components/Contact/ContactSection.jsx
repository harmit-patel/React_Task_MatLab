import React from "react";
import contactRings from "../../assets/images/contact-rings.svg";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* white page background only */}

      {/* pink rectangle with circles clipped inside */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4">
        <div className="relative mx-auto flex min-h-[260px] w-full max-w-[1256px] flex-col items-center justify-center overflow-hidden rounded-[27px] bg-[#FFF6FB] px-6 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.06)] md:px-24">
          {/* circles now inside the box, clipped by border radius */}
          <img
            src={contactRings}
            alt=""
            className="pointer-events-none absolute right-[0px] top-[-250px] h-[1000px] opacity-300"
          />

          {/* content on top */}
          <div className="relative z-10 mx-auto mb-4 w-full md:w-[633px]">
            <h2 className="text-center text-[50px] leading-[60px] font-bold text-[#040035] font-[Open_Sans_Hebrew]">
              נשמח לדבר אתכם, השאירו פרטים ונחזור אליכם בהקדם.
            </h2>
          </div>

          <div className="relative z-10 mx-auto mb-10 w-full md:w-[633px]">
            <p className="text-center text-[20px] leading-[30px] font-normal text-[#040035] font-[Noto_Sans_Hebrew]">
              אנחנו מייצרים עבורכם את כל הטפסים בעזרת מערכת חכמה וחדשנית
              וחוסכים לכם את כל הכאב ראש והבירוקטריה.
            </p>
          </div>

          <form className="relative z-10 flex w-full max-w-[800px] flex-col-reverse items-center gap-4 md:flex-row md:justify-center">
            <button
              type="submit"
              className="h-[56px] min-w-[140px] rounded-pill bg-primary px-10 text-sm font-semibold text-white shadow-cta"
            >
              שליחה
            </button>

            <input
              type="tel"
              placeholder="טלפון"
              className="h-[56px] w-full max-w-[280px] rounded-pill border border-transparent bg-white px-6 text-right text-[14px] text-textDark shadow-[0_0_24.8px_0_rgba(176,176,176,0.12)] focus:outline-none focus:ring-2 focus:ring-primary/40"
            />

            <input
              type="text"
              placeholder="שם"
              className="h-[56px] w-full max-w-[280px] rounded-pill border border-transparent bg-white px-6 text-right text-[14px] text-textDark shadow-[0_0_24.8px_0_rgba(176,176,176,0.12)] focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
