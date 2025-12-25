// src/components/Hero/orbit/Orbit.jsx
import React from "react";

import orbitRings from "../../../assets/images/orbit-rings.svg";
import orbitArrow from "../../../assets/images/orbit-arrow.svg";

import iconPdf from "../../../assets/images/icon-pdf.svg";
import iconGear from "../../../assets/images/icon-gear.svg";
import iconDocx from "../../../assets/images/icon-docx.svg";
import iconFile from "../../../assets/images/icon-file.svg";
import iconMail from "../../../assets/images/icon-mail.svg";

const Tile = ({ src, alt, className = "" }) => (
  <div className={`absolute ${className}`}>
    {/* white card via Tailwind, NOT SVG */}
    <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-white shadow-heroIcon">
      <img src={src} alt={alt} className="h-7 w-7" />
    </div>
  </div>
);

const Orbit = () => {
  return (
    <div className="relative w-[720px] max-w-[90vw] aspect-square">
      <img src={orbitRings} alt="" className="h-full w-full" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img src={orbitArrow} alt="" className="h-[220px] w-[260px]" />
      </div>

      {/* adjust positions to match Figma */}
      <Tile src={iconPdf} alt="PDF" className="top-[60%] left-[9%]" />
      <Tile src={iconGear} alt="Gear" className="top-[10%] left-[58%]" />
      <Tile src={iconDocx} alt="DOCX" className="top-[40%] left-[70%]" />
      <Tile src={iconFile} alt="File" className="bottom-[22%] left-[55%]" />
      <Tile src={iconMail} alt="Mail" className="bottom-[8%] left-[32%]" />
    </div>
  );
};

export default Orbit;
