import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Exclusivity from "./components/Exclusivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Portfolio />
        <Testimonials />
        <Exclusivity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
