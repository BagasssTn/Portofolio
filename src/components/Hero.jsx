import { TypeAnimation } from "react-type-animation"
import profile from "../assets/foto profil.png"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center pt-24 pb-10 px-6 relative">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl bottom-20 -right-20"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="fade-in">
          <p className="text-blue-400 mb-1 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold mb-6 leading-normal bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Bagas Tricahya Nugraha
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1500,
              "React Enthusiast",
              1500,
              "UI/UX Oriented Developer",
              1500,
              "Digital Creative",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-gray-300 font-semibold"
          />

          <p className="text-gray-500 mt-6 mb-8 leading-relaxed max-w-lg">
            I am a Fresh Graduate in Information Technology Education with a strong passion for digital creativity, front-end development, and user experience design. I specialize in building responsive web interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS while also focusing on clean and user-centered UI design. During my academic journey, I developed and customized a Moodle-based Learning Management System to support vocational education. I also contributed as a Front-End Developer in team-based web application projects during my internship. Beyond development, I have experience managing social media platforms and digital content strategy as Director of Media and Communication, combining technical skills with creative storytelling.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full transition transform hover:scale-105 shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500 text-blue-400 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center relative">

            {/* Glow */}
            <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>

            {/* Circle Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_70px_rgba(59,130,246,0.5)]">

              <img
                src={profile}
                alt="Bagas Profile"
                className="w-full h-full object-cover object-top"
              />

            </div>

          </div>

      </div>
    </section>
  )
}