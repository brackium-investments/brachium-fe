"use client";
import React from "react";
import { footerImgs, landingPageNavLinks } from "./utils/data";
import Image, { StaticImageData } from "next/image";
import logo from "../assets/logo-no-background.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-footer p-[5rem] bg-no-repeat bg-cover bg-center">
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
      <div className="flex items-center justify-between mt-[10rem]">
        <Image
          src={logo}
          alt="brackium logo image"
          priority
          width={100}
          height={100}
          className="w-[20rem] h-[20rem]"
        />
        <ul className="flex">
          {landingPageNavLinks.map((item: { text: string; link: string }) => (
            <li key={item.text} className="mr-[2rem] last:mr-0">
              <Link
                href={`/brackium/${item.link}`}
                className={` ${
                  pathname.slice(9) === item.link
                    ? "text-color-gold"
                    : "text-color-white"
                } capitalize text-[1.8rem] hover:text-color-gold transition-all duration-150 ease-in`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full bg-color-blue flex items-center justify-center py-[2rem] rounded-xl">
        <p className="text-color-gold">Brackium Investments &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
