import "./App.css";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Stats from "./components/stats";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
