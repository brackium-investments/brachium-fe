"use client";
import React, { useEffect } from "react";
import baner3 from "../../assets/baner3.png";
import bannerCoin from "../../assets/banner-coin.png";
import Image from "next/image";
import { motion } from "framer-motion";
import InvestmentPlans from "@/components/home/InvestmentPlans";
import CryptoDataList from "@/components/CryptoDataList";

const page = () => {
  const btnClassName =
    "px-[1.5rem] py-[0.5rem] border border-color-gold rounded-lg bg-color-transparent hover:bg-color-gold hover:text-color-white text-color-gold text-[1.8rem] font-medium mr-[2rem]";

  return (
    <div>
      <section className="bg-main-1 bg-no-repeat bg-cover bg-center py-[10rem] flex px-[5rem] items-center">
        <div className="w-[45%]">
          <h1 className="text-[4.5rem] font-medium bg-gradient-to-r from-color-gold  to-color-white text-transparent brackium bg-clip-text">
            Brackium Investment
          </h1>
          <p className="text-color-blue bg-color-gold w-max px-[1rem] py-[0.5rem] rounded-lg">
            Best Profitable Algorithmic Robots
          </p>
          <p className="text-color-white mt-[2rem]">
            Register and start earning on the crypto trading. Brackium provides
            profitable algorithmic robots to conduct multiple transactions for
            global customers in a short period of time and bring stable profits.
          </p>
          {/* <div className="mt-[3rem]">
          <button type="button" className={btnClassName}>
            Login
          </button>
          <button type="button" className={btnClassName}>
            Register
          </button>
        </div> */}
        </div>
        <div className="relative">
          <Image src={baner3} alt="baner" priority className="" />
          <motion.div
            animate={{ y: [60, 0, -120, 0, 60] }}
            transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            className="absolute bottom-[3rem] right-[8rem]"
          >
            <Image src={bannerCoin} alt="bannerCoin" priority />
          </motion.div>
        </div>
      </section>
      <InvestmentPlans />
      <CryptoDataList />
    </div>
  );
};

export default page;
