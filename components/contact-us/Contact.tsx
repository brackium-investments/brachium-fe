"use client";
import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactUsMap from "./ContactUsMap";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className=" flex flex-col py-[5rem] items-center font-nunito ">
      <div className="w-[50%]">
        <h3 className="text-center text-[3rem] font-semibold text-color-gold mb-[2rem]">
          Contact Us
        </h3>
        <ContactForm />
      </div>
      <ContactUsMap />
    </div>
  );
};

export default Contact;
