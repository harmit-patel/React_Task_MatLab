import React from "react";

const HexToolCard = ({ badge, title, description, meta, cta }) => {
  return (
    <div className="relative w-[280px] h-[220px]">
      {/* hexagon background */}
      <div className="hex-card h-full w-full px-7 pt-10 pb-7 text-right">
        {/* top badge */}
        {badge && (
          <div className="absolute -top-4 right-10 rounded-full bg-[#f5f7ff] px-3 py-1 text-[10px] text-textMuted">
            {badge}
          </div>
        )}

        <h3 className="mb-2 text-[14px] font-semibold text-textDark">
          {title}
        </h3>

        <p className="mb-3 text-[11px] text-textMuted leading-relaxed">
          {description}
        </p>

        <p className="mb-4 text-[10px] text-textMuted">{meta}</p>

        <button className="mt-auto text-[11px] font-semibold text-primary">
          ← {cta}
        </button>
      </div>
    </div>
  );
};

export default HexToolCard;
