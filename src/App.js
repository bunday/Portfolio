import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Works from "./data";

function App() {
  console.log(Works);
  return (
    <div className="bg-black h-screen text-white flex px-32 overflow-y-auto">
      <div className="w-1/4 py-12 mr-4">
        <p className="text-4xl font-bold">Hello there, I'm Zadat Olayinka</p>
        <div className="text-md text-tint leading-6">
          <p className="py-4">
            I'm a software engineer from Lagos, Nigeria. I do both front-end and
            back-end development, I've built a couple of mobile apps with Ionic.
            I do back-end work with mostly Laravel, and I'm currently building
            front-ends with React.js and Tailwind CSS.
          </p>
          <p className="py-4">
            I believe in utility-first CSS and I'm currently adopting test
            driven development work. I plan to share what I learn on my blog
            (coming up soon).
          </p>
          <p className="py-4">
            I hangout on Leetcode, HackerRank and Code AppSignal solving
            algorithm problems always trying to optimize speed and save space.
          </p>
          <p className="py-4">
            I'm available for contracts and remote roles. Want us to
            work together? You should contact me.
          </p>
        </div>

        {/* <Contact/> */}

        <Footer />
      </div>
      <div className="w-3/4 py-12">
        <p className="text-2xl text-white font-extrabold text-center">
          My Works
          <span role="img" aria-label="Developer">
            👨🏾‍💻
          </span>
        </p>

        <div className="flex grid-cols-2">
          <Work />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
