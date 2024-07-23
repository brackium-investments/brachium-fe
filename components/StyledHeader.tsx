"use client";
import React from "react";

const StyledHeader = ({ text }: { text: string }) => {
  return (
    <h2 className="bg-gradient-to-r from-color-gold  to-color-white text-transparent brackium bg-clip-text text-center text-[3rem] mb-[3rem]">
      {text}
    </h2>
  );
};

export default StyledHeader;
