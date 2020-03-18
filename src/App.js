import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import WorkList from "./components/WorkList";

function App() {
  return (
    <div className="bg-black h-screen text-white flex flex-col lg:flex-row px-8 xl:px-32 overflow-y-auto">
      <div className="lg:w-1/4 py-12 mr-4">
        <p className="text-4xl font-bold">Hello there, I'm Zadat Olayinka</p>
        <div className="text-md text-tint leading-6">
          <p className="py-4">
            I'm a software engineer from Lagos, Nigeria. I do both front-end and
            back-end development, I've built a couple of mobile apps with {" "}
            <a
              href="https://ionicframework.com/"
              className="text-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              Ionic
            </a>
            . I do back-end work with mostly {" "}
            <a
              href="https://laravel.com/"
              className="text-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              Laravel
            </a>, and I'm currently building
            front-end with {" "}
            <a
              href="https://reactjs.org/"
              className="text-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a> and {" "}
            <a
              href="https://tailwindcss.com/"
              className="text-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>.
          </p>
          <p className="py-4">
            I believe in utility-first CSS and I'm currently adopting test
            driven development work. I plan to share what I learn on my blog
            (coming up soon).
          </p>
          <p className="py-4">
            I hangout on Leetcode, HackerRank and Code Signal solving
            algorithm problems always trying to optimize speed and save space.
          </p>
          <p className="py-4">
            I'm available for contracts and remote roles. Want us to work
            together? You should <a
              href="mailto:bundayy@outlook.com?subject=Hi 🙂, I have a Project I would like to work with you on"
              className="text-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              contact me
            </a>.
          </p>
        </div>

        {/* <Contact/> */}

        <Footer />
      </div>
      <div className="lg:w-3/4 py-12">
        <p className="text-2xl text-white font-extrabold text-center">
          My Works
          <span role="img" aria-label="Developer">
            👨🏾‍💻
          </span>
        </p>

        <WorkList/>
      </div>
      <div></div>
    </div>
  );
}

export default App;
