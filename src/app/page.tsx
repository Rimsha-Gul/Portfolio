import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import HireMe from "@/sections/HireMe";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Experience />
      <Education />
      <HireMe />
      <Contact />
      <Footer />
    </main>
  );
}
