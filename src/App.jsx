import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-40">
        <WhatsAppButton
          message="Hi Abubakar, I found your portfolio and would like to get in touch."
          iconOnly
        />
      </div>
    </>
  );
}
