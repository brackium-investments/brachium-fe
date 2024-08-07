"use client";
import React, { useEffect } from "react";
import baner3 from "../../assets/baner3.png";
import bannerCoin from "../../assets/banner-coin.png";
import Image from "next/image";
import { motion } from "framer-motion";
import InvestmentPlans from "@/components/home/InvestmentPlans";
import CryptoDataList from "@/components/home/CryptoDataList";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CustomerFeedback from "@/components/home/CustomerFeedback";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
      <WhyChooseUs />
      <CustomerFeedback />
    </div>
  );
};

export default Home;
