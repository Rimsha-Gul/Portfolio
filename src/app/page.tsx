import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import HireMe from "@/sections/HireMe";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Experience />
      <Education />
      <HireMe />
    </main>
  );
}
