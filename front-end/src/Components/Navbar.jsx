import React from 'react'
//import {Link} from 'react-router-dom'
import {HomeIcon} from '@heroicons/react/24/solid';



const Navbar = () => {
  return (
    <>
    <nav className="relative w-full h-[79px] left-0 opacity-100 bg-[rgba(38,215,183,0.7)] m-0 p-0 overflow-x-hidden">
      {/* Left section */}
     <div className="flex ">
     <div className="flex items-center w-[356px] h-[42px] mt-[19px] ml-[43px]  space-x-10 text-sm">
     <a href="#" className="flex items-center space-x-2">
         
          <span>Home</span>
          <HomeIcon className="h-5 w-5 text-[rgba(37,124,108,0.86)]" />
        </a>
        <a href="#" >Login</a>
      </div>
     


      {/* Right section */}
    
      <div className="flex justify-between  w-[704px] h-[42px] mt-[19px] ml-[736px]  text-black space-x-10  text-sm mr-[60px]">
        <div className="flex items-center  cursor-pointer">
          <span>AREA</span>
          <span className="text-xs">&#9660;</span> {/* Dropdown symbol */}
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>HOSPITALS</span>
          <span className="text-xs">&#9660;</span> {/* Dropdown symbol */}
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>OXYGEN</span>
          <span className="text-xs">&#9660;</span> {/* Dropdown symbol */}
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>BLOOD BANK</span>
          <span className="text-xs">&#9660;</span> {/* Dropdown symbol */}
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>LANGUAGE</span>
          <span className="text-xs">&#9660;</span> {/* Dropdown symbol */}
        </div>
      </div>
    
     
      </div>
    </nav>
    <main>
      {/* heading with bg image */}
      
      {/* image */}
      <div  className="absolute w-full h-[349px] mt-[15px] bg-custom-bg bg-cover bg-center  border border-1 border-black">
         {/* Logo */}
      <img
      src="/image 4.png" // path to logo
      alt="Logo"
      className="absolute w-[164px] h-[73px] mt-[6px] ml-[10px] p-2 "
    />
      </div>
    
    </main>
    </>

  );
};

export default Navbar;
