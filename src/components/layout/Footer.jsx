import React from "react";
import logo from "../../assets/images/logo-biroclick.svg";

const Footer = () => {
  return (
    <footer className="bg-[#FBFBFB] py-10 px-6 md:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row md:items-start text-right">
        {/* RIGHT: Contact */}
        <div>
          <h4 className="mb-3 text-[13px] font-semibold text-textDark">
            יצירת קשר
          </h4>
          <p className="text-[13px] text-textMuted">shushanran@gmail.com</p>
        </div>

        {/* Privacy */}
        <div>
          <h4 className="mb-3 text-[13px] font-semibold text-textDark">
            פרטיות
          </h4>
          <ul className="space-y-1 text-[13px] text-textDark">
            <li>תקנון שימוש</li>
            <li>מדיניות פרטיות</li>
            <li>עוגיות</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-3 text-[13px] font-semibold text-textDark">
            ניווט
          </h4>
          <ul className="space-y-1 text-[13px] text-textDark">
            <li>ראשי</li>
            <li>איך זה עובד?</li>
            <li>הכלים שלנו</li>
            <li>לקוחות מספרים</li>
            <li>שאלות תשובות</li>
          </ul>
        </div>

        {/* LEFT: Logo */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="בירוקליק" className="h-10 object-contain" />
        </div>
      </div>

      {/* bottom line */}
      <div className="mt-8 text-center text-[12px] font-semibold text-textDark">
        בירוקליק 2025 כל הזכויות שמורות
      </div>
    </footer>
  );
};

export default Footer;
