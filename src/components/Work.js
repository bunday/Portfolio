import React from "react";
import { motion } from "framer-motion";

function Work(props) {
  const { work } = props;
  function renderFrameworks() {
      return work.tech.map(elem=> {
          return <span key={elem} className="bg-gray-700 px-2 py-1 rounded-lg ml-0 m-1"> {elem} </span>
      })
  }
  return (
    <a target="_blank"
    rel="noopener noreferrer" 
    href={work.link} className="bg-blacklight m-2 flex flex-col rounded">
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={work.image}
          className=" object-cover w-full h-64"
          alt="think"
        />
      </motion.div>
      <div className="px-4 py-2">
        <p className="text-xl py-2 text-gray-200 font-bold">{work.title}</p>
        <p className="text-sm text-gray-500">{work.description}</p>
      </div>
      <div className="text-xs px-4 mt-auto  py-2">
          { renderFrameworks()}
        
      </div>
    </a>
  );
}

export default Work;
