import About from "./components/About";
import AnimatedCursorUse from "./components/AnimatedCursorUse";
import Banner from "./components/Banner";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <AnimatedCursorUse/>
      <Nav/>
      <Banner/>
      <About/>
      <Skills/>
    </>
  );
};

export default App;
