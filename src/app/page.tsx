import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

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
