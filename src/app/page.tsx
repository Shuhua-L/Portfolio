import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <main
      className='overflow-y-scroll snap-proximity snap-y h-screen scroll-smooth #no-scrollbar
    prose prose-sm md:prose-base #lg:prose-lg dark:prose-invert max-w-none prose-a:no-underline'>
      <Header />
      <section id='home' className='snap-start flex flex-col relative w-full'>
        <Hero />
      </section>
      <section id='about' className='snap-start flex flex-col relative w-full'>
        <About />
      </section>
      <section id='projects' className='snap-start flex flex-col relative w-full'>
        <Projects />
      </section>
      <section id='contact' className='snap-center flex flex-col relative w-full'>
        <Contact />
      </section>
    </main>
  );
}
