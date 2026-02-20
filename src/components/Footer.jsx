import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-blue-400 mb-12">
          Bagas Tricahya Nugraha
        </h2>

        <div className="bg-gray-900 border border-gray-800 p-10 rounded-3xl shadow-lg max-w-2xl mx-auto">

          <h3 className="text-xl font-semibold mb-8">
            Get In Touch
          </h3>

          <div className="space-y-6 text-gray-400">

            {/* EMAIL */}
            <a
              href="mailto:bagas.nugrah201@email.com?subject=Let's Work Together&body=Hi Bagas,"
              className="flex items-center justify-center gap-4 hover:text-blue-400 transition"
            >
              <FaEnvelope />
              bagas.nugrah201@gmail.com
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/6283893885871"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 hover:text-blue-400 transition"
            >
              <FaPhoneAlt />
              +62 838-9388-5871
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/bagassstn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 hover:text-blue-400 transition"
            >
              <FaLinkedin />
              linkedin.com/in/bagassstn
            </a>

          </div>
        </div>

        <div className="border-t border-gray-800 my-12"></div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-medium">
            Bagas Tricahya Nugraha
          </span>{" "}
          All rights reserved.
        </p>

      </div>
    </footer>
  )
}