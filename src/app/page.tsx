// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "../app/components/layout/Header";
import Hero from "../app/components/sections/Hero";
import Presentation from "./components/sections/Presentation";
import Expertise from "./components/sections/Expertise";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Companys from "./components/sections/Companys";
import Resume from "./components/sections/Resume";
import Contact from "../app/components/sections/Contact";
import Footer from "../app/components/layout/Footer";

import '../../src/app/globals.css';

export default function Home() {
  return (
    <div className="pt-16">
      <Header />
      <Hero />
      <Presentation />
      <Expertise />
      <Skills />
      <Projects />
      <Companys />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}