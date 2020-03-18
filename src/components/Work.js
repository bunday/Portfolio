import React from 'react'
import { motion } from "framer-motion";


function Work () {
    return (
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
          <p className="text-xl py-2 text-gray-200 font-bold">
            Project Title
          </p>
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
    );
}

export default Work