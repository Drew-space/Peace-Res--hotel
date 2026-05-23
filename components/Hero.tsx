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
  const navLinks = [
    "Home",
    "Our-models",
    "inventory",
    "Blog",
    "review",
    "event",
    "Contact",
  ];

  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full">
      <div className="flex w-full items-center justify-center gap-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20">
        {navLinks.map((navs, index) => {
          const isActive = active === navs;

          return (
            <div
              key={index}
              onClick={() => setActive(navs)}
              className="flex items-center capitalize"
            >
              {isActive ? (
                <Button>{navs}</Button>
              ) : (
                <span className="text-white text-sm cursor-pointer hover:text-gray-300">
                  {navs}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
