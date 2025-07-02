import { useEffect, useState } from "react";
import { MdMenu, MdClose, MdHome, MdPerson, MdWork, MdEmail, MdWbSunny, MdNightlight } from "react-icons/md";

export const Navbar = ({ menuOpen, setMenuOpen, isDarkMode, setIsDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setIsThemeTransitioning(true);
    
    // Determine transition direction
    const transitionClass = isDarkMode ? 'dark-to-light' : 'light-to-dark';
    
    // Create and add overlay element
    const overlay = document.createElement('div');
    overlay.className = `theme-overlay ${transitionClass}`;
    document.body.appendChild(overlay);
    
    // Add blur effect to entire page
    document.body.classList.add('theme-transitioning');
    
    // Activate overlay
    setTimeout(() => {
      overlay.classList.add('active');
    }, 50);
    
    // Change theme at midpoint (0.75 seconds)
    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
    }, 750);
    
    // Clean up after animation completes
    setTimeout(() => {
      setIsThemeTransitioning(false);
      document.body.classList.remove('theme-transitioning');
      overlay.classList.remove('active');
      
      // Remove overlay after fade out
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
      }, 300);
    }, 1500);
  };

  return (
    <>
      {/* Left Sidebar Navigation - Desktop */}
      <nav className={`hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 z-40 group transition-all duration-300 ${
        isDarkMode 
          ? "bg-gray-900/95 border-gray-700" 
          : "bg-white/95 border-gray-200"
      } backdrop-blur-lg border shadow-xl hover:w-64 w-16 rounded-2xl`}>
        
        {/* Logo/Brand */}
        <div className="w-full flex flex-col h-full">
          <div className="p-4 border-b border-gray-200/10">
            <a 
              href="/" 
              className={`flex items-center space-x-3 transition-all duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              
                <img src="/nwordlogo.png" alt="" className="w-8 h-8 rounded-lg" />
              
              <span className="font-mono text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                nishant<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-flicker">.dev</span>
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col py-4 space-y-1 flex-grow">
            {[
              { name: 'Home', icon: MdHome, href: '#home', color: 'text-sky-400 hover:text-sky-300', bg: 'hover:bg-sky-50 dark:hover:bg-sky-900/20' },
              { name: 'About', icon: MdPerson, href: '#about', color: 'text-cyan-400 hover:text-cyan-300', bg: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20' },
              { name: 'Projects', icon: MdWork, href: '#projects', color: 'text-violet-400 hover:text-violet-300', bg: 'hover:bg-violet-50 dark:hover:bg-violet-900/20' },
              { name: 'Contact', icon: MdEmail, href: '#contact', color: 'text-amber-400 hover:text-amber-300', bg: 'hover:bg-amber-50 dark:hover:bg-amber-900/20' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 mx-2 px-3 py-3 rounded-xl transition-all duration-300 hover:-translate-x-1 hover:shadow-lg relative group/item ${item.bg}`}
              >
                <item.icon className={`w-6 h-6 flex-shrink-0 transition-all duration-300 ${item.color} drop-shadow-md hover:scale-110`} />
                <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium ${
                  isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                }`}>
                  {item.name}
                </span>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-sky-400 to-cyan-400 group-hover/item:h-8 transition-all duration-300 rounded-r shadow-lg"></div>
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="p-2 border-t border-gray-200/10">
            <button
              onClick={handleThemeToggle}
              disabled={isThemeTransitioning}
              className={`flex items-center space-x-3 w-full px-3 py-3 rounded-xl transition-all duration-300 hover:-translate-x-1 hover:shadow-lg ${
                isDarkMode 
                  ? "hover:bg-white/10" 
                  : "hover:bg-gray-100"
              } ${isThemeTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <MdWbSunny className="w-6 h-6 flex-shrink-0 group-hover:rotate-12 transition-all duration-300 text-yellow-500 hover:text-yellow-400 drop-shadow-lg" />
              ) : (
                <div className="relative w-6 h-6 flex-shrink-0 group-hover:-rotate-12 transition-all duration-300">
                  <div className="absolute inset-0  rounded-full shadow-lg border-gray-300"></div>
                  <MdNightlight className="relative w-6 h-6  hover:text-gray-800  transition-colors duration-300" />
                </div>
              )}
              <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium ${
                isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
              }`}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Top Bar for Mobile Only */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-40 backdrop-blur-lg border-b transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? "bg-gray-900/95 border-white/20 shadow-xl" 
            : "bg-white/95 border-gray-300 shadow-xl"
          : isDarkMode 
            ? "bg-gray-900/80 border-white/10 shadow-lg" 
            : "bg-white/80 border-gray-200 shadow-lg"
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Logo */}
            <a 
              href="#home" 
              className={`font-mono text-xl font-bold transition-all duration-300 hover:scale-105 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              nishant<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-flicker">.dev</span>
            </a>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-3">
              {/* Mobile Theme Toggle */}
              <button
                onClick={handleThemeToggle}
                disabled={isThemeTransitioning}
                className={`p-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group ${
                  isDarkMode 
                    ? "text-gray-400 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900"
                } ${isThemeTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <MdWbSunny className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 text-yellow-500" />
                ) : (
                  <div className="relative w-5 h-5 group-hover:-rotate-12 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gray-800 rounded-full shadow-sm border border-gray-300"></div>
                    <MdNightlight className="relative w-5 h-5 text-white transition-colors duration-300" />
                  </div>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className={`p-2.5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group ${
                  isDarkMode 
                    ? "border-white/10 hover:border-blue-500/50 bg-gray-800/50 hover:bg-gray-700 text-gray-400 hover:text-white" 
                    : "border-gray-200 hover:border-blue-300 bg-gray-50 hover:bg-white text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <MdClose className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <MdMenu className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <div className={`absolute top-full left-0 right-0 border-t backdrop-blur-lg transition-all duration-300 ${
              isDarkMode 
                ? "bg-gray-900/95 border-white/10" 
                : "bg-white/95 border-gray-200"
            }`}>
              <div className="px-4 py-6 space-y-2">
                {[
                  { name: 'Home', icon: MdHome, color: 'text-sky-400', bg: 'hover:bg-sky-50 dark:hover:bg-sky-900/20' },
                  { name: 'About', icon: MdPerson, color: 'text-cyan-400', bg: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20' },
                  { name: 'Projects', icon: MdWork, color: 'text-violet-400', bg: 'hover:bg-violet-50 dark:hover:bg-violet-900/20' },
                  { name: 'Contact', icon: MdEmail, color: 'text-amber-400', bg: 'hover:bg-amber-50 dark:hover:bg-amber-900/20' }
                ].map((item, index) => (
                  <a
                    key={item.name}
                    href={`#${item.name.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${item.bg} ${
                      isDarkMode 
                        ? "text-gray-300 hover:text-white" 
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <item.icon className={`w-5 h-5 ${item.color} drop-shadow-sm hover:scale-110 transition-transform duration-200`} />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
