import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import Experience from "@/sections/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Experience />
    </main>
  );
}
