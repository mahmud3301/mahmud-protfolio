/* eslint-disable react/no-unescaped-entities */
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div id="about" className="mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
        <div>
          <img
            data-aos="fade-right"
            data-aos-delay="1000"
            src={aboutImg}
            alt="About Img"
            className="w-3/4 md:3/4 lg:2/4 ml-[16%] md:ml-[25%] lg:[18%] mb-0 lg:mb-80 mt-24 md:mt-96 lg:mt-0"
          />
        </div>
        <div className="mt-12">
          <h1
            data-aos="fade-down"
            className="text-4xl text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h1>
          <div>
            <p
              data-aos="zoom-in"
              className="text-2xl text-left font-medium mt-6 mr-8 ml-8 md:ml-0 md:mr-56">
              I'm Mahmudul Hasan Mahi, a passionate MERN stack web developer
              from Jashore, Bangladesh. With expertise in HTML, CSS, JavaScript,
              React.js, and Node.js, I specialize in developing dynamic and
              user-friendly web applications. I have experience collaborating
              with diverse teams and clients to bring ideas to life. I
              prioritize clean and efficient code for scalability and
              maintainability. I stay updated with the latest industry trends
              and constantly seek opportunities to learn and grow. Effective
              communication and teamwork are important to me, and I strive to
              understand clients' goals and deliver tailored solutions. If
              you're looking for a dedicated MERN stack developer, I'd love to
              be part of your team to create exceptional web experiences
              together.
            </p>
            <a
              data-aos="zoom-in"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1hjRt1xAV8oeLZb4UHfiedJfImYY5kV0n/view"
              download="Mahmudul Hasan | Web Developer Resume">
              <button className="p-3 mt-8 ml-8 md:ml-0 cursor-pointer font-semibold bg-gradient-to-r from-pink-700 to-indigo-600 rounded-md hover:scale-[1.2] transition">
                My resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
