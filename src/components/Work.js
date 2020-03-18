import React from "react";
import { motion } from "framer-motion";

function Work(props) {
  const { work } = props;
  return (
    <div className="bg-gray-800 m-2 flex flex-col rounded">
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
        <span className="bg-gray-700 px-2 py-1 rounded-lg ml-0 m-1">
          Framework
        </span>
        <span className="bg-gray-700 px-2 py-1 rounded-lg m-1">Language</span>
      </div>
    </div>
  );
}

export default Work;
