import { RevealOnScroll } from "../RevealOnScroll";
import { MdCode, MdStorage, MdCloud, MdSchool } from "react-icons/md";

export const About = ({ isDarkMode }) => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
  ];

  const backendSkills = [
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "NestJS",
  ];
  const devopsSkills = ["Git & Github", "Docker", "Linux", "AWS"];

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center py-20 `}
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>

          {/* Main description card */}
          <div
            className={`group relative overflow-hidden p-8 rounded-2xl border hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover-lift mb-12 ${
              isDarkMode
                ? "border-white/10 hover:border-blue-500/50 bg-gray-900"
                : "border-gray-200 hover:border-blue-300 bg-white"
            }`}
          >
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative z-10">
              <p
                className={`text-center leading-relaxed text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I&apos;m a passionate full-stack developer with expertise in
                building scalable web applications and creating innovative
                solutions that make a difference. I love turning complex
                problems into simple, beautiful, and intuitive solutions.
              </p>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Frontend Skills */}
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
                className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <MdCode className="text-2xl text-blue-500" />
                  </div>
                  <h3
                    className={`text-xl font-bold group-hover:text-blue-400 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Frontend
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-500 py-2 px-4 rounded-full text-sm font-medium hover:from-blue-500/20 hover:to-cyan-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Skills */}
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
                className="absolute bottom-6 left-6 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <MdStorage className="text-2xl text-green-500" />
                  </div>
                  <h3
                    className={`text-xl font-bold group-hover:text-green-400 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Backend
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-500 py-2 px-4 rounded-full text-sm font-medium hover:from-green-500/20 hover:to-emerald-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps Skills */}
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
                className="absolute bottom-6 left-6 w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <MdCloud className="text-2xl text-purple-500" />
                  </div>
                  <h3
                    className={`text-xl font-bold group-hover:text-purple-400 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    DevOps
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {devopsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-500 py-2 px-4 rounded-full text-sm font-medium hover:from-purple-500/20 hover:to-pink-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div
            className={`group relative overflow-hidden p-6 rounded-2xl border hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover-lift ${
              isDarkMode
                ? "border-white/10 hover:border-red-400/50 bg-gray-900"
                : "border-gray-200 hover:border-red-300 bg-white"
            }`}
          >
            {/* Animated background gradient overlay */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-br from-red-500/10 to-rose-500/10"
                  : "bg-gradient-to-br from-red-100/50 to-rose-100/50"
              }`}
            ></div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <MdSchool className="text-xl text-red-500" />
                </div>
                <h3
                  className={`text-xl font-bold group-hover:text-red-400 transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                    isDarkMode
                      ? "border-white/5 bg-gray-800/30"
                      : "border-gray-100 bg-gray-50/50"
                  }`}
                >
                  <h4
                    className={`font-bold mb-1 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    B.Tech. in Computer Science Engineering
                  </h4>
                  <p
                    className={`mb-2 text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Lovely Professional University (2022-2026)
                  </p>
                  <span className="bg-red-500/10 text-red-500 py-1 px-2 rounded-full text-xs font-medium">
                    CGPA: 8.25
                  </span>
                </div>

                <div
                  className={`p-4 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                    isDarkMode
                      ? "border-white/5 bg-gray-800/30"
                      : "border-gray-100 bg-gray-50/50"
                  }`}
                >
                  <h4
                    className={`font-bold mb-1 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Intermediate (CBSE)
                  </h4>
                  <p
                    className={`mb-2 text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Paramount International School (2021-2022)
                  </p>
                  <span className="bg-red-500/10 text-red-500 py-1 px-2 rounded-full text-xs font-medium">
                    Percentage: 76%
                  </span>
                </div>

                <div
                  className={`p-4 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                    isDarkMode
                      ? "border-white/5 bg-gray-800/30"
                      : "border-gray-100 bg-gray-50/50"
                  }`}
                >
                  <h4
                    className={`font-bold mb-1 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Matriculation (CBSE)
                  </h4>
                  <p
                    className={`mb-2 text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Paramount International School (2019-2020)
                  </p>
                  <span className="bg-red-500/10 text-red-500 py-1 px-2 rounded-full text-xs font-medium">
                    Percentage: 91%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
