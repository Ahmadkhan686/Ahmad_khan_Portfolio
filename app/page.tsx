import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import BackendKnowledge from "@/components/sections/BackendKnowledge";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <BackendKnowledge />
      <Contact />
    </main>
  );
}
