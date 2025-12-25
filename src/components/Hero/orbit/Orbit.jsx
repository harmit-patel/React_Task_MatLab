import React from "react";
import orbitFull from "../../../assets/images/orbit-full.svg";

const Orbit = () => {
  return (
    <div className="relative w-[950px] max-w-[70vw]">
      <img
        src={orbitFull}
        alt="Orbit graphic"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Orbit;
