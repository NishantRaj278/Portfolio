import { RevealOnScroll } from "../RevealOnScroll";
import { MdOutlinePlayCircleOutline, MdCode, MdWeb } from "react-icons/md";

export const Projects = ({ isDarkMode }) => {
  return (
    <section
      id="projects"
      className={`min-h-screen flex items-center justify-center py-20 relative overflow-hidden $`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A collection of projects showcasing full-stack development skills
              and modern web technologies
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Socialure Project */}
            <div
              className={`group relative overflow-hidden p-8 rounded-2xl border hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 hover-lift ${
                isDarkMode
                  ? "border-white/10 hover:border-blue-500/50 bg-gray-900"
                  : "border-gray-200 hover:border-blue-300 bg-white"
              }`}
            >
              {/* Animated background gradient overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
                    : "bg-gradient-to-br from-blue-100/50 to-cyan-100/50"
                }`}
              ></div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="absolute top-12 right-8 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 left-6 w-4 h-4 bg-purple-500/30 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <MdWeb className="text-2xl text-blue-500" />
                  </div>
                  <h3
                    className={`text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Socialure
                  </h3>
                </div>

                <p
                  className={`mb-6 leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A full-stack social media platform enabling users to connect,
                  share posts, and interact in real-time through a clean and
                  responsive UI with modern features.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js",
                    "PostgreSQL",
                    "Prisma",
                    "TypeScript",
                    "Tailwind CSS",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-500 py-2 px-4 rounded-full text-sm font-medium hover:from-blue-500/20 hover:to-cyan-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/NishantRaj278/Socialure"
                    target="_blank"
                    className={`flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      isDarkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    <MdCode className="text-lg" />
                    View Code
                  </a>
                  <a
                    href="https://socialure.vercel.app/"
                    target="_blank"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium hover:shadow-xl hover:scale-105 group/btn"
                  >
                    <div className="flex items-center gap-2">
                      <MdOutlinePlayCircleOutline className="text-lg group-hover/btn:animate-spin" />
                      <span>Live Demo</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Inklet Project */}
            <div
              className={`group relative overflow-hidden p-8 rounded-2xl border hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 hover-lift ${
                isDarkMode
                  ? "border-white/10 hover:border-green-500/50 bg-gray-900"
                  : "border-gray-200 hover:border-green-300 bg-white"
              }`}
            >
              {/* Animated background gradient overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
                    : "bg-gradient-to-br from-green-100/50 to-emerald-100/50"
                }`}
              ></div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div
                className="absolute top-12 right-8 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 left-6 w-4 h-4 bg-teal-500/30 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <MdCode className="text-2xl text-green-500" />
                  </div>
                  <h3
                    className={`text-2xl font-bold group-hover:text-green-400 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Inklet
                  </h3>
                </div>

                <p
                  className={`mb-6 leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A dynamic blogging platform where users can create, edit, and
                  interact with blog posts in a seamless, responsive environment
                  with rich content features.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js",
                    "MongoDB",
                    "Prisma",
                    "TypeScript",
                    "Tailwind CSS",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-500 py-2 px-4 rounded-full text-sm font-medium hover:from-green-500/20 hover:to-emerald-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/NishantRaj278/Inklet"
                    target="_blank"
                    className={`flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      isDarkMode
                        ? "text-green-400 hover:text-green-300"
                        : "text-green-600 hover:text-green-700"
                    }`}
                  >
                    <MdCode className="text-lg" />
                    View Code
                  </a>
                  <a
                    href="https://inklet-seven.vercel.app/"
                    target="_blank"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium hover:shadow-xl hover:scale-105 group/btn"
                  >
                    <div className="flex items-center gap-2">
                      <MdOutlinePlayCircleOutline className="text-lg group-hover/btn:animate-spin" />
                      <span>Live Demo</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* HelpHive Project */}
            <div
              className={`group relative overflow-hidden p-8 rounded-2xl border hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 hover-lift ${
                isDarkMode
                  ? "border-white/10 hover:border-orange-500/50 bg-gray-900"
                  : "border-gray-200 hover:border-orange-300 bg-white"
              }`}
            >
              {/* Animated background gradient overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
                    : "bg-gradient-to-br from-orange-100/50 to-amber-100/50"
                }`}
              ></div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <div
                className="absolute top-12 right-8 w-2 h-2 bg-amber-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 left-6 w-4 h-4 bg-yellow-500/30 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <MdWeb className="text-2xl text-orange-500" />
                  </div>
                  <h3
                    className={`text-2xl font-bold group-hover:text-orange-400 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    HelpHive
                  </h3>
                </div>

                <p
                  className={`mb-6 leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A community platform where neighbors connect to offer and
                  request help, report local issues, and strengthen community
                  bonds through real-time messaging and collaborative
                  problem-solving.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Socket.IO",
                    "Tailwind CSS",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-500 py-2 px-4 rounded-full text-sm font-medium hover:from-orange-500/20 hover:to-amber-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/NishantRaj278/HelpHive"
                    target="_blank"
                    className={`flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      isDarkMode
                        ? "text-orange-400 hover:text-orange-300"
                        : "text-orange-600 hover:text-orange-700"
                    }`}
                  >
                    <MdCode className="text-lg" />
                    View Code
                  </a>
                  <div className="bg-gradient-to-r from-orange-500/50 to-amber-500/50 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium cursor-not-allowed opacity-70">
                    <div className="flex items-center gap-2">
                      <MdOutlinePlayCircleOutline className="text-lg" />
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CraftAI Project */}
            <div
              className={`group relative overflow-hidden p-8 rounded-2xl border hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 hover-lift ${
                isDarkMode
                  ? "border-white/10 hover:border-cyan-500/50 bg-gray-900"
                  : "border-gray-200 hover:border-cyan-300 bg-white"
              }`}
            >
              {/* Animated background gradient overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
                    : "bg-gradient-to-br from-cyan-100/50 to-blue-100/50"
                }`}
              ></div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <div
                className="absolute top-12 right-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 left-6 w-4 h-4 bg-indigo-500/30 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <MdWeb className="text-2xl text-cyan-500" />
                  </div>
                  <h3
                    className={`text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    CraftAI
                  </h3>
                </div>

                <p
                  className={`mb-8 leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  CraftAI is an AI-powered developer tool that instantly
                  generates clean, production-ready React components from your
                  text prompts. CraftAI helps you turn ideas into working React
                  code in seconds.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js",
                    "MongoDB",
                    "Node.js",
                    "Express",
                    "TypeScript",
                    "Tailwind CSS",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 py-2 px-4 rounded-full text-sm font-medium hover:from-cyan-500/20 hover:to-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/NishantRaj278/craftAI"
                    target="_blank"
                    className={`flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      isDarkMode
                        ? "text-cyan-400 hover:text-cyan-300"
                        : "text-cyan-600 hover:text-cyan-700"
                    }`}
                  >
                    <MdCode className="text-lg" />
                    View Code
                  </a>
                  <a
                    href="https://craft-ai-pi.vercel.app/"
                    target="_blank"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium hover:shadow-xl hover:scale-105 group/btn"
                  >
                    <div className="flex items-center gap-2">
                      <MdOutlinePlayCircleOutline className="text-lg group-hover/btn:animate-spin" />
                      <span>Live Demo</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ChatNest Project */}
            <div
              className={`group relative overflow-hidden p-8 rounded-2xl border hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 hover-lift ${
                isDarkMode
                  ? "border-white/10 hover:border-purple-500/50 bg-gray-900"
                  : "border-gray-200 hover:border-purple-300 bg-white"
              }`}
            >
              {/* Animated background gradient overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                    : "bg-gradient-to-br from-purple-100/50 to-pink-100/50"
                }`}
              ></div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <div
                className="absolute top-12 right-8 w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 left-6 w-4 h-4 bg-indigo-500/30 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <MdWeb className="text-2xl text-purple-500" />
                  </div>
                  <h3
                    className={`text-2xl font-bold group-hover:text-purple-400 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ChatNest
                  </h3>
                </div>

                <p
                  className={`mb-6 leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A real-time chat application supporting instant messaging and
                  media sharing with a responsive, themeable UI and seamless
                  user experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Tailwind CSS",
                    "Socket.IO",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-500 py-2 px-4 rounded-full text-sm font-medium hover:from-purple-500/20 hover:to-pink-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/NishantRaj278/ChatNest"
                    target="_blank"
                    className={`flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      isDarkMode
                        ? "text-purple-400 hover:text-purple-300"
                        : "text-purple-600 hover:text-purple-700"
                    }`}
                  >
                    <MdCode className="text-lg" />
                    View Code
                  </a>
                  <a
                    href="https://chatnest-1-1.onrender.com/"
                    target="_blank"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium hover:shadow-xl hover:scale-105 group/btn"
                  >
                    <div className="flex items-center gap-2">
                      <MdOutlinePlayCircleOutline className="text-lg group-hover/btn:animate-spin" />
                      <span>Live Demo</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
