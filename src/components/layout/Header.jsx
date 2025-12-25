import React from "react";
import logo from "../../assets/images/logo-biroclick.svg";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-20 w-full pt-6 px-6 md:px-20">
      {/* whole header is RTL */}
      <div className="flex items-center justify-between direction-rtl">
        {/* RIGHT: logo + subtitle */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="בירוקליק" className="h-8 object-contain" />
        </div>

        {/* CENTER: nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-textDark">
          <a href="#home">תקנון שימוש</a>
          <a href="#tools">הבלוג שלנו</a>
          <a href="#blog">הכלים שלנו</a>
          <a href="#terms">ראשי</a>
        </nav>

        {/* LEFT: CTA button (kept visually on the left by flex spacing) */}
        <button className="rounded-pill bg-primary px-7 py-2 text-sm text-white shadow-md">
          התחילו עכשיו
        </button>
      </div>
    </header>
  );
};

export default Header;
