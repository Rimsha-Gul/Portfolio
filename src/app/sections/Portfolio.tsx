"use client";

import { useState } from "react";
import { projects } from "@/constants";
import ScrollAnimation from "react-animate-on-scroll";
import { Project } from "@/types/project";
import ProjectDetails from "@/components/ProjectDetails";
import { TiInfoLarge } from "react-icons/ti";
import { PiLinkSimpleBold } from "react-icons/pi";
import { AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleInfoClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section
      id="portfolio"
      className="w-full py-20 px-4 sm:px-8 bg-primary text-white flex justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl xxs:text-4xl md:text-5xl text-center text-gradient uppercase font-bold pb-16">
          Portfolio
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-6 xl:gap-12">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={index}
              animateIn="fadeIn"
              duration={1}
              className="w-full sm:w-[46%] lg:w-1/3 xl:w-1/4 flex justify-center"
            >
              <div className="relative group flex flex-col items-center w-full">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 portfolio-hover flex flex-col justify-between px-6 pt-6 pb-8">
                    <div className="self-end flex space-x-2">
                      <div
                        onClick={() => handleInfoClick(project)}
                        className="flex items-center justify-center p-2 border-2 border-primary rounded-full text-primary hover:bg-turquoise hover:text-white hover:border-secondary cursor-pointer transition-colors duration-300"
                      >
                        <TiInfoLarge size={24} />
                      </div>
                      <div
                        onClick={() => handleIconClick(project.liveUrl)}
                        className="flex items-center justify-center p-2 border-2 border-primary rounded-full text-primary hover:bg-turquoise hover:text-white hover:border-secondary cursor-pointer transition-colors duration-300"
                      >
                        <PiLinkSimpleBold size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl uppercase font-semibold text-primary pb-1">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            onClose={closeModal}
            project={selectedProject}
            isOpen={isModalOpen}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
