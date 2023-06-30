import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section id='home' className='flex flex-col h-screen relative w-full'>
        <Hero />
      </section>

      <section id='about' className='flex flex-col h-screen relative w-full bg-secondary '>
        <About />
      </section>
      <section id='projects' className='flex flex-col h-screen relative w-full'>
        <Projects />
      </section>
      <section id='contact' className='flex flex-col h-screen relative w-full bg-secondary'>
        <Contact />
      </section>
    </main>
  );
}
