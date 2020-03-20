import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import WorkList from "./components/WorkList";

function App() {
  return (
    <div>
      <nav className="flex items-center px-8 xl:px-32 justify-between flex-wrap bg-blacklight py-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Zadat Olayinka{" "}
          </span>
        </div>

        <div className="flex justify-between block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#bio"
              className="mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Bio
            </a>
            <a
              href="#works"
              className="mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              My Works
            </a>
          </div>
        </div>
      </nav>
      <div className="bg-black h-screen text-white lg:flex lg:flex-row px-8 xl:px-32 overflow-y-auto lg:overflow-hidden">
        <div id="bio" className="lg:w-1/4 py-12 mr-4 flex flex-col">
          <p className="text-4xl font-bold">Hello there, I'm Zadat Olayinka</p>
          <div className="text-md text-tint leading-6 lg:leading-5 xl:leading-6">
            <p className="py-2">
              I'm a software engineer from Lagos, Nigeria with over five years
              worth of experience deploying scalable solutions for a wide range
              of sectors including fintech, education, gaming, ticketing and e-commerce.
              </p>
            <p className="py-2">
              I am also adept at working with various languages and frameworks including
              {" "}
              <a
                href="https://laravel.com/"
                className="text-white "
                target="_blank"
                rel="noopener noreferrer"
              >
                Laravel
              </a>
              , {" "}
              <a
                href="https://spring.io/projects/spring-boot"
                className="text-white "
                target="_blank"
                rel="noopener noreferrer"
              >
                Spring Boot
              </a>
              , {" "}
              <a
                href="https://ionicframework.com/"
                className="text-white "
                target="_blank"
                rel="noopener noreferrer"
              >
                Ionic
              </a>
              , {" "}
              <a
                href="https://reactjs.org/"
                className="text-white "
                target="_blank"
                rel="noopener noreferrer"
              >
                React.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                className="text-white "
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>
              ,  using them for build mobile applications, back-end development and front-end development respectively. 
            </p>
            <p className="py-2">
            I believe in utility-first CSS and I'm currently adopting test driven development in my work. I'm also focused on sharing my experiences with younger developers, fostering their growth and propelling their learning process and ultimately their careers. I plan to share these experiences on my forthcoming blog
            </p>
            <p className="py-2">
            I hangout on Leetcode, HackerRank and Code Signal solving algorithmic problems always trying to optimize speed and save space. 
            </p>
            <p className="py-2">
            I'm available for contract jobs and remote positions as I am focused on bringing my experience and diverse knowledge to help build more scalable platforms.
            Want us to work together? You should{" "}
              <a
                href="mailto:bundayy@outlook.com?subject=Hi 🙂, I have a Project I would like to work with you on"
                className="text-white "
                target="_blank"
                rel="noopener noreferrer"
              >
                contact me
              </a>
              .
            </p>
          </div>

          {/* <Contact/> */}

          <Footer />
        </div>
        <div id="works" className="lg:w-3/4 py-12 lg:overflow-y-auto">
          <p className="text-2xl text-white font-extrabold text-center">
            My Works
            <span role="img" aria-label="Developer">
              👨🏾‍💻
            </span>
          </p>

          <WorkList />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
