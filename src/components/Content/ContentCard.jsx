import React from "react";
import sampleImage from "../../assets/images/content-card.svg"; // your SVG

const ContentCard = ({ tag, readTime, title, subtitle }) => {
  return (
    <article className="flex h-[556px] w-[405px] flex-col overflow-hidden rounded-[25px] bg-white shadow-[0_0_24.8px_0_rgba(176,176,176,0.1)]">
      {/* image */}
      <div className="h-[280px] w-full overflow-hidden">
        <img
          src={sampleImage}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6 text-right">
        {/* top row: read time + tag pill */}
        <div className="mb-4 flex items-center justify-between text-[11px] text-textMuted">
          <span>זמן קריאה: {readTime}</span>
          <span className="rounded-full bg-[#F5E6FF] px-4 py-1 text-[10px] text-primary">
            {tag}
          </span>
        </div>

        <h3 className="mb-2 text-[16px] font-semibold text-textDark leading-snug">
          {title}
        </h3>

        <p className="mt-1 text-[13px] leading-relaxed text-textMuted">
          {subtitle}
        </p>
      </div>
    </article>
  );
};

export default ContentCard;
