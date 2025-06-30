import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";


function Footer() {
  return (
    <div>
        <footer className="text-gray-400 py-8 w-full h-18">
            <div className="container mx-auto px-4">
            <div className="flex items-center justify-around">
                <div className="flex items-center gap-2">
                <p className="text-sm mb-2">©2025 nishant<span className="text-blue-700">.dev</span></p>
                <p className="text-sm mb-2">All rights reserved.</p>
                </div>
                
                <div className="flex gap-2">
                    <a href="https://github.com/NishantRaj278" target="_blank"><IoLogoGithub /></a>
                    <a href="https://www.linkedin.com/in/nishantraj1234" target="_blank"><IoLogoLinkedin /></a>
                    <a href="https://www.instagram.com/nishantraj._/" target="_blank"><LuInstagram /></a>
                    <a href="https://x.com/NishantRaj36977" target="_blank"><RiTwitterXLine /></a>
                </div>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer