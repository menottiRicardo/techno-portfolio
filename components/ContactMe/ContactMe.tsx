import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const ContactMe = () => {
  return (
    <section id="contact" className="snap-start">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            We got just what you need.
          </h4>

          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
          <div>
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">+507124243</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">Panama, Panama</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">Panama, Panama</p>
            </div>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input type="text" className="contactInput"/>
            <input type="text" className="contactInput"/>
          </div>
          <input type="text" className="contactInput"/>

          <textarea className="contactInput"/>
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold">Submit</button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactMe;
