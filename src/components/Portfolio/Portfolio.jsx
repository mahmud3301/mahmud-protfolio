import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import PortfolioModal from "./PortfolioModal";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const openModal = (toy) => {
    setSelectedProject(toy);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="px-16">
        <h1 className="text-4xl text-center mt-16 mb-14 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Portfolio
        </h1>
        <div
          style={{
            background: "linear-gradient(to right, #DC2626, #5B21B6, #9333EA"
          }}
          data-aos="fade-up"
          data-aos-delay="1000"
          className="py-16 rounded-3xl"
          id="projects">
          <div>
            <div className="ml-28">
              <div className="grid grid-cols-3">
                {data.map((project, index) => (
                  <div key={index} className="relative group">
                    <img
                      data-aos="fade-down"
                      data-aos-delay="1500"
                      src={project.image[0]}
                      alt=""
                      className="w-96 h-72 rounded-2xl"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-800 to-pink-700 bg-opacity-50 rounded-2xl w-96 h-72 transform translate-y-32 group-hover:translate-y-0">
                      <h2 className="text-center text-4xl mt-24 font-extrabold mb-6">
                        {project.projectName}
                      </h2>
                      <div className="flex items-center justify-center">
                        <p
                          className="text-white text-2xl font-bold mr-8 tooltip"
                          data-tip="Live Site">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.live_link}>
                            <FaLink />
                          </a>
                        </p>
                        <p
                          className="text-white text-2xl font-bold tooltip"
                          data-tip="View"
                          onClick={() => openModal(project)}>
                          <HiOutlineExternalLink  />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <PortfolioModal setIsModalOpen={setIsModalOpen} selectedProject={selectedProject}/>
      )}
    </>
  );
};

export default Projects;
