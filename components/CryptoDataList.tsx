"use client";
import { getLatestCryptoCurData } from "@/services/cryptoDataService";
import React, { useEffect } from "react";

const CryptoDataList = () => {
  const getData = async () => {
    console.log("loading..");
    const response = await getLatestCryptoCurData();
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>CryptoDataList</div>;
};

export default CryptoDataList;
