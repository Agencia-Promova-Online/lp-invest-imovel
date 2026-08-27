import Benefits from "../components/Benefits";
import Company from "../components/Company";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";



function Home() {
 
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Process />
      <Testimonials />
      <Company />
     <Contact/>
    </div>
  );
}

export default Home;