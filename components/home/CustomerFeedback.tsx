"use client";
import React from "react";
import { customerFeedback } from "../utils/data";
import Image, { StaticImageData } from "next/image";

const CustomerFeedback = () => {
  return (
    <div className="py-[10rem] bg-main-1">
      <h2 className="text-center text-[3rem] text-color-gold font-semibold">
        Our Client Feedback
      </h2>
      <div className="py-[5rem] flex flex-wrap justify-center">
        {customerFeedback.map(
          (feedback: {
            img: StaticImageData;
            firstName: string;
            lastName: string;
            text: string;
          }) => (
            <div
              key={feedback.firstName}
              className="flex flex-col bg-color-blue py-[5rem] w-[30rem] mr-[2rem] last:mr-0 items-center text-center p-[1rem]"
            >
              <Image
                src={feedback.img}
                alt={feedback.firstName}
                priority
                width={200}
                height={200}
                className="w-[20rem] h-[15rem]"
              />
              <p className="my-[1.5rem] text-color-white">{feedback.text}</p>
              <div className="mt-auto">
                <p className="text-color-gold font-medium text-[1.8rem]">
                  {feedback.firstName}
                </p>
                <p className="text-color-white">{feedback.lastName}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CustomerFeedback;
