import React from "react";
import PolygonCard from "./PolygonCard";
import toolsBgCircles from "../../assets/images/tools-bg-circles.svg";

const ToolsSection = () => {
  return (
    <section className="relative w-full bg-white py-24">
      {/* outer box ~ your 1708x839 area (you adjusted to 830 width) */}
      <div className="mx-auto relative w-[830px] h-[839px]">
        {/* LEFT – polygons container */}
        <div className="absolute left-[-650px] top-0 w-[1220px] h-[800px]">
          {/* row 1 */}
          <PolygonCard
            className="top-[0px] left-[212px]"
            badge="חינם"
            title="בדיקת החזר מחברת הביטוח"
            text="בדיקה מהירה של כל החזרי הביטוח האפשריים לכם."
            cta="התחילו עכשיו"
          />
          <PolygonCard
            className="top-[0px] left-[600px]"
            badge="חינם"
            title="תהליך הגשת תביעה קטנה"
            text="מסמך מיידי – מבוסס על מידע משמעותי."
            cta="התחילו עכשיו"
          />

          {/* row 2 */}
          <PolygonCard
            className="top-[372px] left-[0px]"
            blurred
            title="בקרוב עוד כלים חכמים שיעזרו לכם"
          />
          <PolygonCard
            className="top-[374px] left-[424px]"
            badge="שווה 50 ₪"
            title="הכנת מכתב לבנקים"
            text="מסמך מיידי – מבוסס על מידע משמעותי. שאלון קצר 3‑5 דקות ויש לכם מסמך."
            cta="התחילו עכשיו"
          />
          <PolygonCard
            className="top-[374px] left-[848px]"
            badge="חינם"
            title="בדיקת החזר כסף לשכירים"
            text="בדיקה מהירה של כל ההחזרים הדויקים האפשריים לכם."
            cta="התחילו עכשיו"
          />
        </div>

        {/* RIGHT – heading + sub text */}
        <div
          className="absolute right-[-280px] top-[120px] w-[486px] h-[197px] pt-[41px] flex flex-col gap-5 items-end"
          style={{ direction: "rtl" }}
        >
          <h2
            className="w-[416px] text-[60px] font-bold leading-[1] text-right"
            style={{
              fontFamily: "Noto Sans Hebrew, sans-serif",
              background:
                "linear-gradient(270deg, #F54387 0%, #41AEF7 96.27%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            הכלים שלנו
          </h2>
          <p
            className="w-[486px] text-[20px] font-normal leading-[1.4] text-right text-[#040035]"
            style={{ fontFamily: "Noto Sans Hebrew, sans-serif" }}
          >
            הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ומהירות,
            כלים נוספים יכנסו בהמשך
          </p>
        </div>

        {/* RIGHT circle as img */}
        <div className="absolute right-[-340px] top-[-500px] pointer-events-none">
          <img src={toolsBgCircles} alt="" className="w-auto h-auto" />
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
