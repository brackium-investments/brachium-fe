"use client";
import React from "react";

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="w-full min-h-[80vh] flex justify-center items-center bg-color-light-blue ">
      <div className="bg-color-gold w-[35%] px-[2rem] py-[3rem] rounded-xl border border-color-blue shadow-lg">
        {children}
      </div>
    </section>
  );
};

export default Auth;
