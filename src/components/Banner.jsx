/* eslint-disable react/no-unescaped-entities */
import { useTypewriter, Cursor } from "react-simple-typewriter";
import banner from "../assets/banner-bg.png";
import header from "../assets/header-img.svg";
import { Link as ScrollLink } from "react-scroll";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";

const PDF_FILE_URL =
  "https://mahmudulhasandev.netlify.app/Mahmudul_Hasan_Web developer_resume.pdf";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Mern Stack Developer",
      "Content Creator",
      "Youtuber",
      "Editor"
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const springProps = useSpring({
    to: { transform: inView ? "translateY(0)" : "translateY(50px)" },
    config: { tension: 0, friction: 0 }
  });

  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div id="home">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
        >
        <div className="hero-content mt-32">
          <div className="mb-24 md:mb-56 lg:mb-0 mx-3 md:mx-24 lg:mx-0 grid grid-cols-1 md:grid-cols-2">
            <div data-aos="fade-right" data-aos-delay="1000">
              <div className="p-2 border-2 mb-4 mr-[49%] bg-gradient-to-r from-pink-900 via-indigo-800 to-purple-800">
                <h1 className="text-2xl font-bold">Welcome to my Portfolio</h1>
              </div>
              <h1 className="text-6xl font-extrabold">
                Hi! I'm Mahmudul Hasan a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {text}
                </span>
                <span>
                  <Cursor cursorStyle="<"></Cursor>
                </span>
              </h1>
              <p className="mt-5">
                I'm Mahmudul Hasan, a passionate developer who transforms ideas
                into captivating digital experiences. With expertise in
                front-end and back-end development, I deliver seamless
                interfaces that impress. By staying current with tech trends, I
                create scalable solutions that exceed expectations. Let's embark
                on this exciting journey to shape a better digital landscape
                together.
              </p>
              <div className="flex gap-5 mt-8">
                <button
                  onClick={() => downloadFileAtURL(PDF_FILE_URL)}
                  className="p-3 cursor-pointer font-semibold border-2 rounded-xl hover:scale-[1.2] transition ">
                  Download resume
                </button>
                <ScrollLink
                  className="group"
                  to="contact"
                  smooth={true}
                  duration={500}>
                  <button className="flex p-3 cursor-pointer font-semibold border-2 rounded-full hover:scale-[1.2] transition">
                    Let's Connect{" "}
                    <FaArrowRight className="ml-2 mt-1 transform translate-x-0 group-hover:translate-x-1" />
                  </button>
                </ScrollLink>
              </div>
            </div>
            <div data-aos="fade-up">
              <div ref={ref}>
                <animated.img
                  src={header}
                  alt="Header Img"
                  className="w-3/4 mt-48 md:mt-56 lg:mt-0 ml-12 md:ml-[30%] animate-bounce"
                  style={springProps}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
