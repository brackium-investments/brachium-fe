"use client";
import { getLatestCryptoCurData } from "@/services/cryptoDataService";
import React, { useEffect, useState } from "react";
import { filterCoins } from "../utils/helper-functions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

interface Coin {
  name: string;
  symbol: string;
  price: string;
  img: string;
}

const CryptoDataList = () => {
  const [coinsList, setCoinsList] = useState<Coin[]>([]);

  const getData = async () => {
    const response = await getLatestCryptoCurData();
    const coins = response.data.data.cryptoData;
    const filteredCoins = filterCoins(coins);
    setCoinsList(filteredCoins);
  };

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      {coinsList.length > 0 && (
        <div className="bg-main-1 py-[10rem]">
          <Slider {...settings}>
            {coinsList.map((coin: Coin) => (
              <div key={coin.name}>
                <div className="flex items-center">
                  <Image
                    src={coin.img}
                    alt={coin.name}
                    priority
                    width={200}
                    height={200}
                    className="w-[8rem] h-[8rem] rounded-full"
                  />
                  <div className="ml-[1rem] text-color-gold">
                    <p className="font-medium">{coin.name}</p>
                    <p className="text-[1.4rem]">{coin.symbol}</p>
                    <p className="text-[1.4rem]">
                      ${Object(Object(coin.price).USD).price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default CryptoDataList;
