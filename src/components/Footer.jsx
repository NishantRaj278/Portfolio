import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";

function Footer({ isDarkMode }) {
  return (
    <footer className={`relative py-4`}>
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? "bg-gradient-to-t from-gray-800/20 to-transparent" 
          : "bg-gradient-to-t from-gray-50/50 to-transparent"
      }`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Copyright */}
          <div className="text-center md:text-left">
            <div className="">
              <span className={`text-lg font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                nishant<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">.dev</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>© 2025 All rights reserved</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with <MdFavorite className="text-red-500 animate-pulse" /> in India
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm hidden md:block">Connect with me:</span>
            <div className="flex gap-3">
              <a 
                href="https://github.com/NishantRaj278" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${
                  isDarkMode 
                    ? "border-white/10 hover:border-blue-500/50 bg-gray-800/50 hover:bg-gray-700" 
                    : "border-gray-200 hover:border-blue-300 bg-gray-50 hover:bg-white"
                }`}
                aria-label="GitHub"
              >
                <IoLogoGithub className={`text-xl transition-colors duration-300 ${
                  isDarkMode 
                    ? "text-gray-400 group-hover:text-white" 
                    : "text-gray-600 group-hover:text-gray-900"
                }`} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/nishantraj1234" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${
                  isDarkMode 
                    ? "border-white/10 hover:border-blue-500/50 bg-gray-800/50 hover:bg-gray-700" 
                    : "border-gray-200 hover:border-blue-300 bg-gray-50 hover:bg-white"
                }`}
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin className="text-xl text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />
              </a>
              
              <a 
                href="https://www.instagram.com/nishantraj._/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${
                  isDarkMode 
                    ? "border-white/10 hover:border-pink-500/50 bg-gray-800/50 hover:bg-gray-700" 
                    : "border-gray-200 hover:border-pink-300 bg-gray-50 hover:bg-white"
                }`}
                aria-label="Instagram"
              >
                <LuInstagram className="text-xl text-pink-600 group-hover:text-pink-500 transition-colors duration-300" />
              </a>
              
              <a 
                href="https://x.com/NishantRaj36977" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${
                  isDarkMode 
                    ? "border-white/10 hover:border-gray-500/50 bg-gray-800/50 hover:bg-gray-700" 
                    : "border-gray-200 hover:border-gray-400 bg-gray-50 hover:bg-white"
                }`}
                aria-label="Twitter/X"
              >
                <RiTwitterXLine className={`text-xl transition-colors duration-300 ${
                  isDarkMode 
                    ? "text-gray-400 group-hover:text-white" 
                    : "text-gray-600 group-hover:text-gray-900"
                }`} />
              </a>
            </div>
          </div>
        </div>

        {/* Additional footer content */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-sm opacity-70">
            Building digital experiences • Full Stack Developer • Open to opportunities
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer