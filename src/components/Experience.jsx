import { useEffect, useRef } from "react"

export default function Experience() {
  const containerRef = useRef(null)

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".exp-item")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.2}s`
            entry.target.classList.add("animate-fadeUp")
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Metrodata Academy",
      period: "Feb 2024 - Jun 2024",
      description:
        "Worked as part of a development team focusing on frontend implementation using modern web technologies.",
      points: [
        "Developed responsive UI components using React and Tailwind CSS.",
        "Integrated REST APIs from backend services.",
        "Improved website performance and optimized loading speed.",
        "Collaborated with designers to maintain consistent UI/UX standards.",
      ],
    },
  ]

  return (
    <section id="experience" className="bg-gray-950 text-white py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Work <span className="text-blue-400">Experience</span>
        </h2>

        <div
          ref={containerRef}
          className="relative border-l border-gray-700"
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-item opacity-0 mb-12 ml-6"
            >
              <span className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-950"></span>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition duration-300">
                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-blue-400 text-sm mb-3">
                  {exp.company} • {exp.period}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}