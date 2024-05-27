import React from "react";
import ParticlesBackground from "@/components/PartclesBackground";

const Hero = () => {
  return (
    <section className="w-full h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0 w-full h-full">
        <ParticlesBackground />
      </div>
      <div className="z-10 flex flex-col space-y-8">
        <h1 className="font-pacifico text-gradient text-7xl font-bold">
          Rimsha Gul
        </h1>
        <p className="text-4xl text-white">
          Front-End Developer / Full Stack Developer
        </p>
        <div className="flex space-x-6 pt-16 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 text-white text-2xl font-semibold rounded-md bg-gradient-primary shadow-gradient-primary hover:bg-none hover:text-white transition duration-200 hover:border hover:border-white hover:shadow-none"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 text-white text-2xl font-semibold rounded-md border border-white hover:bg-gradient-primary hover:border-none transition duration-200 hover:shadow-gradient-primary"
          >
            Get CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
