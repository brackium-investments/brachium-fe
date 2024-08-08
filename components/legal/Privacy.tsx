"use client";
import React from "react";
import { privacyData } from "../utils/data";

const Privacy = () => {
  return (
    <div className="px-[10rem] mt-[5rem]">
      <h2 className="text-center text-[3rem] text-color-gold font-semibold mb-[2rem]">
        Privacy
      </h2>
      <p>
        Brackium Investments Limited respects your privacy and is committed to
        protecting your personal data. This privacy policy aims to give you
        information on how we collect and process any personal data and how we
        look after your personal data when you visit our website (regardless of
        where you visit it from) and tell you about your privacy rights and how
        the law protects you. i.e. information about a Client (as defined below)
        who is a natural person on the basis of which that Client can be
        identified (hereinafter the data) in accordance with the applicable data
        protection legislation and best practice.
      </p>
      <p className="my-[2rem]">
        We strive to create the most secure infrastructure of any broker in
        United state and the world at large. In this privacy policy we would
        like to tell why you can trust us with your data and rest assured that
        your data is safe.
      </p>
      <p>
        It is important that you read this privacy policy together with any
        other privacy policy we may provide on specific occasions when we are
        collecting or processing your data about you so that you are fully aware
        of how and why we are using your data.
      </p>
      <div className="mt-[3rem]">
        <ol className="list-upperAlpha mx-[3rem]">
          {privacyData.map((data: any, i: number) => (
            <li key={i} className="list-item">
              <p className="mb-[1.5rem]">{data.title}</p>
              {data.subTitle && <p className="mb-[2rem]">{data.subTitle}</p>}
              <ol className="list-lowerAlpha mx-[2rem]">
                {data.texts.map((text: string) => (
                  <li
                    key={text}
                    className={`${
                      data.subTitle ? "list-item" : "list-none"
                    } mb-[2rem]`}
                  >
                    <p>{text}</p>
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

export default Privacy;
