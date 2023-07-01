import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsBookFill, BsTelephoneFill } from "react-icons/bs";
import { SiPolymerproject } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import "./Nav.css";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("#home");
  return (
    <div>
      <nav>
        <ScrollLink
          to="home"
          smooth={true}
          duration={200}
          activeClass=""
          onClick={() => setActive("#home")}
          className={`tooltip ${active === "#home" ? "active" : ""}`}
          data-tip="Home">
          <AiFillHome />
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={200}
          activeClass=""
          onClick={() => setActive("#about")}
          className={`tooltip ${active === "#about" ? "active" : ""}`}
          data-tip="About">
          <BiSolidUser />
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={200}
          activeClass=""
          onClick={() => setActive("#skills")}
          className={`tooltip ${active === "#skills" ? "active" : ""}`}
          data-tip="Skills">
          <BsBookFill />
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={200}
          activeClass=""
          onClick={() => setActive("#projects")}
          className={`tooltip${active === "#projects" ? "active" : ""}`}
          data-tip="Projects">
          <SiPolymerproject />
        </ScrollLink>
        <ScrollLink
          to="contract"
          smooth={true}
          duration={200}
          activeClass=""
          onClick={() => setActive("#contract")}
          className={`tooltip${active === "#contract" ? "active" : ""}`}
          data-tip="Contract">
          <BsTelephoneFill />
        </ScrollLink>
      </nav>
    </div>
  );
};

export default Nav;
