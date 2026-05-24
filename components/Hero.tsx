"use client";

import { useState } from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="font-inter">
      <div className="relative bg-[url('/images/image.png')] bg-cover bg-center h-screen w-full">
        {/* NAVBAR */}
        <div className="absolute top-0 left-0 w-full z-50 flex justify-center">
          <Navbar />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>

        <div className="relative z-20 flex flex-col gap-4 justify-center h-full text-center px-6 md:px-16 text-white">
          <p className="">Mordern luxury and timeless living</p>
          <h1 className="text-5xl tracking-tighter">
            Welcome to Our Luxrious <br /> Hotel and Resort
          </h1>

          <div className=" gap-4 mt-4">
            <Button className="bg-amber-400 text-white">
              Book an Apartment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

function Navbar() {
  const navLinks = ["Home", "About", "Our-Rooms", "FAQ"];

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="flex items-center justify-between px-5 md:px-10 py-4 backdrop-blur-md bg-white/10 border-b border-white/10">
        {/* LOGO (LEFT) */}
        <div className="text-white font-semibold text-lg md:text-xl tracking-wide">
          PEACEREST
        </div>

        {/* NAV LINKS (CENTER - desktop only) */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm">
          {navLinks.map((item, i) => (
            <span
              key={i}
              className="cursor-pointer hover:text-gray-300 transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <div className="flex items-center">
          <button className="bg-amber-400 text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-base font-medium hover:bg-amber-300 transition">
            Book an Apartment
          </button>
        </div>
      </div>
    </nav>
  );
}
