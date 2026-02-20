import { FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Let's <span className="text-blue-400">Connect</span>
        </h2>

        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          I am open to internship opportunities, freelance projects, 
          and frontend development collaborations. 
          Feel free to reach out and connect with me on LinkedIn.
        </p>

        {/* BIG CARD */}
        <div className="flex justify-center">
          <a
            href="https://linkedin.com/in/bagassstn"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 hover:bg-gray-700 w-full md:w-2/3 p-12 rounded-3xl shadow-xl hover:shadow-blue-500/30 transition duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center gap-6">
              
              <FaLinkedin className="text-7xl text-blue-500 group-hover:scale-110 transition duration-300" />

              <h3 className="text-2xl md:text-3xl font-semibold">
                Connect with me on LinkedIn
              </h3>

              <p className="text-gray-400 text-base">
                linkedin.com/in/bagassstn
              </p>

            </div>
          </a>
        </div>

      </div>
    </section>
  )
}