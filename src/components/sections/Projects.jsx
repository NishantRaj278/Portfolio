import { RevealOnScroll } from "../RevealOnScroll";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

export const Projects = ({ isDarkMode }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ${
              isDarkMode ? "border-white/10" : "border-gray-200"
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}> Socialure</h3>
              <p className={`mb-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
              Socialure is a full-stack social media platform that enables users to connect, share posts, and interact in real-time through a clean and responsive UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/NishantRaj278/Socialure" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://socialure.vercel.app/" target="_blank"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium hover:shadow-lg hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <MdOutlinePlayCircleOutline className="inline-block text-lg" />
                    <span>Live Demo</span>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={`
              glass p-6 rounded-xl border 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all ${isDarkMode ? "border-white/10" : "border-gray-200"}
            `}
            >
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>Blabz</h3>
              <p className={`mb-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
              Blabz is a dynamic blogging platform where users can create, edit, and interact with blog posts in a seamless, responsive environment.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/NishantRaj278/Blabz" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                
              </div>
            </div>

            <div
              className={`
              glass p-6 rounded-xl border 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all ${isDarkMode ? "border-white/10" : "border-gray-200"}
            `}
            >
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>ChatNest</h3>
              <p className={`mb-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
              ChatNest is a real-time chat application that supports instant messaging and media sharing with a responsive, themeable UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.IO"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/NishantRaj278/ChatNest" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://chat-nest-flax.vercel.app/" target="_blank"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium hover:shadow-lg hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <MdOutlinePlayCircleOutline className="inline-block text-lg" />
                    <span>Live Demo</span>
                  </div>
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
