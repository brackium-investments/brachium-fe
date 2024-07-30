"use client";
import React from "react";
import { whyChooseUsData } from "../utils/data";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="bg-main-1 py-[5rem]">
      <h2 className="mb-[1.5rem] text-[3rem] text-color-gold text-center font-semibold">
        Why Choose Us
      </h2>
      <div className="py-[5rem] grid grid-cols-2 gap-x-[5rem] gap-y-[8rem] px-[10rem]">
        {whyChooseUsData.map(
          (
            data: { img: StaticImageData; title: string; text: string },
            i: number
          ) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn", delay: i * 0.2 }}
              viewport={{ once: true }}
              key={data.title}
              className="flex items-center"
            >
              <Image
                src={data.img}
                alt={data.title}
                priority
                width={500}
                height={500}
                className="w-[13rem] h-[13rem]"
              />
              <div className="ml-[1rem] px-[2rem]">
                <p className="text-color-gold text-[2rem] font-medium mb-[1rem]">
                  {data.title}
                </p>
                <p className="text-color-white">{data.text}</p>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default WhyChooseUs;
