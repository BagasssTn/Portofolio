import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel } from "react-icons/fa"
import { SiTailwindcss, SiMysql, SiCanva, SiFigma } from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-6xl" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500 text-6xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-6xl" /> },
    { name: "Canva", icon: <SiCanva className="text-blue-400 text-6xl" /> },
    { name: "Figma", icon: <SiFigma className="text-blue-400 text-6xl" /> },
  ]

  return (
    <section id="skills" className="bg-gray-900 text-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-blue-400">Skills</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-20 animate-scroll whitespace-nowrap items-center">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 px-10 py-8 rounded-2xl shadow-lg min-w-[180px]"
            >
              {skill.icon}
              <span className="mt-4 text-lg font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}