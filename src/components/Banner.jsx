/* eslint-disable react/no-unescaped-entities */
import { useTypewriter, Cursor } from "react-simple-typewriter";
import banner from "../assets/banner-bg.png";
import header from "../assets/header-img.svg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer","Mern Stack Developer", "Content Creator", "Youtuber", "Editor"],
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

  return (
    <div id="home">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-content mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2">
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
            </div>
            <div data-aos="fade-left">
              <div ref={ref}>
                <animated.img
                  src={header}
                  alt="Header Img"
                  className="w-3/4 mt-24 md:mt-8 ml-12 md:ml-[30%] animate-bounce"
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
