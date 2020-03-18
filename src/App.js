import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-black h-screen text-white flex px-32 overflow-y-auto">
      <div className="w-1/4 py-12 mr-4">
        <p className="text-4xl font-bold">Hello there, I'm Zadat Olayinka</p>
        <p>
          {" "}
          then the short story goes here bro then the short story goes here bro
          then the short story goes here bro
        </p>

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
          <Work/>
        </div>
        
      </div>
      <div></div>
    </div>
  );
}

export default App;
