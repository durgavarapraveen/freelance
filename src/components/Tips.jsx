import React, { useEffect, useRef, useState } from 'react'
import Forms from './Form';


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
      ${isVisible ? "tranlate-y-0" : "translate-y-2/3"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};


export default function Tips() {

  const data = [
    {
        "label":"MAKE A LIST",
        "text":"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    },{
        "label":"SAY GOODBYE TO UNUSED STUFF",
        "text":"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    },{
        "label":"GET STURDY, UNIFORM PACKING SUPPLIES",
        "text":"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    },{
        "label":"PACK THE BASICS YOURSELF",
        "text":"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    },
  ]
  return (
    <div className='p-0'>
      <div className='md:h-[80vh] flex md:flex-row flex-col'>
          <div className='bg-[#FF5829] md:w-[50%] w-full flex justify-center items-center md:p-0 sm:p-16 p-10'>
          <RevealOnScroll>
            <p className='text-white font-bold sm:text-8xl text-5xl'>Moving <br className='md:block hidden'/> Tips</p>
            </RevealOnScroll>
          </div>
          <div className='md:w-[50%] w-full flex justify-center items-center bg-gray-100 md:p-0 sm:p-16 p-12'>
            <div className='flex flex-col gap-5 md:px-[20%]'>
            <RevealOnScroll>
            <p className='text-gray-950 font-medium text-base '>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add 
                your own content and make changes to the font.</p>
                </RevealOnScroll>
            </div>
          </div>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:p-20 sm:p-12 p-6 bg-gray-100'>
          {
            data.map((item,index)=>(
                <div key={index} className={`px-12 py-20 flex justify-center items-center flex-col gap-5 ${
                    index % 3 !== 0 ? 'bg-[#FF5829]' : 'bg-black text-white'
                  }`} >
                    <p className='font-medium text-lg'>{item.label}</p>
                    <RevealOnScroll><p>{item.text}</p></RevealOnScroll>
                    
                </div>
            ))
          }
      </div>
      <Forms />
    </div>
  )
}
