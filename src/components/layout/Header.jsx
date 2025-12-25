import React from "react";
import logo from "../../assets/images/logo-biroclick.svg";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-20 w-full pt-6 px-5 md:px-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="בירוקליק" className="h-8 object-contain" />
          <span className="text-xs text-textMuted">בירוקרטיה בקליק</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-textDark">
          <a href="#home">ראשי</a>
          <a href="#tools">הכלים שלנו</a>
          <a href="#blog">הבלוג שלנו</a>
          <a href="#terms">תקנון שימוש</a>
        </nav>

        <button className="rounded-pill bg-primary px-6 py-2 text-sm text-white shadow-md">
          התחילו עכשיו
        </button>
      </div>
    </header>
  );
};

export default Header;
