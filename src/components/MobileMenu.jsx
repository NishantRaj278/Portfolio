
export const MobileMenu = ({ menuOpen, setMenuOpen, isDarkMode }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${isDarkMode ? "bg-[rgba(10,10,10,0.95)]" : "bg-[rgba(255,255,255,0.95)]"}
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className={`absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold my-4 transform transition-all duration-300 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold my-4 transform transition-all duration-300 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold my-4 transform transition-all duration-300 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold my-4 transform transition-all duration-300 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Contact
      </a>
    </div>
  );
};
