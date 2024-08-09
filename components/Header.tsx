"use client";
import React from "react";
import logo from "../assets/logo-no-background.svg";
import Image from "next/image";
import { landingPageNavLinks } from "./utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  console.log(pathname.slice(9));

  return (
    <header className="bg-header bg-no-repeat bg-cover bg-center flex px-[5rem] items-center font-nunito ">
      <Image
        src={logo}
        alt="logo"
        priority
        width={100}
        height={100}
        className="w-[15rem] h-[8rem]"
      />
      <nav className="ml-auto">
        <div className="flex items-center">
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
          <div className="flex items-center ml-[4rem]">
            <Link
              href={"/brackium/login"}
              className="mr-[1.5rem] border border-color-gold text-color-gold px-[1rem] py-[0.5rem] rounded-lg text-[1.7rem] hover:text-color-white hover:bg-color-gold transition-all duration-150 ease-in"
            >
              Login
            </Link>
            <button
              type="button"
              className="border border-color-gold text-color-white bg-color-gold rounded-lg px-[1rem] py-[0.5rem] text-[1.7rem] hover:text-color-gold hover:bg-color-transparent transition-all duration-150 ease-in"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
