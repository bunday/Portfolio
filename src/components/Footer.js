import React from "react";
import { FaExternalLinkAlt, FaLinkedinIn, FaTwitter, FaGithub, FaFileDownload } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bottom-0 absolute py-8 flex">
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
          <FaTwitter /> <span className="px-4"> Twitter</span>{" "}
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="flex items-center px-4">
        <a
          href="https://twitter.com/bundayyo"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn /> <span className="px-4"> LinkedIn</span>{" "}
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="flex items-center px-4">
        <a
          href="https://twitter.com/bundayyo"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> <span className="px-4"> GitHub</span>{" "}
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="flex items-center px-4">
        <a
          href="https://twitter.com/bundayyo"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload /> <span className="px-4"> Resume</span>{" "}
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

export default Footer;