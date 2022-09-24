import { motion } from "framer-motion";
import React from "react";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-60 md:[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/ricardo.jpg"
        className="w-32 h-32 rounded-full xl:w-44 xl:h-44 object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO Menottin</h4>
        <p className="font-bold text-2xl mt-1">MENOTTIN SOLUTION</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="/ricardo.jpg"
            alt="ricardo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/ricardo.jpg"
            alt="ricardo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/ricardo.jpg"
            alt="ricardo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/ricardo.jpg"
            alt="ricardo"
          />
        </div>
        <p>Started:</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>sumarry</li>
          <li>sumarry</li>
          <li>sumarry</li>
          <li>sumarry</li>
          <li>sumarry</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
