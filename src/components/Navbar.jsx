import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b shadow-lg transition-all duration-300 ${
      isDarkMode 
        ? "bg-[rgba(10, 10, 10, 0.8)] border-white/10" 
        : "bg-[rgba(255, 255, 255, 0.8)] border-gray-200"
    }`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className={`font-mono text-xl font-bold transition-colors ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            {" "}
            nishant<span className="text-blue-500">.dev</span>{" "}
          </a>

          <div className="flex items-center space-x-4">
            {/* Theme toggle button */}
            

            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`transition-colors ${
                isDarkMode 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className={`transition-colors ${
                isDarkMode 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className={`transition-colors ${
                isDarkMode 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                isDarkMode 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {" "}
              Contact{" "}
            </a>
          </div>

          <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? "text-gray-400" 
                  : "text-gray-800"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

        </div>
      </div>
    </nav>
  );
};
