import SocialLink from "@/components/SocialLink";
import { socialLinks } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="w-full py-10 px-4 bg-primary text-white flex justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} href={link.href} icon={link.icon} />
          ))}
        </div>
        <div className="w-full max-w-6xl h-px bg-secondary mt-16 mb-9"></div>
        <p className="text-center uppercase text-secondary">
          Rimsha Gul © {currentYear}. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
