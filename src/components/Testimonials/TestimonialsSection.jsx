// src/components/Testimonials/TestimonialsSection.jsx
import React from "react";
import FlipCard from "./FlipCard";
import PinkStatCard from "./PinkStatCard";
import BigCardFront from "./BigCardFront";
import BigCardBack from "./BigCardBack";

import Person1 from "../../assets/images/testimonial-person-1.svg";
import Person2 from "../../assets/images/testimonial-person-2.svg";
import Person3 from "../../assets/images/testimonial-person-3.svg";

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white mt-32 pb-20">
      {/* responsive max-width + left/right space */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* top row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          <FlipCard
            className="flex-1 h-[250px]"
            front={<BigCardFront avatar={Person1} />}
            back={<BigCardBack avatar={Person2} />}
          />
          <div className="w-full lg:w-[428px]">
            <PinkStatCard
              value="1.2 מיליון ₪"
              label="כסף שנכנס ללקוחות בבירוקליק"
            />
          </div>
        </div>

        {/* middle row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          <div className="w-full lg:w-[428px]">
            <PinkStatCard value="4 דקות" label="זמן ממוצע בתהליך" />
          </div>
          <FlipCard
            className="flex-1 h-[250px]"
            front={<BigCardFront avatar={Person2} />}
            back={<BigCardBack avatar={Person3} />}
          />
        </div>

        {/* bottom row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          <FlipCard
            className="flex-1 h-[250px]"
            front={<BigCardFront avatar={Person3} />}
            back={<BigCardBack avatar={Person1} />}
          />
          <div className="w-full lg:w-[428px]">
            <PinkStatCard
              value="130"
              label="תהליכים שהושלמו בהצלחה"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
