import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-gradient-to-r from-pink-900 to-indigo-600 text-base-content rounded pb-36">
        <div className="mt-16">
            <h1 className="text-5xl font-extrabold">Mahmudul Hasan</h1>
          <div className="grid grid-flow-col gap-4 mt-8">
            <div className="flex gap-4 text-3xl font-extrabold">
              <a href="https://github.com/mahmud3301"><FaGithub/></a>
              <a href="https://www.youtube.com/@programmer-mahmud/"><FaYoutube/></a>
              <a href="https://www.facebook.com/mahmudulhasan13.1.8.9"><FaFacebook/></a>
              <a href="https://www.instagram.com/mahmudulhasan13.1.8.9/"><FaInstagram/></a>
              <a href="https://www.linkedin.com/in/mahmudul-hasan-9510b2280/"><FaLinkedin/></a>
            </div>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Mahmudul Hasan</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
