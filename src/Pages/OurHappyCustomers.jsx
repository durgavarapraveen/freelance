import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Carousel } from "primereact/carousel";

function OurHappyCustomers() {
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

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "867px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const items = [
    {
      text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”",
      sender: "Praveen",
    },
    {
      text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”",
      sender: "Kumar",
    },
    {
      text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”",
      sender: "Sai",
    },
  ];

  return (
    <div
      className="relative bg-white w-full z-10 flex flex-col justify-center items-center py-10"
      style={{ backgroundColor: "white" }}
      ref={ref}
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="text-black text-5xl font-bold py-5"
      >
        Our Happy Customers
      </motion.h1>
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <Carousel
          value={items}
          responsiveOptions={responsiveOptions}
          itemTemplate={(item) => (
            <div className="p-4  m-auto">
              <div className="p-4 text-center m-auto rounded-lg flex flex-col w-3/4">
                <p>{item.text}</p>
                <p className="font-bold p-1">{item.sender}</p>
              </div>
            </div>
          )}
          numVisible={1}
          circular
          autoplayInterval={5000}
          autoplay
          className="w-1/2 m-auto"
        />
      </motion.div>
    </div>
  );
}

export default OurHappyCustomers;
