"use client";
import React, { useEffect } from "react";
import TermsAndCondiition from "./TermsAndCondiition";
import Privacy from "./Privacy";

const Legal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Privacy />
      <TermsAndCondiition />
    </div>
  );
};

export default Legal;
