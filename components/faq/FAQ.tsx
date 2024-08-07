"use client";
import React, { useEffect, useState } from "react";
import { faqData } from "../utils/data";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const [expanded, setExpanded] = useState<false | number>(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="pb-[10rem] pt-[5rem]">
      <h3 className="text-center text-[3rem] font-semibold text-color-gold mb-[2rem]">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col w-[80%] mx-auto">
        {faqData.map((faq: { title: string; text: string }, index: number) => (
          <FAQItem
            key={faq.title}
            index={index}
            expanded={expanded}
            setExpanded={setExpanded}
            title={faq.title}
            text={faq.text}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
