"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { getRandomInt } from "../utils/data";
import modifyNum from "../utils/modifyAmount";
import { motion } from "framer-motion";

const Stats = () => {
  const [data, setData] = useState<any>();
  const iconStyle = "w-[4.5rem] h-[4.5rem] text-color-blue";
  const statsData = useMemo(
    () => [
      {
        title: "Visitors Online",
        value: modifyNum(`${getRandomInt(300, 1000)}`),
        icon: <FaUserPlus className={iconStyle} />,
      },
      {
        title: "Recent Deposits",
        value: modifyNum(`$ ${getRandomInt(20000, 30000)}`),
        icon: <GiWallet className={iconStyle} />,
      },
      {
        title: "Recent Withdrawals",
        value: modifyNum(`$ ${getRandomInt(10000, 15000)}`),
        icon: <BsCashCoin className={iconStyle} />,
      },
      {
        title: "Active accounts",
        value: getRandomInt(300, 500),
        icon: <FaUserCheck className={iconStyle} />,
      },
    ],
    []
  );

  useEffect(() => {
    setData(statsData);
  }, [statsData]);

  return (
    <section className="pb-[5rem] px-[10rem] w-full font-nunito">
      <div className="flex w-full justify-between flex-wrap">
        {data &&
          data.length > 0 &&
          data.map((stats: any, i: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.15 * i }}
              key={i}
              className="flex flex-col items-center border-2 border-color-gold p-[2rem] rounded-xl"
            >
              {stats.icon}
              <p className="text-color-gold font-semibold text-[2rem] my-[1.5rem]">
                {stats.title}
              </p>
              <p className="text-[1.8rem] font-medium">{stats.value}</p>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Stats;
