import React from "react";
import { motion } from "framer-motion";

function Section1() {
  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        className="w-full h-screen fixed object-cover z-0"
      >
        <source
          src="https://video.wixstatic.com/video/ea26fd_188adc5ca5af45e18a643f903cdfc272/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>
      <motion.div
        className="absolute w-6/12 top-1/4 left-1/4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="text-white font-extrabold text-7xl">
          {" "}
          Make your Move Quixk & Easy
        </p>
        <div className="flex row w-9/12 mt-10 ">
          <div className="bg-black w-full text-white px-10 py-7">
            <p className="font-bold py-1">CALL US</p>
            <p>123-456-7890</p>
          </div>
          <div className="w-full bg-primary px-10 py-7">
            <p className="font-bold py-1">START ONLINE</p>
            <p>Get a free moving quote in seconds</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Section1;
