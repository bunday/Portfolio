import React from "react";
import { FaLinkedinIn, FaGithub, FaFileDownload, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <div className="mt-auto flex justify-center">
      <img
        className="h-16 w-16 object-cover rounded-full"
        src="images/avatar.jpg"
        alt="Zadat Olayinka"
      />
      <div className="flex items-center px-4">
        <a
          href="https://www.linkedin.com/in/zadat-olayinka-317a98110/"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn /> 
         
        </a>
      </div>
      <div className="flex items-center px-4">
        <a
          href="https://github.com/bunday"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> 
        </a>
      </div>
      <div className="flex items-center px-4">
        <a
          href="https://res.cloudinary.com/bundayy/image/upload/v1657463608/portfolio/Zadat_Olayinka_UK_2022_b0ci0r.pdf"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload /> 
        </a>
      </div>
      <div className="flex items-center px-4">
        <a
          href="mailto:bundayy@outlook.com?subject=Hi 🙂, I have a Project I would like to work with you on"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> 
        </a>
      </div>
    </div>
  );
}

export default Footer;