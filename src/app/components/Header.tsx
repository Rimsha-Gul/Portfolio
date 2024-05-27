"use client";

import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "work", label: "Work" },
  { href: "contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-primary z-10">
      <div className="font-pacifico text-5xl text-gradient pr-2">
        Rimsha Gul
      </div>
      <nav className="text-2xl font-bold space-x-6 text-gradient">
        {navLinks.map((link) => (
          <ScrollLink
            key={link.href}
            to={link.href}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
