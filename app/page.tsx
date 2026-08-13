import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Project from "@/app/components/Project";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6fb] pb-20 overflow-hidden">
      <Navbar />
      <Hero />
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </main>
  );
}