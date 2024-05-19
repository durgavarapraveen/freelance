
import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-transform duration-1000 
        ${isVisible ? "tranlate-y-0" : "translate-y-2/3"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default function Services() {
  const data = [
    {
      image:
        "https://static.wixstatic.com/media/ea26fd_91738f59b8cb40769316e5cd632c34d5~mv2_d_6720_4480_s_4_2.jpeg/v1/fill/w_839,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_91738f59b8cb40769316e5cd632c34d5~mv2_d_6720_4480_s_4_2.jpeg",
      label: "Local Moving",
      text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
    },
    {
      image:
        "https://static.wixstatic.com/media/ea26fd_334e6e9129254d76ae3fc847a1990777~mv2_d_5760_3103_s_4_2.jpeg/v1/fill/w_841,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_334e6e9129254d76ae3fc847a1990777~mv2_d_5760_3103_s_4_2.jpeg",
      label: "Long Distance Moving",
      text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
    },
    {
      image:
        "https://static.wixstatic.com/media/ea26fd_ff7fe90edf5c465c953fb013314cb717~mv2_d_4300_2867_s_4_2.jpg/v1/fill/w_839,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_ff7fe90edf5c465c953fb013314cb717~mv2_d_4300_2867_s_4_2.jpg",
      label: "Storage Services",
      text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
    },
    {
      image:
        "https://static.wixstatic.com/media/ea26fd_de03219395224c97b1b438f18f1295f5~mv2_d_7002_4673_s_4_2.jpeg/v1/fill/w_841,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_de03219395224c97b1b438f18f1295f5~mv2_d_7002_4673_s_4_2.jpeg",
      label: "Packing & Unpacking",
      text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
    },
  ];

  return (
    <div className='p-0'>
      <div className='md:h-[80vh] flex md:flex-row flex-col'>
          <div className='bg-orange-500 md:w-[50%] w-full flex justify-center items-center md:p-0 sm:p-16 p-10'>
             <RevealOnScroll>
            <p className='text-white font-bold sm:text-8xl text-5xl'>Our <br className='md:block hidden'/> Services</p>
             </RevealOnScroll>
          </div>
          <div className='md:w-[50%] w-full flex justify-center items-center bg-gray-100 md:p-0 sm:p-16 p-12'>
            <div className='flex flex-col gap-5 md:px-[20%]'>
            <RevealOnScroll>
              <p className="text-gray-950 font-medium text-base ">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add 
                your own content and make changes to the font.</p>
             </RevealOnScroll>
             <RevealOnScroll>
               <button className='bg-orange-500 text-gray-70 font-medium duration-500 hover:bg-black hover:text-white py-3 px-6 w-fit'>Get A Free Estimate</button>
             </RevealOnScroll>
            
            </div>
          </div>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:p-20 sm:p-12 p-6 bg-gray-100'>
          {
            data.map((item,index)=>(
                <div key={index} className='flex flex-col shadow-lg '>
                    <div className='bg-gray-200'>
                   <img src={item.image} alt={item.label} className='w-full hover:scale-95 hover:opacity-90 duration-1000 cursor-pointer' />
                    </div>
                   <div className='w-full sm:py-16 py-8 px-8 flex flex-col gap-5 bg-black sm:bg-white'>
                        <RevealOnScroll >
                       <p className='text-3xl font-semibold sm:text-black text-white'>{item.label}</p>
                        </RevealOnScroll>
                        <RevealOnScroll >
                            <p className='sm:text-black text-white' >{item.text}</p>
                        </RevealOnScroll>
                   </div>
                </div>
            ))
          }
      </div>
      <Footer />
    </div>
  );
}
