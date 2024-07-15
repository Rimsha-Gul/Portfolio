"use client";

import { skills } from "@/constants";
import { motion } from "framer-motion";

const Services = () => {
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
              className="p-2 flex-1 max-w-full lg:max-w-sm flex"
            >
              <div className="flex-1 flex">
                <div className="h-full flex flex-col justify-start bg-gray-800 px-4 py-6 xl:py-12 rounded-lg text-center border border-white shadow-gradient-secondary">
                  <div className="flex justify-center items-center text-6xl text-primary pb-6 xl:pb-12">
                    <skill.icon />
                  </div>
                  <h3 className="text-2xl font-medium pb-4 xl:pb-8">
                    {skill.title}
                  </h3>
                  <p>{skill.description}</p>
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
