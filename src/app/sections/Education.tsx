"use client";

import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { education } from "@/constants";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full py-20 px-4 bg-primary text-white flex justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl xxs:text-4xl md:text-5xl text-center text-gradient uppercase font-bold pb-24">
          Education
        </h2>
        <div className="relative w-full">
          {/* Vertical Line */}
          <div className="absolute inset-0 flex justify-start lg:justify-center pl-8 lg:pl-0">
            <div className="w-1 bg-turquoise h-full"></div>
          </div>
          <div className="relative z-10 flex flex-col items-start lg:items-center">
            {/* Central Icon */}
            <div className="flex justify-center items-center text-3xl text-primary bg-primary border-2 border-primary rounded-full p-4 mb-28">
              <FaGraduationCap />
            </div>
            {education.map((exp, index) => (
              <div
                key={index}
                className={`w-full flex flex-col lg:flex-row justify-start lg:justify-between items-start mb-36`}
              >
                {index % 2 === 0 ? (
                  <>
                    {/** Timeline Image */}
                    <div className="flex lg:hidden flex flex-col items-center pl-4">
                      <div className="w-9 h-9 bg-primary border-2 border-primary rounded-full flex justify-center items-center">
                        <span className="w-2.5 h-2.5 bg-turquoise rounded-full"></span>
                      </div>
                      <div className="w-1 bg-turquoise flex-1"></div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="w-full lg:w-1/2 text-start lg:text-right pl-20 lg:pl-0 -mt-8 lg:mt-0"
                    >
                      <h3 className="text-2xl xl:text-3xl font-bold text-primary uppercase pb-2">
                        {exp.institution}
                      </h3>
                      <h4 className="text-xl xl:text-2xl uppercase font-semibold pb-2">
                        {exp.degree}
                      </h4>
                      <p className="xl:text-xl uppercase pb-4">
                        {exp.duration}
                      </p>
                    </motion.div>
                    {/** Timeline Image */}
                    <div className="hidden lg:flex flex-col items-center px-6 pt-10">
                      <div className="w-9 h-9 bg-primary border-2 border-primary rounded-full flex justify-center items-center">
                        <span className="w-2.5 h-2.5 bg-turquoise rounded-full"></span>
                      </div>
                      <div className="w-1 bg-turquoise flex-1"></div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="w-full lg:w-1/2 text-start lg:text-left pl-20 lg:pl-0"
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
                    {/** Timeline Image */}
                    <div className="flex lg:hidden flex flex-col items-center pl-4">
                      <div className="w-9 h-9 bg-primary border-2 border-primary rounded-full flex justify-center items-center">
                        <span className="w-2.5 h-2.5 bg-turquoise rounded-full"></span>
                      </div>
                      <div className="w-1 bg-turquoise flex-1"></div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="w-full lg:hidden text-start pl-20 -mt-8"
                    >
                      <h3 className="text-2xl xl:text-3xl font-bold text-primary uppercase pb-2">
                        {exp.institution}
                      </h3>
                      <h4 className="text-xl xl:text-2xl uppercase font-semibold pb-2">
                        {exp.degree}
                      </h4>
                      <p className="xl:text-xl uppercase pb-4">
                        {exp.duration}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="w-full lg:w-1/2 text-start lg:text-right pl-20 lg:pl-0"
                    >
                      {exp.description.map((desc, idx) => (
                        <p key={idx} className="text-sm xl:text-lg pb-2">
                          {desc}
                        </p>
                      ))}
                    </motion.div>
                    {/** Timeline Image */}
                    <div className="hidden lg:flex flex-col items-center px-6 pt-10">
                      <div className="w-9 h-9 bg-primary border-2 border-primary rounded-full flex justify-center items-center">
                        <span className="w-2.5 h-2.5 bg-turquoise rounded-full"></span>
                      </div>
                      <div className="w-1 bg-turquoise flex-1"></div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="hidden lg:flex flex-col w-1/2 lg:text-left pl-20 lg:pl-0 -mt-8 lg:mt-0"
                    >
                      <h3 className="text-2xl xl:text-3xl font-bold text-primary uppercase pb-2">
                        {exp.institution}
                      </h3>
                      <h4 className="text-xl xl:text-2xl uppercase font-semibold pb-2">
                        {exp.degree}
                      </h4>
                      <p className="xl:text-xl uppercase pb-4">
                        {exp.duration}
                      </p>
                    </motion.div>
                  </>
                )}
              </div>
            ))}
            {/* Bottom Dot */}
            <div className="w-5 h-5 bg-turquoise rounded-full -mt-16 ml-6 lg:ml-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
