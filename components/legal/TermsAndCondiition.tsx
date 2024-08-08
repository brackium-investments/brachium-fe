"use client";
import React from "react";
import { agreements, terms } from "../utils/data";

const TermsAndCondiition = () => {
  return (
    <div className="px-[10rem] py-[5rem] text-color-blue">
      <h2 className="text-center text-[3rem] text-color-gold font-semibold mb-[2rem]">
        Terms and Condition
      </h2>
      <p>
        This Agreement is entered into by and these Terms & Conditions
        (hereinafter referred to as the “Agreement”) shall regulate the
        relationship between Brackium Investments and the user (a natural or
        legal entity) (hereinafter referred to as the “Client”) of
        www.brackium.com (hereinafter referred as the “Website”).
      </p>

      <ol className="list-upperAlpha px-[3rem] my-[1.5rem]" type="A">
        {agreements.map((agreement: string, i: number) => (
          <li key={agreement} className=" list-item mb-[1.5rem]">
            <p>{agreement}</p>
          </li>
        ))}
      </ol>

      <div className="mt-[4rem]">
        <p>
          All terms and and conditions contained herein, including without
          limitation, shall at all times be applicable to the Legal Entity and
          the latter shall conform with such terms and conditions, obligations
          and rights at all times.
        </p>
        <ol className="list-upperAlpha px-[3rem] my-[1.5rem]">
          {terms.map((item: any, i: number) => (
            <li key={i} className="list-item">
              <p className="capitalize">{item.title}</p>
              <ol className="list-lowerAlpha mx-[2rem] my-[1.5rem]">
                {item.terms.map((term: string, i: number) => (
                  <li key={term} className="list-item mb-[1.5rem]">
                    {term}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TermsAndCondiition;
