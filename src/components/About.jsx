export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I am a Fresh graduate in Information Technology Education with a strong enthusiasm for digital creativity, front-end development, and user experience design. I focus on building responsive and intuitive web interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS, while maintaining clean, user-centered design principles.
            Throughout my academic journey, I developed and customized a Moodle-based Learning Management System to support vocational education. I also gained hands-on experience as a Front-End Developer in collaborative web application projects during my internship, working within a team environment to deliver functional and scalable solutions.
            Beyond technical development, I have experience managing social media platforms and shaping digital content strategies as Director of Media and Communication, where I combined technical expertise with creative storytelling to enhance audience engagement and brand presence..
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Highlights
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>🚀 Frontend Development Focus</li>
            <li>⚡ React & Tailwind CSS Enthusiast</li>
            <li>🎨 UI/UX Oriented Mindset</li>
            <li>📚 Social Media Development Strategy</li>
          </ul>
        </div>

      </div>
    </section>
  )
}