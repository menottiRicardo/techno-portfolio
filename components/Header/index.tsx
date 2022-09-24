import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-end max-w-7xl p-5 z-20 ">
      <Link href={"#contact"}>
        <motion.div
          className="flex flex-row items-center text-gray-300 cursor-pointer"
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <EnvelopeIcon className="w-5 mr-2" />

          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
