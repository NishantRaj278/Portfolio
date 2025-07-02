import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ isDarkMode }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative">
          {/* Animated title with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight animate-gradient">
            Hi, I'm Nishant Raj
          </h1>

          {/* Subtitle with typing effect */}
          <div className="relative mb-8">
            <p
              className={`text-lg max-w-lg mx-auto leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I'm a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>
          </div>

          {/* Enhanced buttons with glow effects */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-xl font-medium transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transform"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>View Projects</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#contact"
              className={`group py-4 px-8 rounded-xl font-medium transition-all duration-300 border-2 border-blue-500/50 hover:border-blue-500 hover:scale-105 transform hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] ${
                isDarkMode
                  ? "text-blue-400 hover:bg-blue-500/10"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span>Contact Me</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float opacity-70"></div>
          <div
            className="absolute -bottom-20 -right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-float opacity-70"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </RevealOnScroll>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className={`w-6 h-10 border-2 rounded-full ${
            isDarkMode ? "border-gray-600" : "border-gray-400"
          } flex justify-center`}
        >
          <div
            className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              isDarkMode ? "bg-gray-500" : "bg-gray-600"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};
