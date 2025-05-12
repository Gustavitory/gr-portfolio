import React, { useLayoutEffect, useRef, useState } from "react";
import { navigation } from "@/lib/constants/navigation";
import { NavItem } from "./navItem";
import { cn } from "@/lib/utils/tailwindMerge";

export const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [requiredHeight, setRequiredHeight] = useState("0px");
  const navRef = useRef<HTMLUListElement>(null);
  useLayoutEffect(() => {
    if (navRef.current) {
      setRequiredHeight(`${navRef.current.scrollHeight}px`);
    }
  }, [isOpen]);
  return (
    <nav
      style={{
        height: isOpen ? requiredHeight : "0px",
      }}
      className={cn({
        "nav-sidebar transition-height overflow-hidden": true,
      })}
    >
      <ul ref={navRef} className="flex flex-col gap-y-4">
        {navigation.map((item, ind) => (
          <section
            key={item.label}
            className={cn({
              "px-5": true,
              "pt-5": ind === 0,
              "pb-5": ind === navigation.length - 1,
            })}
          >
            <NavItem {...item} onClick={() => setIsOpen(false)} />
          </section>
        ))}
      </ul>
    </nav>
  );
};
