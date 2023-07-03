// import { useEffect,useState } from "react";

// const Skills = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("skills.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   },[]);
//   return (
//     <div id="skills">
//       <h1
//         data-aos="zoom-in"
//         className="text-4xl text-center mt-24 mb-14 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//         Skills
//       </h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto mr-12 md:mx-[0%] lg:mx-[9%]">
//         {data.map((skill, index) => (
//           <div key={index} data-aos="fade-right" className="relative">
//           <img
//             src={skill.logo}
//             className="w-52 h-52 ml-3 mt-1 rounded p-4"
//           />
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black rounded-3xl">
//             <p className="text-white text-lg font-bold">
//               <div
//                 data-aos="fade-right"
//                 className="radial-progress mr-0 lg:mr-12 ml-5 md:ml-0 lg:ml-0 text-purple-500"
//                 style={{
//                   "--value": skill.percentage,
//                   "--size": "8rem",
//                   "--thickness": "5px"
//                 }}>
//                 <h1 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//                   {skill.name}
//                 </h1>
//                 <p className="text-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//                   {skill.percentage}%
//                 </p>
//               </div>
//             </p>
//           </div>
//         </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

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
        <div className="border-2 border-gray-800 shadow-2xl p-8 rounded-2xl hover:bg-[#141414] transition">
          <h2 className="text-3xl font-bold mb-4 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Front-end Skills
          </h2>
          <ul className="list-disc ml-7">
            {frontEndSkills.map((skill) => (
              <li className="text-2xl mt-2" key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="border-2 border-gray-800 shadow-2xl p-8 rounded-2xl hover:bg-[#141414] transition">
          <h2 className="text-3xl font-bold mb-4 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Back-end Skills
          </h2>
          <ul className="list-disc ml-7">
            {backEndSkills.map((skill) => (
              <li className="text-2xl mt-2" key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="border-2 border-gray-800 shadow-2xl p-8 rounded-2xl hover:bg-[#141414] transition">
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
