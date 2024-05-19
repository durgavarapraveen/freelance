import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Section2() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [controls, inView]);

  return (
    <div className="w-full h-screen flex row z-50 relative">
      <div
        ref={ref}
        className="bg-primary w-full flex align-center justify-center flex-col px-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="text-white font-black text-6xl"
        >
          The Fly
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white font-black text-6xl"
        >
          Right Way
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-5 text-lg"
        >
          "Streamlined logistics solutions with 'The Fly Right Way'—efficiency,
          precision, and reliability for your cargo transport needs."
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.9 }}
          className=""
        >
          <button className="text-white bg-black px-10 py-3 text-md mt-7">
            Read More
          </button>
        </motion.div>
      </div>
      <motion.div className="w-full h-screen">
        <img
          className="h-screen w-full object-cover"
          src="https://static.wixstatic.com/media/ea26fd_fd2d14bc58af4e109522dd08a798820d~mv2_d_6720_4480_s_4_2.jpeg/v1/fill/w_490,h_640,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_fd2d14bc58af4e109522dd08a798820d~mv2_d_6720_4480_s_4_2.jpeg"
          alt="Image"
        />
      </motion.div>
    </div>
  );
}

export default Section2;
