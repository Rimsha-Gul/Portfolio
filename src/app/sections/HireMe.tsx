"use client";

import { FaPaperPlane } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const HireMe = () => {
  return (
    <section
      id="hire-me"
      className="w-full py-20 px-4 bg-turquoise-dark flex justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="relative w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row justify-center items-center gap-8"
          >
            <FaPaperPlane className="text-darker text-6xl mb-0 lg:mb-12" />
            <div className="flex flex-col items-center gap-2 lg:max-w-lg xl:max-w-full">
              <p className="text-darker text-2xl xl:text-4xl uppercase font-bold">
                Hire me for your awesome business
              </p>
              <p className="text-center max-w-[580px]">
                I am available for full-time opportunities that align with your
                business needs. Hire me and let&apos;s create something amazing
                together!
              </p>
            </div>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-76}
              className="mb-0 lg:mb-12 px-12 py-3 bg-primary text-secondary uppercase text-lg font-semibold hover:bg-turquoise-dark hover:text-darker hover:border hover:border-dark transition-colors duration-300 cursor-pointer"
            >
              Hire Me
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
