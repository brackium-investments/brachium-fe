/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import mapImg from "../../assets/map.png";
import Image from "next/image";
import Stats from "./Stats";
import Referral from "./Referral";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="min-h-screen bg-color-white font-nunito">
      <div className="flex p-[5rem] justify-between">
        <div className="w-[45%] text-color-blue">
          <h2 className="text-color-gold text-[3rem] font-semibold mb-[1rem]">
            About Brackium
          </h2>
          <p className="">
            Founded in 2023, Brackium has quickly established itself as a
            trusted name in the investment industry. Our journey began with a
            clear vision: to provide personalized and strategic asset management
            services that cater to the unique financial goals of each client.
            From the outset, we committed to a client-first philosophy,
            emphasizing transparency, integrity, and exceptional service.
          </p>
          <p className="my-[1rem]">
            At Brackium, we understand that managing assets is not just about
            numbers but about understanding the aspirations and risk tolerance
            of our clients. Our team of experienced financial advisors and
            investment professionals employs a meticulous approach to asset
            management, combining in-depth market analysis with innovative
            investment strategies. This allows us to create tailored portfolios
            that align with our clients' long-term objectives.
          </p>
          <p>
            Our success is built on our unwavering dedication to our clients.
            Through regular consultations and detailed performance reviews, we
            ensure that our clients are informed and confident in their
            investment choices. Our proactive management style has consistently
            delivered strong returns, even in volatile markets, reinforcing our
            reputation for reliability and excellence.
          </p>
          <p className="mt-[1rem]">
            As we continue to grow, Brackium remains committed to upholding the
            highest standards of financial stewardship, helping our clients
            secure their financial future with confidence and peace of mind.
          </p>
        </div>
        <div className="w-[45%]">
          <Image src={mapImg} alt="image of a map of the world" priority />
        </div>
      </div>
      <Stats />
      <Referral />
    </section>
  );
};

export default About;
