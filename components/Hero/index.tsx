import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Create Experiences", "Find Solutions", "Develop Apps"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="hero" className="snap-start">
      <div className="h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />

        <div className="relative h-32 w-32">
          <Image
            className="relative h-32 w-32 mx-auto"
            src="/logo.png"
            alt="logo"
            layout="fill"
          />
        </div>

        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Menotti Solutions
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span>We </span>
            <span>{text}</span>

            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5">
            <Link href={"#about"}>
              <button className="heroButton">About</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
            <Link href={"#technologies"}>
              <button className="heroButton">Technologies</button>
            </Link>
            {/* <Link href={"#projects"}>
              <button className="heroButton">Projects</button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
