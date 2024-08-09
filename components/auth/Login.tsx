/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Auth from "./Auth";
import LoginForm from "./LoginForm";
import Link from "next/link";

const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Auth>
      <div className="w-full flex flex-col font-nunito">
        <p className="text-[2.5rem] font-semibold text-color-blue text-center mb-[3rem]">
          Login
        </p>
        <LoginForm />
        <div className="flex items-center justify-center mt-[3rem]">
          <p>Don't have an account?</p>
          <Link
            href="/brackium/register"
            className="text-color-blue ml-[0.75rem]"
          >
            Register
          </Link>
        </div>
      </div>
    </Auth>
  );
};

export default Login;
