import React from "react";
import ContentCard from "./ContentCard";

const cards = [
  {
    tag: "ביטוח",
    readTime: "8 דקות",
    title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
    subtitle:
      "כל מה שצריך לדעת על הזכויות שלכם, חוק ההגנה על הצרכן ותנאי התביעות.",
  },
  {
    tag: "טיפים",
    readTime: "8 דקות",
    title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
    subtitle:
      "איך להתנהל נכון מול חברות הביטוח והבנקים כדי לקבל את מה שמגיע לכם.",
  },
  {
    tag: "טיפים",
    readTime: "8 דקות",
    title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
    subtitle:
      "צעדים פשוטים שיעזרו לכם להבין את המסמכים ולהימנע מטעויות נפוצות.",
  },
];

const ContentSection = () => {
  return (
    <section className="bg-white px-5 py-20 md:px-24">
      <div className="mx-auto max-w-6xl text-right">
        {/* heading block (≈ 763px) */}
        <div className="mx-auto mb-10 w-full md:w-[763px]">
          <h2 className="text-right text-[60px] leading-[1] font-light font-[Noto_Sans_Hebrew]">
            קצת תוכן{" "}
            <span className="font-bold bg-[linear-gradient(270deg,#F54387_0%,#41AEF7_44.71%)] bg-clip-text text-transparent">
              שבטוח יעניין אתכם
            </span>
          </h2>
        </div>

        {/* cards row */}
        <div className="mx-auto flex max-w-[1255px] flex-col gap-5 md:flex-row md:gap-5">
          {cards.map((card) => (
            <ContentCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
