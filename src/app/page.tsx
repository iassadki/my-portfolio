import Header from "../app/components/layout/Header";
import Hero from "../app/components/sections/Hero";
import Presentation from "./components/sections/Presentation";
import Expertise from "./components/sections/Expertise";
import Skills from "./components/sections/Skills";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Process from "./components/sections/Process";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "../app/components/layout/Footer";

// import '../../src/app/globals.css';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Presentation />
      <FeaturedProjects />
      <Expertise />
      <Process />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
