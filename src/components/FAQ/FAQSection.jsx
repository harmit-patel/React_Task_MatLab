import React from "react";
import FAQItem from "./FAQItem";
import faqRings from "../../assets/images/faq-rings.svg";

const faqs = [
  {
    q: "האם השירות באמת חינם?",
    a: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עבודה.",
  },
  {
    q: "איך אני יודע שהמידע שלי בטוח?",
    a: "הנתונים מאובטחים בתקן מחמיר ומוצפנים לאורך כל התהליך.",
  },
  {
    q: "כמה זמן זה לוקח מהתהליכים שאני מבצע דרך בירוקליק?",
    a: "בדרך כלל מספר דקות למילוי השאלון ועוד מספר ימי עסקים לעיבוד הבקשה.",
  },
  {
    q: "האם אפשר לעשות את זה מהנייד?",
    a: "כן, תמיד ניתן לעדכן פרטים ולשלוח בקשה נוספת.",
  },
  {
    q: "איך אני מקבל את המסמכים?",
    a: "המסמכים נשלחים אליך במייל ובאזור האישי במערכת.",
  },
  {
    q: "האם יש נציג אנושי אם אני צריך עזרה?",
    a: "כן, ניתן ליצור קשר עם נציג אנושי בכל שלב בתהליך.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FDF9FC] px-5 py-16 md:px-32">
      {/* right-side circles SVG */}
      <img
        src={faqRings}
        alt=""
        className="pointer-events-none absolute -right-0 -top-0 h-[650px] opacity-100"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-right">
        {/* centered heading block (≈ 536px like Figma) */}
        <div className="mx-auto mb-8 w-full md:w-[536px]">
          <h2 className="text-right text-[60px] leading-[1] font-light font-[Noto_Sans_Hebrew]">
            {/* light part */}
            שאלות{" "}
            {/* bold gradient part */}
            <span className="font-bold bg-[linear-gradient(270deg,#F54387_0%,#41AEF7_44.71%)] bg-clip-text text-transparent">
              שיש לכם
            </span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-4">
          {faqs.map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
