import React from "react";
import { HackerRoom } from "@/components/models/hackerRoom/hackerRoom";
export const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Gustavo <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="size-full absolute inset-0">
        <HackerRoom />
      </div>
    </section>
  );
};
