import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import {motion} from 'framer-motion'
const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Experiences", "Solutions", "Apps"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="hero" className="snap-center">
      <motion.div className="h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />

        <h1>
          <span>We Develop </span>
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;
