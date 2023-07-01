import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black text-white fixed z-10 px-24 bg-opacity-25">
        <div className="flex-1">
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            to="home">
            <div className="flex ml-32">
              <img className="w-10 h-9 ml-6" src={logo} alt="" />
              <h1
                className="cursor-pointer ml-2 text-2xl font-extrabold hover:text-transparent
            bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Mahmud
              </h1>{" "}
            </div>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                
                className="cursor-pointer font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                to="home">
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                
                className="cursor-pointer font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                to="about">
                About
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                
                className="cursor-pointer font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                to="skills">
                Skills
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                
                className="cursor-pointer font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                to="projects">
                Projects
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                
                className="cursor-pointer font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                to="contract">
                Contract
              </Link>
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1hjRt1xAV8oeLZb4UHfiedJfImYY5kV0n/view"
            target="_blank"
            rel="noopener noreferrer"
            download="Mahmudul Hasan | Web Developer Resume">
            <button className="p-3 ml-2 cursor-pointer font-semibold bg-gradient-to-r from-pink-700 to-indigo-600 rounded-md hover:scale-[1.2] transition">
              My resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
