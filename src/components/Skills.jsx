const Skills = () => {
  const frontEndSkills = [
    "Html5",
    "Css3",
    "Tailwind CSS",
    "Bootstrap",
    "React",
    "DaisyUI"
  ];

  const backEndSkills = [
    "Java-Script (ES6)",
    "MongoDB",
    "Express",
    "Node Js",
    "Rest APIs",
    "Next Js"
  ];

  const tools = [
    "Vs Code",
    "Figma",
    "Chat GPT",
    "GitHub",
    "npm",
    "Chrome Dev Tools",
    "React Developer Tools",
    "Netlify",
    "Vercel"
  ];

  return (
    <div id="skills" className="mt-28 px-0 md:px-12">
      <h1
        data-aos="zoom-in"
        className="text-4xl text-center mt-16 mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <div data-aos="fade-up" data-delay="2000" className="transition border-2 border-gray-800 shadow-2xl p-8 rounded-2xl hover:bg-[#141414]">
          <h2 className="text-3xl font-bold mb-4 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Front-end Skills
          </h2>
          <ul className="list-disc ml-7">
            {frontEndSkills.map((skill) => (
              <li className="text-2xl mt-2" key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-delay="2500" className="border-2 border-gray-800 shadow-2xl p-8 rounded-2xl hover:bg-[#141414] transition">
          <h2 className="text-3xl font-bold mb-4 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Back-end Skills
          </h2>
          <ul className="list-disc ml-7">
            {backEndSkills.map((skill) => (
              <li className="text-2xl mt-2" key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-delay="3000" className="border-2 border-gray-800 shadow-2xl p-8 rounded-2xl hover:bg-[#141414] transition">
          <h2 className="text-3xl font-bold mb-4 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Tools
          </h2>
          <ul className="list-disc ml-7">
            {tools.map((tool) => (
              <li className="text-2xl mt-2" key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
