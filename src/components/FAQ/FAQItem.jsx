import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full text-right"
    >
      <div className="flex items-center justify-between rounded-[16px] bg-white px-6 py-4 shadow-sm transition-shadow hover:shadow-md">
        {/* left: + icon */}
        <span className="text-primary text-2xl font-semibold">+</span>

        {/* right: question */}
        <div className="flex-1 mr-4">
          <p className="text-[16px] font-medium text-textDark">{question}</p>

          {open && (
            <p className="mt-2 text-[13px] leading-relaxed text-textMuted">
              {answer}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};

export default FAQItem;
