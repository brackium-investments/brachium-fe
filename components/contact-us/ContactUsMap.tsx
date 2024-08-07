"use client";
import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const ContactUsMap = () => {
  const position: any = [31.9686, 99.9018];

  return (
    <div className="w-[70%] mx-auto h-[80rem]  overflow-hidden mt-[10rem] mb-[8rem]">
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactUsMap;
