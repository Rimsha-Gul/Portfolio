import { CloseButton, Dialog } from "@headlessui/react";
import { FiX } from "react-icons/fi";
import { Project } from "@/types/project";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { motion } from "framer-motion";

interface ModalProps {
  onClose: () => void;
  project: Project;
  isOpen: boolean;
}

const ProjectDetails: React.FC<ModalProps> = ({ onClose, project, isOpen }) => {
  const slider = useRef<Slider>(null);

  const settings: Settings = {
    dots: true,
    lazyLoad: "progressive" as LazyLoadTypes,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-primary px-2 sm:px-4 xl:px-8 pt-12 pb-8 rounded-lg w-full min-h-full flex flex-col lg:flex-row gap-8 lg:gap-4 relative"
        >
          <CloseButton
            as="button"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-300 icon-stroke cursor-pointer"
          >
            <FiX size={24} />
          </CloseButton>
          <div className="w-full flex flex-col items-start lg:flex-row gap-8 lg:gap-4">
            <div className="w-full lg:w-3/5 flex-shrink-0 relative group">
              <Slider ref={slider} {...settings} className="w-full">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex items-center justify-center "
                  >
                    <img
                      src={image}
                      alt={`${project.title} image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <HiChevronLeft
                onClick={() => slider?.current?.slickPrev()}
                className="absolute top-1/2 transform -translate-y-1/2 left-2 icon-stroke-variant text-dark hover:text-turquoise transition-all duration-300 ease-in-out text-6xl cursor-pointer opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0"
              />
              <HiChevronRight
                onClick={() => slider?.current?.slickNext()}
                className="absolute top-1/2 transform -translate-y-1/2 right-2 icon-stroke-variant text-dark hover:text-turquoise transition-all duration-300 ease-in-out text-6xl cursor-pointer opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0"
              />
            </div>
            <div className="flex flex-col space-y-4 w-full lg:w-2/5 min-h-full relative pr-2">
              <h2 className="text-2xl sm:text-3xl xl:text-4xl text-gradient uppercase font-bold">
                {project.title}
              </h2>
              <section>
                <h3 className="text-turquoise uppercase text-lg xl:text-xl font-bold pb-2">
                  Introduction
                </h3>
                <p className="text-white text-sm xl:text-base">
                  {project.intro}
                </p>
              </section>
              <section>
                <h3 className="text-turquoise uppercase text-lg xl:text-xl font-bold pb-2">
                  Features
                </h3>
                <ul className="pl-5 list-disc list-outside">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-white text-sm xl:text-base">
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className="text-turquoise uppercase text-lg xl:text-xl font-bold pb-2">
                  Skills Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-light-gray font-medium text-white text-sm xl:text-base px-3 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="text-turquoise uppercase text-lg xl:text-xl font-bold pb-2">
                  URL
                </h3>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm xl:text-base hover:text-turquoise underline"
                >
                  {project.liveUrl}
                </a>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </Dialog>
  );
};

export default ProjectDetails;
