import React from 'react'

function Contact () {
    return (
        <div className="py-4">
          <p className="text-2xl text-gray-500 font-extrabold">Contact Me <span role="img" aria-label="Envelope">📩</span></p>
          <div className="pr-8">
            <div className="my-4">
              <p className="text-gray-400 text-sm">Your Name</p>
              <input className="px-3 py-2 border-b bg-transparent w-full" placeholder="What can I address you as"/>
            </div>
            <div className="my-4">
              <p className="text-gray-400 text-sm">Your Email Address</p>
              <input className="px-3 py-2 border-b bg-transparent w-full" placeholder="Where I can reach you to respond"/>
            </div>
            <div className="py-4">
              <p className="text-gray-400 text-sm">Your Message</p>
              <textarea className="px-3 py-2 border-b bg-transparent w-full" rows="4" 
                placeholder="Hi, I would like to speak to you concerning a solution I want to build"></textarea>
            </div>
            <div>
              <button className="border text-center w-full py-3 rounded-md hover:bg-white hover:text-black">Contact Zadat!</button>
            </div>
          </div>
        </div>
    );
}

export default Contact;