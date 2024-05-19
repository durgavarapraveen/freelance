import React, { useState } from 'react';
import image from './image.png';
// import Footer from './footer'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row">
      <div className="flex justify-center bg-black w-4/5 flex-row items-center gap-20 p-5 flex-wrap">
        <div className="left flex flex-row flex-wrap">
          <img src={image} alt="logo" />
          <h1 className="whitespace-pre-line text-white font-bold">Fly<br />Right<br />Movers</h1>
        </div>
        <div className="center flex gap-20 lg:hidden">
          <button onClick={toggleDropdown} className="text-white">Menu</button>
          {isDropdownOpen && (
            <div className="absolute top-12 right-0 bg-black text-white p-2 r-2">
              <a href="#" className="block py-1 text-white hover:text-red-600">Home</a>
              <a href="#" className="block py-1 text-white hover:text-red-600">About</a>
              <a href="#" className="block py-1 text-white hover:text-red-600">Services</a>
              <a href="#" className="block py-1 text-white hover:text-red-600">Tips</a>
              <a href="#" className="block py-1 text-white hover:text-red-600">Contact</a>
            </div>
          )}
        </div>
        <div className="center flex gap-20 hidden lg:flex">
          <a href="#" className="text-red-600">Home</a>
          <a href="#" className="text-white hover:text-red-600">About</a>
          <a href="#" className="text-white hover:text-red-600">Services</a>
          <a href="#" className="text-white hover:text-red-600">Tips</a>
          <a href="#" className="text-white hover:text-red-600">Contact</a>
        </div>
      </div>
      <button className="bg-red-600 text-black hover:bg-black hover:text-white font-bold w-1/5">Free Quote</button>
    </div>
    
    </div>
    
  );
}

export default Header;