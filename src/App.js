import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaLinkedinIn, FaTwitter, FaGithub, FaFileDownload } from 'react-icons/fa'

function App() {
  return (
    <div className="bg-black h-screen text-white flex px-32 overflow-y-auto">
      <div className="w-1/4 py-12 mr-4">
        <p className="text-4xl font-bold">
          Hello there, I'm Zadat Olayinka 
        </p>
        <p> then the short story goes here bro then the short story goes here bro then the short story goes here bro</p>

        <div className="py-4">
          <p className="text-2xl text-gray-500 font-extrabold">Contact Me <span role="img" aria-label="Envelope">📩</span></p>
          <div className="pr-8">
            <div className="my-4">
              <p className="text-gray-400 text-sm">Your Name</p>
              <input className="px-3 py-2 border-b bg-transparent w-full" placeholder="What can I address you as"/>
            </div>
            <div className="my-4">
              <p className="text-gray-400 text-sm">Your Email Address</p>
              <input className="px-3 py-2 border-b bg-transparent w-full" placeholder="Where I can reach you to respond"/>
            </div>
            <div className="py-4">
              <p className="text-gray-400 text-sm">Your Message</p>
              <textarea className="px-3 py-2 border-b bg-transparent w-full" rows="4" 
                placeholder="Hi, I would like to speak to you concerning a solution I want to build"></textarea>
            </div>
            <div>
              <button className="border text-center w-full py-3 rounded-md hover:bg-white hover:text-black">Contact Zadat!</button>
            </div>
          </div>
        </div>


        <div className="bottom-0 absolute py-8 flex">
          <img className="h-16 w-16 object-cover rounded-full" src="images/avatar.jpg" alt="Zadat Olayinka"/>
          <div className="flex items-center px-4">
            <a href="https://twitter.com/bundayyo" className="flex items-center" target="_blank" rel="noopener noreferrer">
            <FaTwitter/> <span className="px-4"> Twitter</span> <FaExternalLinkAlt/>
            </a>
          </div>
          <div className="flex items-center px-4">
            <a href="https://twitter.com/bundayyo" className="flex items-center" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn/> <span className="px-4"> LinkedIn</span> <FaExternalLinkAlt/>
            </a>
          </div>
          <div className="flex items-center px-4">
            <a href="https://twitter.com/bundayyo" className="flex items-center" target="_blank" rel="noopener noreferrer">
            <FaGithub/> <span className="px-4"> GitHub</span> <FaExternalLinkAlt/>
            </a>
          </div>
          <div className="flex items-center px-4">
            <a href="https://twitter.com/bundayyo" className="flex items-center" target="_blank" rel="noopener noreferrer">
            <FaFileDownload/> <span className="px-4"> Resume</span> <FaExternalLinkAlt/>
            </a>
          </div>
        </div>
      </div>
      <div className="w-3/4 py-12">
        <p className="text-2xl text-gray-500 font-extrabold text-center">My Works <span role="img" aria-label="Developer">👨🏾‍💻</span></p>

        <div className="flex grid-cols-2">
        <div className="bg-gray-900 px-4 py-3 my-4 mr-2 flex rounded">
          <motion.div
            
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/images/think.svg" className=" h-48" alt="think" />
          </motion.div>
          <div className="w-1/2 relative px-2">
            <p className="text-xl py-2 text-gray-200 font-bold">Project Title</p>
            <p className="text-sm text-gray-400">
              Short description about what the work is all about
            </p>
            <div className="text-xs absolute bottom-0 py-2">
              <span className="bg-gray-700 px-2 py-1 rounded-lg ml-0 m-1">
                Framework
              </span>
              <span className="bg-gray-700 px-2 py-1 rounded-lg m-1">
                Language
              </span>
            </div>
          </div>
        </div>
        
        
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
