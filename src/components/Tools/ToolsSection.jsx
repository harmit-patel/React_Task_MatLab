import React from "react";
import HexToolCard from "./HexToolCard";
import toolsRings from "../../assets/images/tools-bg-circles.svg"; // your right-side circle SVG

const cards = [
  {
    badge: "חינם",
    title: "בדיקת החזר מחברת הביטוח",
    description: "בדיקה מקיפה של דמי ניהול ותשלומי יתר.",
    meta: "מסמך אחד – מבוסס על מידע ממשק-שאלון קצר. 3‑5 דקות ויש לכם מסמך.",
    cta: "התחילו עכשיו",
  },
  {
    badge: "חינם",
    title: "תהליך רשת תביעה קלה",
    description: "כלים דיגיטליים להגשת תביעות בקלות ובמהירות.",
    meta: "מסמך אחד – מבוסס על מידע ממשק-שאלון קצר. 3‑5 דקות ויש לכם מסמך.",
    cta: "התחילו עכשיו",
  },
  {
    badge: "עד 50 ש\"ח",
    title: "הכנת מכתב לבנקים",
    description: "מכתב מותאם אישית להתנהלות מול הבנק.",
    meta: "מסמך אחד – מבוסס על מידע ממשק-שאלון קצר. 3‑5 דקות ויש לכם מסמך.",
    cta: "התחילו עכשיו",
  },
  {
    badge: "חינם",
    title: "בדיקת החזר כספי לשכירים",
    description: "בדיקת זכאות להחזרי מס על פי הנתונים שלכם.",
    meta: "מסמך אחד – מבוסס על מידע ממשק-שאלון קצר. 3‑5 דקות ויש לכם מסמך.",
    cta: "התחילו עכשיו",
  },
];

const ToolsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-24 pt-24 md:px-16">
      {/* right-side concentric circles */}
      <img
        src={toolsRings}
        alt=""
        className="pointer-events-none absolute -right-32 top-0 h-[650px] opacity-40"
      />

      <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        {/* left: hex cards (two rows, staggered like design) */}
        <div className="flex flex-col gap-8">
          <div className="flex justify-end gap-8">
            <HexToolCard {...cards[0]} />
            <HexToolCard {...cards[1]} />
          </div>
          <div className="flex justify-end gap-8 -mt-10">
            <HexToolCard {...cards[2]} />
            <HexToolCard {...cards[3]} />
          </div>
        </div>

        {/* right: title + description */}
        <div className="ml-auto max-w-sm text-right">
          <h2 className="mb-3 text-[32px] font-semibold">
            <span className="bg-gradient-to-l from-primary to-accentBlue bg-clip-text text-transparent">
              הכלים שלנו
            </span>
          </h2>
          <p className="mb-2 text-[13px] text-textMuted">
            הכלים שלנו פועלים עבורכם את כל מה שאתם צריכים
          </p>
          <p className="text-[13px] text-textMuted">
            בקלות ובמהירות, כלים נוספים יכנסו בהמשך.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
