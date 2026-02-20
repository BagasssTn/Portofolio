import { useState, useEffect } from "react"

// LMS Screenshots
import lms1 from "../assets/lms1.png"
import lms2 from "../assets/lms2.png"
import lms3 from "../assets/lms3.png"
import lms4 from "../assets/lms4.png"
import lms5 from "../assets/lms5.png"

// Company Screenshots
import company1 from "../assets/company1.png"
import company2 from "../assets/company2.png"
import company3 from "../assets/company3.png"
import company4 from "../assets/company4.png"
import company5 from "../assets/company5.png"
import company6 from "../assets/company6.png"
import company7 from "../assets/company7.png"

// Feed Screenshots
import feed1 from "../assets/feed1.png"
import feed2 from "../assets/feed2.png"
import feed3 from "../assets/feed3.png"
import feed4 from "../assets/feed4.png"
import feed5 from "../assets/feed5.png"
import feed6 from "../assets/feed6.png"

// Freelance Screenshots
import free1 from "../assets/free1.png"
import free2 from "../assets/free2.png"
import free3 from "../assets/free3.png"
import free4 from "../assets/free4.png"
import free5 from "../assets/free5.jpg"
import free6 from "../assets/free6.png"
import free7 from "../assets/free7.jpg"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  // ESC close support
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null)
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return () => {
    document.body.style.overflow = "auto"
  }
}, [selectedProject])

  const projects = [
    {
      title: "LMS WeCodTry",
      description:
        "A modern Learning Management System focused on structured learning and user experience.",
      fullDescription:
        "This LMS was developed to enhance student learning through structured modules, interactive UI, authentication system, and dashboard analytics.",
      tech: ["Moodle", "HTML", "CSS"],
      screenshots: [lms1, lms4, lms2, lms3, lms5],
    },
    {
      title: "Company Profile Website",
      description:
        "Responsive company website with clean UI and optimized performance.",
      fullDescription:
        "Designed and developed a responsive company website with modern layout, performance optimization, and scalable component structure.",
      tech: ["React", "Tailwind"],
      screenshots: [company1, company7, company3, company2, company4, company5, company6],
    },
    {
      title: "Instagram Feed Design Strategy",
      description:
        "Creative and visually consistent Instagram feed design to enhance brand identity and audience engagement.",
      fullDescription:
        "Created a cohesive and strategic Instagram feed design that strengthened brand identity and improved audience engagement. Developed visually engaging post templates, ensured color consistency, and optimized layout structure — resulting in increased interaction and improved overall profile aesthetics.",
      tech: ["Canva", "Content Planning", "Branding Stategy"],
      screenshots: [feed1, feed3, feed2, feed4, feed5, feed6],
    },
        {
      title: "Freelance Creative Designer",
      description:
        "Strategic visual design solutions for social media branding and digital campaigns.",
      fullDescription:
        "Delivered strategic and visually compelling design solutions for clients, focusing on social media branding, content consistency, and audience engagement. Developed cohesive Instagram feed concepts, modern post templates, and campaign visuals aligned with brand identity — helping improve digital presence and overall brand perception.",
      tech: ["Canva", "Branding Strategy", "Content Planning"],
      screenshots: [free4, free2, free3, free5, free6, free7, free1],
    },
  ]

  return (
    <section id="projects" className="bg-gray-950 text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedProject(project)
                setActiveImage(0)
              }}
              className="cursor-pointer group bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition duration-500"
            >
              <div className="relative bg-gray-800 flex items-center justify-center h-56 overflow-hidden">
                <img
                  src={project.screenshots[0]}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6"
          onClick={() => setSelectedProject(null)} // close when click outside
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-3xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // prevent close inside
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* MAIN IMAGE */}
            <div className="bg-gray-800 rounded-xl mb-4">
            <img
              src={selectedProject.screenshots[activeImage]}
              alt="Project Screenshot"
              className="w-full max-h-[70vh] object-contain transition duration-300"
            />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 mb-6 overflow-x-auto">
              {selectedProject.screenshots.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImage(index)}
                  className={`w-24 h-16 object-cover rounded-lg cursor-pointer border-2 transition ${
                    activeImage === index
                      ? "border-blue-500"
                      : "border-transparent hover:border-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* TITLE */}
            <h3 className="text-3xl font-bold mb-4">
              {selectedProject.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              {selectedProject.fullDescription}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}