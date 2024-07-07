"use client";

import { FaGlobe, FaLaptopCode, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
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
      id="services"
      className="w-full py-20 px-4 bg-secondary text-white flex justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl xxs:text-4xl md:text-5xl text-center text-gradient uppercase font-bold pb-16">
          Services
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-4 w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: index === 1 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-2 flex-1 max-w-full lg:max-w-lg flex"
            >
              <div className="flex-1 flex">
                <div className="h-full flex flex-col justify-start bg-gray-800 px-4 py-6 xl:py-12 rounded-lg text-center border border-white shadow-gradient-secondary">
                  <div className="flex justify-center items-center text-6xl xl:text-8xl text-primary pb-6 xl:pb-12">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl xl:text-3xl font-medium pb-4 xl:pb-8">
                    {skill.title}
                  </h3>
                  <p className="text-sm xl:text-2xl">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
