import React from "react";

export const NavItem = ({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="text-neutral-400 hover:text-white transition-colors"
      >
        {label}
      </a>
    </li>
  );
};
