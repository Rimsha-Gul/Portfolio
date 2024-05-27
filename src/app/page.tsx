import Hero from "@/sections/Hero";
import About from "@/sections/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Hero />
      <About />
    </main>
  );
}
