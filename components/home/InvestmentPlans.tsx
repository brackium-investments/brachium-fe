"use client";
import React from "react";
import { investmentPlans } from "../utils/data";
import StyledHeader from "../StyledHeader";
import { motion } from "framer-motion";

type Plan = {
  title: string;
  percentIncrease: number;
  minDeposit: number;
  maxDeposit: number | string;
  referralBonus: number;
};

const InvestmentPlans = () => {
  return (
    <section className="bg-main-1 px-[10rem] font-nunito py-[5rem]">
      <StyledHeader text="Our Investment Plans" />
      <div className="grid grid-cols-plan-grid gap-[3rem] ">
        {investmentPlans.map((plan: Plan, i: number) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn", delay: i * 0.2 }}
            key={plan.title}
            className="border border-dashed rounded-lg border-color-white text-color-white flex flex-col items-center hover:border-color-gold transition-all duration-150 ease-in py-[3rem] "
          >
            <p className="text-[2rem] text-color-gold font-medium mb-[1.5rem]">
              {plan.title}
            </p>
            <p className="">
              <span className="text-color-gold">{plan.percentIncrease}%</span>{" "}
              in 30 days
            </p>
            <p className="my-[1rem]">
              Min Deposit:{" "}
              <span className="text-color-gold">${plan.minDeposit}</span>
            </p>
            <p>
              Max Deposit:{" "}
              <span className="text-color-gold">
                {typeof plan.maxDeposit === "string"
                  ? plan.maxDeposit
                  : `$${plan.maxDeposit}`}
              </span>
            </p>
            <p className="my-[1rem]">
              Referral Bonus:{" "}
              <span className="text-color-gold">{plan.referralBonus}%</span>
            </p>
            <button
              type="button"
              className="mt-[2rem] w-[90%] bg-color-gold text-color-blue py-[.5rem] text-center text-[1.8rem] rounded-lg border border-color-gold hover:bg-color-white hover:text-color-gold transition-all duration-150 ease-in"
            >
              Register
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentPlans;
