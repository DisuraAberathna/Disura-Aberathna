import { AnimatePresence } from "framer-motion";
import Transition from "./components/Transition";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import { navItems } from "./data";
import './index.css'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Transition />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip">
        <div className="w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <About />
          <Service />
          <Project />
          <Testimonial />
          <Contact />
          <Footer />
          <WhatsappButton />
        </div>
      </main>
    </AnimatePresence>
  );
}

export default App;
