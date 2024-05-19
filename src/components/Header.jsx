import React, { useRef, useState } from 'react';
import image from '../assets/Image.jpg'
import { useNavigate } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = (menu, path) => {
    event.preventDefault();
    setSelectedMenu(menu);
    setIsDropdownOpen(false);
    navigate(path);
  };
  
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <div className='lg:hidden w-full text-center text-black bg-orange-500 py-2'>Free Quote
         
        </div>
      <div className="flex justify-between bg-black w-full flex-row items-center gap-20 ">
        <div className="flex px-10 ">
          <img src={image} alt="logo" className='w-20' />
        </div>
        <div className="center flex gap-20 lg:hidden relative" >
          <LuMenu onClick={toggleDropdown} className="text-white text-2xl mr-10 cursor-pointer"/>
          {isDropdownOpen && (
            <div className="absolute right-0 bg-black w-40 text-white p-3 r-2 flex flex-col justify-center items-center gap-5" ref={dropdownRef}>
            <div className='w-full text-right'><IoMdCloseCircleOutline className='text-right ml-auto text-2xl cursor-pointer' onClick={()=>setIsDropdownOpen(false)} /></div>
             <a
                  href="#"
                  className={`${selectedMenu === 'Home' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('Home', '/')}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={`${selectedMenu === 'About' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('About', '#')}
                >
                  About
                </a>
                <a
                  href="#"
                  className={`${selectedMenu === 'Services' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('Services', '/services')}
                >
                  Services
                </a>
                <a
                  href="#"
                  className={`${selectedMenu === 'Tips' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('Tips', '/tips')}
                >
                  Tips
                </a>
                <a
                  href="#"
                  className={`${selectedMenu === 'Contact' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('Contact', '#')}
                >
                  Contact
                </a>
            </div>
          )}
        </div>
        <div className="fjustify-center lg:flex hidden gap-10 ">
        <a
                  href="#"
                  className={`${selectedMenu === 'Home' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('Home', '/')}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={`${selectedMenu === 'About' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('About', '#')}
                >
                  About
                </a>
                <a
                  href="#"
                  className={`${selectedMenu === 'Services' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('Services', '/services')}
                >
                  Services
                </a>
                <a
                  href="#"
                  className={`${selectedMenu === 'Tips' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('Tips', '/tips')}
                >
                  Tips
                </a>
                <a
                  href="#"
                  className={`${selectedMenu === 'Contact' ? 'text-orange-500' : 'text-white'} hover:text-orange-600`}
                  onClick={() => handleMenuClick('Contact', '#')}
                >
                  Contact
                </a>
        </div>
        <div className='w-1/5 h-full lg:block hidden'>
            <button className="bg-orange-600 w-full h-full py-10 text-black duration-500 hover:bg-black hover:text-white font-bold">Free Quote</button>
        </div>
        
      </div>
    </div>
    
    </div>
  );
}

export default Header;
