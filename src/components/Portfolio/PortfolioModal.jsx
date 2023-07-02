import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PortfolioModal = ({ setIsModalOpen, selectedProject }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal modal-open">
          <div className="modal-box bg-[#0a0a0a] w-11/12 max-w-2xl lg:max-w-4xl">
            <label
              onClick={() => setIsModalOpen(false)}
              className="btn btn-sm btn-circle border-0 absolute right-8 top-6 cursor-pointer font-semibold bg-gradient-to-r from-pink-600 to-indigo-800 hover:scale-[1.2] transition">
              ✕
            </label>
            <h2 className="text-3xl mt-12 underline text-center font-bold mb-6">
              {selectedProject.projectName}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-12">
              <div className="items-center justify-center m-auto">
                <PhotoProvider>
                  <PhotoView src={selectedProject.image}>
                    <img
                      data-aos="flip-up"
                      src={selectedProject.image}
                      alt={selectedProject.projectName}
                      className="rounded-lg shadow-2xl"
                    />
                  </PhotoView>
                </PhotoProvider>
                <div className="mt-8 flex gap-4 items-center justify-center">
                  <a
                  className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedProject.github_client}>
                    <button
                      className="tooltip btn btn-circle border-0 text-3xl font-extrabold bg-gradient-to-r from-pink-800 to-indigo-900 hover:scale-[1.3] transition"
                      data-tip="Front-End Code">
                      <FaGithub className="ml-2" />
                    </button>
                  </a>
                  <a
                  className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedProject.github_server}>
                    <button
                      className="tooltip btn btn-circle border-0 text-3xl font-extrabold bg-gradient-to-r from-pink-800 to-indigo-900 hover:scale-[1.3] transition"
                      data-tip="Back-End Code">
                      <FaGithub className="ml-2" />
                    </button>
                  </a>
                  <a
                  className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedProject.live_link}>
                    <button
                      className="tooltip mt-2 btn btn-circle border-0 text-3xl font-extrabold bg-gradient-to-r from-pink-800 to-indigo-900 hover:scale-[1.3] transition"
                      data-tip="Live Site">
                      <HiOutlineExternalLink className="m-2" />
                    </button>
                  </a>
                </div>
              </div>
              <div
                data-aos="flip-down"
                className="justify-center my-auto ml-5 mt-5 lg:mt-0">
                <div className="text-white">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Introduction:
                    </h3>
                    <p>{selectedProject.Introduction.info}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 mt-6">
                      Technologies:
                    </h3>
                    <ul className="list-disc pl-6">
                      {selectedProject.Technologies.tech.map(
                        (technology, index) => (
                          <li key={index} className="mb-2">
                            {technology}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
