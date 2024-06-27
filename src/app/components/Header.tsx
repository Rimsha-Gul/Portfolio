"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiBars3 } from "react-icons/hi2";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "services", label: "Services" },
  { href: "portfolio", label: "Portfolio" },
  { href: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 pt-4 pb-1 bg-primary bg-opacity-75 backdrop-blur-lg z-30">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-90}
          className="font-pacifico text-5xl text-gradient pr-2 pb-6 cursor-pointer"
        >
          Rimsha Gul
        </ScrollLink>
        <nav className="hidden lg:flex text-2xl font-bold space-x-6 text-gradient">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              to={link.href}
              smooth={true}
              duration={500}
              offset={-90}
              className="cursor-pointer"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <HiBars3 className="text-3xl text-turquoise" />
          </button>
        </div>
      </header>
      <div
        className={`${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } fixed left-0 right-0 top-[92px] bg-primary bg-opacity-75 backdrop-blur-lg transition-all duration-500 overflow-hidden z-20`}
      >
        <nav className="flex flex-col justify-center items-center space-y-4 text-xl font-bold text-gradient p-5">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              to={link.href}
              smooth={true}
              duration={500}
              offset={-90}
              className="cursor-pointer"
              onClick={toggleMenu}
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
