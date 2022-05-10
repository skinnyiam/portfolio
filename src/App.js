import About from "./components/About";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full bg-gray-900">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
