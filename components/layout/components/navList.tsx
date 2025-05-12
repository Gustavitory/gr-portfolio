import React from "react";
import { navigation } from "@/lib/constants/navigation";
import { NavItem } from "./navItem";

export const NavList = () => {
  return (
    <nav className="hidden sm:flex">
      <ul className="flex items-center gap-x-4">
        {navigation.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  );
};
