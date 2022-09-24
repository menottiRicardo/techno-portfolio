import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
const Skills = () => {
  return (
    <section id="technologies" className="snap-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Technologies
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
          You name it we got it
        </h3>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
        <div className="grid grid-cols-4 gap-5 mt-36">
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={false} />
          
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
