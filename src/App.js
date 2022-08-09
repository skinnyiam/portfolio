import About from "./components/About";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div className=" bg-white dark:bg-gray-900  text-black dark:text-white">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialLinks />
      <Footer />
      
    </div>
  );
}

export default App;