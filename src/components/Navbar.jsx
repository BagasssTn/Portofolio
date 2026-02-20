import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Bagas Tricahya</h1>

        {/* desktop */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer text-2xl"
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <ul className="md:hidden bg-gray-900 text-center space-y-4 py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block hover:text-blue-400 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}