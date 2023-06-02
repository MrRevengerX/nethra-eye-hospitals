import "./App.css";
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
    </>
  );
}

export default App;
