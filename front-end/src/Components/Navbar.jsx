import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import {HomeIcon} from '@heroicons/react/24/solid';
import { useLocation } from 'react-router-dom';



const Navbar = () => {
  const location = useLocation();


  const isLoginPage = location.pathname === '/Login';


  return (
    <>
    <nav className="relative w-full h-[79px] left-0 opacity-100 bg-[rgba(38,215,183,0.7)] m-0 p-0 overflow-x-hidden">

      {/* Left section */}
     <div className="flex ">
     <div className="flex items-center w-[356px] h-[42px] mt-[19px] ml-[43px]  space-x-10 text-sm">
     <div className="flex items-center space-x-2">
         
          <Link to='/'><span>Home</span></Link>
          <HomeIcon className="h-5 w-5 text-[rgba(37,124,108,0.86)]" />
        </div>
        <Link to="/Login" >Login</Link>
      </div>
     


      {/* Right section */}
    
      <div className="flex justify-between  w-[704px] h-[42px] mt-[19px] ml-[736px]  text-black space-x-10  text-sm mr-[60px]">
        <div className="flex items-center  cursor-pointer">
        <Link to="/area">  <span>AREA</span></Link>
          <span className="text-xs">&#9660;</span> 
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
         <Link to='/hospital'> <span>HOSPITALS</span></Link>
          <span className="text-xs">&#9660;</span> 
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link to='/oxygen'><span>OXYGEN</span></Link>
          <span className="text-xs">&#9660;</span> 
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link to='/bloodbank'><span>BLOOD BANK</span></Link>
          <span className="text-xs">&#9660;</span> 
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>LANGUAGE</span>
          <img src='/Connect.png' alt='*' className='absolute w-[43px] h-[32px] left-[1450px] top-[22px]'/> {/* language symbol */}
        </div>
      </div>
    
     
      </div>
    </nav>

    <div className="flex-grow">
        <Outlet />
      </div>

      {/* show main content if it's not login page */}
      {!isLoginPage && (
    <main>
    
      {/* heading with bg image */}
      
      
      <div  className="absolute w-full h-[349px] mt-[15px] bg-custom-bg bg-cover bg-center  border border-1 border-black">
        
      <img
      src="/image 4.png" // path to logo
      alt="Logo"
      className="absolute w-[164px] h-[73px] mt-[6px] ml-[10px] p-2 "
    />
      </div>
      {/* Heading Section */}

      <div className="absolute  mt-[110px] ml-[50px] w-[966px] h-[262px] font-[400] text-[60px] leading-[64.42px]  text-black text-left" style={{ fontFamily: 'Bruno Ace SC' }}>
      <h1>Get Trusted Hospital Vacancies</h1>

        {/* Sub-Heading Section */}
    
      <h1 className="font-kodchasan text-[32px] mt-[15px] font-normal leading-[41.6px] text-white text-left">
        Your Health, Our Mission.
      </h1>
       
      {/*Doctor and bed numbers */}
      <div className="flex w-screen h-screen ">
      <div className="relative  w-[630px] h-[128px] mt-[90px] ml-[70px]   bg-custom-bg1  bg-center border border-1 border-black">
            <div className=' w-[212px] h-[58px] ml-[150px] mt-[35px] text-center text-white font-kodchasan text-[24px]  leading-[28.94px] font-[Bruno_Ace_SC] opacity-100'>350+ Beds provided</div>
       </div>
       <div className="relative w-[630px] h-[128px] mt-[90px] ml-[40px]  mr-[80px] bg-custom-bg2   bg-center  border border-1 border-black">
              <div className=". w-[212px] h-[58px] ml-[150px] mt-[35px] text-center text-white font-kodchasan text-[24px]  leading-[28.94px] font-[Bruno_Ace_SC] opacity-100">100+ Doctors suggested</div>

       </div>
      </div>

    </div>
   
    
    </main>
    
  )}
   
        <section className=" relative ml-[65px] mt-[550px] p-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Updates Section */}
          <div className="border p-4 rounded-lg shadow bg-white">
            <div className="text-lg font-bold flex items-center mb-2">
              <img src='/Info.jpg' alt="1" className='mr-3'/>
              <span>UPDATES</span>
            </div>
           
           <p className="text-gray-600 ">
              Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
           
          </div>

          {/* Vacancies in Run Section */}
          <div className="border p-4 rounded-lg shadow bg-white">
            <div className="text-lg font-bold flex items-center mb-2">
            <img src='/Info.jpg' alt="1" className='mr-3'/>
              <span>VACANCIES IN RUN</span>
            </div>
            <p className="text-gray-600">
              Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
          </div>

          {/* News & Highlights Section */}
          <div className="border p-4 rounded-lg shadow bg-white">
            <div className="text-lg font-bold flex items-center mb-2">
            <img src='/Info.jpg' alt="1" className='mr-3'/>
              <span>NEWS & HIGHLIGHTS</span>
            </div>
            <p className="text-gray-600">
              Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
          </div>

          {/* Connect With Us Section */}
          <div className="border p-4 rounded-lg shadow bg-white">
            <div className="text-lg font-bold flex items-center mb-2">
            <img src='/Info.jpg' alt="1" className='mr-3'/>
              <span>CONNECT WITH US</span>
            </div>
            <p className="text-gray-600">TWITTER<br />YOUTUBE<br />LINKEDIN<br />INSTAGRAM</p>
          </div>
        </div>
      </section>
    
        {/* Emergency Call Button */}
      <section className=" flex justify-end p-3">
        <div className='flex'>
          <img src='/material-symbols_call-outline.png' alt='telephone' className='w-[50px] '/>
      <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-red-600 transition-all">
        EMERGENCY CALL NOW
      </button>
      </div>
       </section>
       <div className="flex-grow">
        <Outlet />
      </div>
     
     
    </>

  );
};

export default Navbar;
