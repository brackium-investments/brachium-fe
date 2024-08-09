"use client";
import Auth from "@/components/auth/Auth";
import ForgotPassword from "@/components/auth/ForgotPassword";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Auth>
      <p className="text-[2.5rem] font-semibold text-color-blue text-center mb-[3rem]">
        Forgot Password
      </p>
      <ForgotPassword />
      <div className=" mt-[2rem]  flex items-center justify-center">
        <p className="mr-[.75rem] ">Remembered login details? </p>
        <Link href={"/brackium/login"} className="text-color-blue">
          Login
        </Link>
      </div>
    </Auth>
  );
};

export default page;
