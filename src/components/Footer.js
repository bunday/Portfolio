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
          href="https://twitter.com/bundayyo"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn /> 
         
        </a>
      </div>
      <div className="flex items-center px-4">
        <a
          href="https://twitter.com/bundayyo"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> 
        </a>
      </div>
      <div className="flex items-center px-4">
        <a
          href="https://twitter.com/bundayyo"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload /> 
        </a>
      </div>
      <div className="flex items-center px-4">
        <a
          href="https://twitter.com/bundayyo"
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