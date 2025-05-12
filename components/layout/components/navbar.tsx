"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavList } from "./navList";
import { MobileNav } from "./mobileNav";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 px-4 mx-auto c-space">
          <a
            href="#"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Gustavo
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex"
            aria-label="toggle menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
          <NavList />
        </div>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
