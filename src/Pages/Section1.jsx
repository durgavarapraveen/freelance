import React from "react";
import { motion } from "framer-motion";

function Section1() {
  return (
    <div className="relative w-full h-screen mt-[7rem]">
      <video
        autoPlay
        loop
        muted
        className="w-full h-screen fixed object-cover z-0 top-[7rem]"
      >
        <source
          src="https://video.wixstatic.com/video/ea26fd_188adc5ca5af45e18a643f903cdfc272/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>
      <motion.div
        className="absolute lg:w-6/12 md:w-8/12 top-1/4 md:left-1/4 left-[5%] "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="text-white font-extrabold lg:text-7xl text-5xl sm:text-5xl text-3xl">
          {" "}
          Make your Move Quixk & Easy
        </p>
        <div className="flex row sm:w-9/12 w-full mt-10 ">
          <div className="bg-black w-full text-white px-10 sm:py-7 py-4">
            <p className="font-bold py-1">CALL US</p>
            <p>123-456-7890</p>
          </div>
          <div className="w-full bg-orange-500 px-10 py-7">
            <p className="font-bold py-1">START ONLINE</p>
            <p>Get a free moving quote in seconds</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Section1;
