import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto overflow-y-scroll snap-mandatory snap-y h-screen #no-scrollbar'>
      <section id='home' className='snap-center flex flex-col h-screen relative w-full'>
        <Hero />
      </section>

      <section
        id='about'
        className='snap-center flex flex-col h-screen relative w-full bg-secondary '>
        <About />
      </section>
      <section id='projects' className='snap-center flex flex-col h-screen relative w-full'>
        <Projects />
      </section>
      <section
        id='contact'
        className='snap-center flex flex-col h-screen relative w-full bg-secondary'>
        <Contact />
      </section>
    </main>
  );
}
