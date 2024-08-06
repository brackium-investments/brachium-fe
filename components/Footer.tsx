"use client";
import React from "react";
import { footerImgs } from "./utils/data";
import Image, { StaticImageData } from "next/image";

const Footer = () => {
  return (
    <footer className="bg-footer p-[5rem]">
      <div className="flex flex-wrap  justify-center w-full">
        {footerImgs.map((img: StaticImageData, i: number) => (
          <div key={i} className="mb-[3rem]">
            <Image
              src={img}
              alt="footer images"
              priority
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
