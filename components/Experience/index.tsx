import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
const Experience = () => {
  return (
    <section className="snap-center" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
      >
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll snap-proximity">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;