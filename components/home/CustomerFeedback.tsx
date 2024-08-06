"use client";
import React from "react";
import { customerFeedback } from "../utils/data";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const CustomerFeedback = () => {
  return (
    <div className="py-[10rem] bg-main-1">
      <h2 className="text-center text-[3rem] text-color-gold font-semibold">
        Our Client Feedback
      </h2>
      <div className="py-[5rem] flex flex-wrap justify-center">
        {customerFeedback.map(
          (
            feedback: {
              img: StaticImageData;
              firstName: string;
              lastName: string;
              text: string;
            },
            i: number
          ) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.15 * i }}
              key={feedback.firstName}
              className="flex flex-col bg-color-blue py-[5rem] w-[30rem] mr-[2rem] last:mr-0 items-center text-center p-[1rem] rounded-xl"
            >
              <Image
                src={feedback.img}
                alt={feedback.firstName}
                priority
                width={200}
                height={200}
                className="w-[13rem] h-[13rem] rounded-full"
              />
              <p className="my-[1.5rem] text-color-white">{feedback.text}</p>
              <div className="mt-auto">
                <p className="text-color-gold font-medium text-[1.8rem]">
                  {feedback.firstName}
                </p>
                <p className="text-color-white">{feedback.lastName}</p>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default CustomerFeedback;
