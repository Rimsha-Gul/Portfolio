import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
    </main>
  );
}
