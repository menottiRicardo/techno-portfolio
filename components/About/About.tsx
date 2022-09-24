import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section id="about" className="snap-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-12 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src="/ricardo.jpg"
          className="-mb-28 md:mb-0 mt-12 flex-shrink-0 w-40 h-40 md:h-64 rounded-full object-cover md:rounded-lg md:w-64 md:height-[96]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nisi eaque, mollitia porro culpa eos illum autem facere? Quos
            dolores quod facilis amet cum iusto vitae quas illo qui ut. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Laborum, neque
            quo. Officia quod accusantium consequatur blanditiis. Laboriosam,
            nam voluptate iusto excepturi error placeat beatae facere fuga
            similique molestias, perspiciatis culpa!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
