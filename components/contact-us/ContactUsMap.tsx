"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ContactUsMap = () => {
  return (
    <div className="w-[70%] mx-auto h-[80rem]  overflow-hidden mt-[10rem] mb-[8rem]">
      <div className="border border-color-blue rounded-xl p-[1rem]">
        <Image
          src={`
         https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:-122.304378,47.526022&zoom=14&marker=lonlat:-122.304378,47.526022;color:%2306283d;size:small&scaleFactor=2&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}
          `}
          alt="map"
          priority
          width={2600}
          height={2600}
          className="w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default ContactUsMap;
