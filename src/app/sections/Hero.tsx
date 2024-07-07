import ParticlesBackground from "@/components/PartclesBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4 pt-32 pb-16"
    >
      <div className="absolute inset-0 bg-primary z-0 w-full h-full">
        <ParticlesBackground />
      </div>
      <div className="z-10 flex flex-col space-y-6 sm:space-y-8">
        <h1 className="font-pacifico text-gradient text-5xl md:text-6xl xl:text-7xl font-medium py-6 sm:py-8">
          Rimsha Gul
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
          Front-End Developer / Full Stack Developer
        </p>
        <div className="flex flex-col sm:flex-row gap-6 pt-8 sm:pt-16 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 uppercase text-white text-lg sm:text-xl lg:text-2xl font-semibold rounded-md bg-gradient-primary shadow-gradient-primary border border-transparent transition duration-200 box-border hover:bg-none hover:text-white hover:border-white hover:shadow-none"
          >
            Hire Me
          </a>
          <a
            href="/Rimsha_Gul's_Résumé.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 uppercase text-white text-lg sm:text-xl lg:text-2xl font-semibold rounded-md border border-white transition duration-200 box-border hover:bg-gradient-primary hover:border-transparent hover:shadow-gradient-primary"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
