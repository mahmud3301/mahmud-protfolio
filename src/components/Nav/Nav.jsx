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
          duration={300}
          activeClass=""
          onClick={() => setActive("#home")}
          className={`tooltip cursor-pointer ${active === "#home" ? "active" : ""}`}
          data-tip="Home">
          <AiFillHome />
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={350}
          activeClass=""
          onClick={() => setActive("#about")}
          className={`tooltip cursor-pointer ${active === "#about" ? "active" : ""}`}
          data-tip="About">
          <BiSolidUser />
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={400}
          activeClass=""
          onClick={() => setActive("#skills")}
          className={`tooltip cursor-pointer ${active === "#skills" ? "active" : ""}`}
          data-tip="Skills">
          <BsBookFill />
        </ScrollLink>
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={450}
          activeClass=""
          onClick={() => setActive("#portfolio")}
          className={`tooltip cursor-pointer${active === "#portfolio" ? "active" : ""}`}
          data-tip="Portfolio">
          <SiPolymerproject />
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          activeClass=""
          onClick={() => setActive("#contact")}
          className={`tooltip cursor-pointer${active === "#contact" ? "active" : ""}`}
          data-tip="Contact">
          <BsTelephoneFill />
        </ScrollLink>
      </nav>
    </div>
  );
};

export default Nav;
