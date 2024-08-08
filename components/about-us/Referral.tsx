/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

const Referral = () => {
  return (
    <div className=" flex flex-col items-center px-[10rem] py-[5rem] font-nunito ">
      <h2 className="text-color-gold text-[2.5rem] font-semibold mb-[1.5rem]">
        Our Referral Program
      </h2>
      <p className="text-center text-color-blue ">
        At Brackium, our referral program rewards clients for sharing their
        positive experiences with others. By referring new clients to our
        services, you can earn between 5% and 40% of the referred client's
        investment, depending on the investment plan. This tiered system ensures
        that the more your referrals invest, the higher your earnings. It's our
        way of saying thank you for helping us grow our community of satisfied
        investors. Join our referral program today and start earning while
        helping others achieve their financial goals with Brackium.
      </p>
    </div>
  );
};

export default Referral;
