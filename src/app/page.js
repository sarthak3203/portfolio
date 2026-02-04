import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import PersonalProjects from "@/components/PersonalProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <PersonalProjects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
