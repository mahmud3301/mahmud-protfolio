import { Toaster } from "react-hot-toast";
import About from "./components/About";
import AnimatedCursorUse from "./components/AnimatedCursorUse";
import Banner from "./components/Banner";
import Contract from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <AnimatedCursorUse />
      <Toaster position="top-center" reverseOrder={false} />
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contract />
      <Footer />
    </>
  );
};

export default App;
