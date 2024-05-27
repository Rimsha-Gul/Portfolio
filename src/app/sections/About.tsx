"use client";

import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FaGlobe, FaLaptopCode, FaPalette } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      title: "Web Development",
      description:
        "Crafting modern, lightning-fast websites that ensure optimal performance, seamless scalability, and create a lasting impression.",
      icon: <FaGlobe />,
    },
    {
      title: "Full Stack Development",
      description:
        "Designing and developing comprehensive, pixel-perfect applications with a keen eye for detail, from front-end interfaces to back-end logic.",
      icon: <FaLaptopCode />,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating visually appealing, user-friendly designs that provide seamless user experiences and adapt flawlessly to any screen size.",
      icon: <FaPalette />,
    },
  ];

  return (
    <section
      id="about"
      className="w-full h-screen py-20 bg-secondary text-white flex justify-center items-center relative overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
      }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-5xl text-gradient uppercase font-bold mb-16">
          Services
        </h2>
        <div className="flex justify-center gap-4 w-full">
          {skills.map((skill, index) => (
            <ScrollAnimation
              key={index}
              animateIn="fadeInUp"
              duration={1}
              className="p-4 flex-1 max-w-lg flex"
            >
              <div className="p-4 flex-1 max-w-lg flex">
                <div className="h-full flex flex-col justify-start bg-gray-800 px-10 py-12 rounded-lg text-center border border-white shadow-gradient-secondary">
                  <div className="flex justify-center items-center text-8xl text-secondary mb-12">
                    {skill.icon}
                  </div>
                  <h3 className="text-3xl font-medium mb-8">{skill.title}</h3>
                  <p className="text-2xl">{skill.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
