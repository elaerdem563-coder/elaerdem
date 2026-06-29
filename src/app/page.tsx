import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-frame">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Stats />
        <Education />
        <Experience />
        <Certificates />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
