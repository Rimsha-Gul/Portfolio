"use client";

import { experiences } from "@/constants";
import { FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-20 px-4 bg-secondary text-white flex justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl xxs:text-4xl md:text-5xl text-center text-gradient uppercase font-bold pb-24">
          Work Experience
        </h2>
        <div className="relative w-full">
          {/* Vertical Line */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-turquoise h-full"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            {/* Central Icon */}
            <div className="flex justify-center items-center text-3xl text-secondary bg-secondary border-2 border-secondary rounded-full p-4 mb-28">
              <FaBuilding />
            </div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="w-full flex justify-between items-center mb-36"
              >
                {index % 2 === 0 ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="w-1/2 px-4 text-right"
                    >
                      <h3 className="text-2xl xl:text-3xl font-bold text-secondary uppercase pb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl xl:text-2xl font-light pb-2">
                        {exp.company}
                      </h4>
                      <p className="text-sm xl:text-xl pb-4">{exp.duration}</p>
                    </motion.div>
                    <div className="flex flex-col items-center px-4">
                      <div className="w-9 h-9 bg-secondary border-2 border-secondary rounded-full flex justify-center items-center">
                        <span className="w-3 h-3 bg-turquoise rounded-full"></span>
                      </div>
                      <div className="w-1 bg-turquoise flex-1"></div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="w-1/2 px-4"
                    >
                      {exp.description.map((desc, idx) => (
                        <p key={idx} className="text-sm xl:text-lg pb-2">
                          {desc}
                        </p>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="w-1/2 px-4 text-right"
                    >
                      {exp.description.map((desc, idx) => (
                        <p key={idx} className="text-sm xl:text-lg pb-2">
                          {desc}
                        </p>
                      ))}
                    </motion.div>
                    <div className="flex flex-col items-center px-4">
                      <div className="w-9 h-9 bg-secondary border-2 border-secondary rounded-full flex justify-center items-center">
                        <span className="w-3 h-3 bg-turquoise rounded-full"></span>
                      </div>
                      <div className="w-1 bg-turquoise flex-1"></div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="w-1/2 px-4 text-left"
                    >
                      <h3 className="text-2xl xl:text-3xl font-bold text-secondary uppercase pb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl xl:text-2xl font-light pb-2">
                        {exp.company}
                      </h4>
                      <p className="text-sm xl:text-xl pb-4">{exp.duration}</p>
                    </motion.div>
                  </>
                )}
              </div>
            ))}
            {/* Bottom Dot */}
            <div className="w-5 h-5 bg-turquoise rounded-full -mt-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
