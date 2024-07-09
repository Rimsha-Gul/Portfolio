import { Skill } from "@/types";
import { FaGlobe, FaLaptopCode, FaPalette } from "react-icons/fa";

export const skills: Skill[] = [
  {
    title: "Web Development",
    description:
      "Crafting modern, lightning-fast websites that ensure optimal performance, seamless scalability, and create a lasting impression.",
    icon: FaGlobe,
  },
  {
    title: "Full Stack Development",
    description:
      "Designing and developing comprehensive, pixel-perfect applications with a keen eye for detail, from front-end interfaces to back-end logic.",
    icon: FaLaptopCode,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating visually appealing, user-friendly designs that provide seamless user experiences and adapt flawlessly to any screen size.",
    icon: FaPalette,
  },
];
