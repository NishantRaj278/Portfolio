import { RevealOnScroll } from "../RevealOnScroll";
import {
  MdOutlinePlayCircleOutline,
  MdCode,
  MdArrowBack,
  MdArrowForward,
  MdPsychology,
  MdPeople,
  MdAutoAwesome,
  MdCreate,
  MdVolunteerActivism,
  MdChat,
} from "react-icons/md";
import { useState, useEffect } from "react";

export const Projects = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Project data
  const projects = [
    {
      id: 1,
      title: "CiteMind",
      description:
        "An AI-powered research platform that transforms how you explore and visualize academic literature. CiteMind uses advanced AI and data processing with HuggingFace, Pinecone vector database, and custom AI pipelines to create interactive knowledge graphs and dynamic visualizations of research connections.",
      technologies: [
        "Next.js",
        "HuggingFace API",
        "Pinecone",
        "MongoDB",
        "Chart.js",
        "D3.js",
        "TypeScript",
      ],
      githubUrl: "https://github.com/NishantRaj278/CiteMind",
      liveUrl: "https://citemiind.vercel.app/",
      color: "indigo",
      gradient: "from-indigo-500/10 to-violet-500/10",
      borderGradient: "hover:border-indigo-500/50",
      textColor: "text-indigo-500",
      buttonGradient:
        "from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600",
      icon: <MdPsychology />,
      image: "citemind.png",
    },
    {
      id: 2,
      title: "Socialure",
      description:
        "A full-stack social media platform enabling users to connect, share posts, and interact in real-time through a clean and responsive UI with modern features.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/NishantRaj278/Socialure",
      liveUrl: "https://socialure.vercel.app/",
      color: "blue",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "hover:border-blue-500/50",
      textColor: "text-blue-500",
      buttonGradient:
        "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
      icon: <MdPeople />,
      image: "socialure.png",
    },
    {
      id: 3,
      title: "CraftAI",
      description:
        "CraftAI is an AI-powered developer tool that instantly generates clean, production-ready React components from your text prompts. CraftAI helps you turn ideas into working React code in seconds.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Node.js",
        "Express",
        "TypeScript",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/NishantRaj278/craftAI",
      liveUrl: "https://craft-ai-pi.vercel.app/",
      color: "cyan",
      gradient: "from-cyan-500/10 to-blue-500/10",
      borderGradient: "hover:border-cyan-500/50",
      textColor: "text-cyan-500",
      buttonGradient:
        "from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
      icon: <MdAutoAwesome />,
      image: "craftai.png",
    },
    {
      id: 4,
      title: "Inklet",
      description:
        "A dynamic blogging platform where users can create, edit, and interact with blog posts in a seamless, responsive environment with rich content features.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Prisma",
        "TypeScript",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/NishantRaj278/Inklet",
      liveUrl: "https://inklet-seven.vercel.app/",
      color: "green",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderGradient: "hover:border-green-500/50",
      textColor: "text-green-500",
      buttonGradient:
        "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
      icon: <MdCreate />,
      image: "inklet.png",
    },
    {
      id: 5,
      title: "HelpHive",
      description:
        "A community platform where neighbors connect to offer and request help, report local issues, and strengthen community bonds through real-time messaging and collaborative problem-solving.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/NishantRaj278/HelpHive",
      liveUrl: null,
      color: "orange",
      gradient: "from-orange-500/10 to-amber-500/10",
      borderGradient: "hover:border-orange-500/50",
      textColor: "text-orange-500",
      buttonGradient:
        "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
      icon: <MdVolunteerActivism />,
      image: "helphive.png",
    },
    {
      id: 6,
      title: "ChatNest",
      description:
        "A real-time chat application supporting instant messaging and media sharing with a responsive, themeable UI and seamless user experience.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Socket.IO",
      ],
      githubUrl: "https://github.com/NishantRaj278/ChatNest",
      liveUrl: "https://chatnest-1-1.onrender.com/",
      color: "purple",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "hover:border-purple-500/50",
      textColor: "text-purple-500",
      buttonGradient:
        "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      icon: <MdChat />,
      image: "chatnest.png", // Placeholder - add chatnest.png to public folder
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
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
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A showcase of full-stack applications, AI-powered tools, and
              modern web solutions
            </p>
          </div>

          {/* Slider Container */}
          <div className="flex items-center justify-center">
            {/* Main Slider */}
            <div className="flex items-center justify-center overflow-hidden rounded-3xl">
              <div
                className="flex items-center transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full h-full flex-shrink-0 px-4"
                  >
                    <div
                      className={`group relative flex items-center justify-center overflow-hidden p-8 md:p-12 rounded-2xl border hover:shadow-2xl transition-all duration-500 min-h-[600px] ${
                        isDarkMode
                          ? `border-white/10 bg-gray-900/50 backdrop-blur-sm`
                          : `border-gray-200 bg-white/80 backdrop-blur-sm`
                      }`}
                    >
                      {/* Content */}
                      <div className="relative z-10 grid md:grid-cols-2 gap-8 h-full">
                        {/* Project Info */}
                        <div className="flex flex-col h-full">
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-6">
                              <div
                                className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl`}
                              >
                                <div
                                  className={`text-3xl ${project.textColor}`}
                                >
                                  {project.icon}
                                </div>
                              </div>
                              <h3
                                className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
                                  isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {project.title}
                              </h3>
                            </div>

                            <p
                              className={`mb-8 text-lg leading-relaxed ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-3 mb-8">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`bg-gradient-to-r ${project.gradient} ${project.textColor} py-2 px-4 rounded-full text-sm font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons - Always at bottom */}
                          <div className="flex flex-wrap gap-4 mt-auto">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-3 font-medium text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${project.textColor}`}
                            >
                              <MdCode className="text-2xl" />
                              <span>View Code</span>
                            </a>
                            {project.liveUrl ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-gradient-to-r ${project.buttonGradient} text-white px-8 py-4 rounded-2xl transition-all duration-300 font-medium hover:shadow-2xl hover:scale-105 group/btn`}
                              >
                                <div className="flex items-center gap-3">
                                  <MdOutlinePlayCircleOutline className="text-2xl group-hover/btn:animate-spin" />
                                  <span className="text-lg">Live Demo</span>
                                </div>
                              </a>
                            ) : (
                              <div
                                className={`bg-gradient-to-r ${project.buttonGradient} opacity-50 text-white px-8 py-4 rounded-2xl font-medium cursor-not-allowed`}
                              >
                                <div className="flex items-center gap-3">
                                  <MdOutlinePlayCircleOutline className="text-2xl" />
                                  <span className="text-lg">Coming Soon</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Project Image */}
                        <div className="relative flex items-center justify-center h-full">
                          <div
                            className={`p-4 rounded-2xl bg-gradient-to-br ${
                              project.gradient
                            } border w-full ${
                              isDarkMode ? "border-white/10" : "border-gray-200"
                            } overflow-hidden`}
                          >
                            <div className="aspect-video w-full">
                              <img
                                src={`/${project.image}`}
                                alt={`${project.title} preview`}
                                className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  e.target.nextSibling.style.display = "flex";
                                }}
                              />
                              {/* Fallback icon if image fails to load */}
                              <div
                                className={`hidden w-full h-full items-center justify-center bg-gradient-to-r ${project.gradient}`}
                                style={{ display: "none" }}
                              >
                                <div
                                  className={`text-6xl ${project.textColor}`}
                                >
                                  {project.icon}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Positioned outside the slider container */}
            <button
              onClick={prevSlide}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 ${
                isDarkMode
                  ? "bg-gray-800/90 text-white border border-gray-600"
                  : "bg-white/90 text-gray-900 border border-gray-200"
              } backdrop-blur-sm shadow-lg hover:shadow-xl`}
            >
              <MdArrowBack className="text-2xl" />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 ${
                isDarkMode
                  ? "bg-gray-800/90 text-white border border-gray-600"
                  : "bg-white/90 text-gray-900 border border-gray-200"
              } backdrop-blur-sm shadow-lg hover:shadow-xl`}
            >
              <MdArrowForward className="text-2xl" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                    : isDarkMode
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : isDarkMode
                  ? "bg-gray-800 text-gray-300 border border-gray-600"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
            </button>
          </div>

          {/* Project Grid Summary */}
          <div className="mt-20">
            <h3
              className={`text-2xl font-bold text-center mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              All Projects Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => goToSlide(index)}
                  className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    index === currentSlide
                      ? `${project.borderGradient.replace(
                          "hover:",
                          ""
                        )} bg-gradient-to-r ${project.gradient}`
                      : isDarkMode
                      ? "border-gray-700 bg-gray-800/50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
                  >
                    <div className={`text-xl ${project.textColor}`}>
                      {project.icon}
                    </div>
                  </div>
                  <h4
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
