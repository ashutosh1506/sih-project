import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Oxygen = () => {
  // State to hold user inputs
  const [bloodGroup, setBloodGroup] = useState('');
  const [unitsRequired, setUnitsRequired] = useState('');

  // Function to handle the search button click
  const handleSearch = () => {
    if (bloodGroup && unitsRequired) {
      alert(`Searching for Blood Group: ${bloodGroup} and Units: ${unitsRequired}`);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
 <>
 <div className=' bg-gray-200  '>
    <div className="relative h-[130px]">

      {/* Logo at the top-left corner */}
      <img
        src="/image 4.png"  // Replace with actual logo path
        alt="Logo"
        className="absolute w-[170px] h-[8] top-[26px] left-[33px] opacity-100"
      />

      {/* Main Menu and back arrow on the top-right corner */}
      <div className="absolute top-[30px] right-[20px]  items-center space-x-4">
        <button className="flex items-center text-black">
        <span className="material-icons"><img src='/menu.png ' /></span> Main Menu
        </button>
        <button className="absolute right-0 top-full flex items-center text-black mt-2">
        <span className="material-icons"><Link to='/'>
         <img src='/icon-park-solid_back.png' className='mr-[-6px]' />
         </Link>
         </span>
        </button>
    </div>
       {/* Heading - Blood Bank Information */}
       <h1
       className="absolute text-center h-[74px]  whitespace-nowrap border-[1px] border-solid ml-[18px] -mt-[58px] text-[60px] font-normal px-4 py-2 md:left-[50px] lg:left-[98px] lg:w-auto lg:top-[186px] border-black bg-[rgba(138,191,188,0.21)] shadow-md shadow-[rgba(0,0,0,0.25)] "
       style={{
         fontFamily: 'Bruno Ace SC',
         lineHeight: '77.18px',
       }}
      >
  OXYGEN SUPPLY INFORMATION
</h1>

      </div>

      {/* Background Image Section with Inputs */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center mt-[100px] bg-custom-oxygen rounded-[30px] overflow-hidden"
          // Replace with actual background image path
      >
        {/* Form Section for Input */}
        <div className="absolute mt-[50px] left-[45%] transform -translate-x-1/2 w-[80%] max-w-lg  -md p-6 rounded-lg md:w-[60%] lg:w-[50%]">

          {/* Blood Group Input */}
          <div className="mb-4 flex items-center whitespace-nowrap">
           <label className="font-normal text-[20px] leading-[30.77px] text-left mr-[20px] text-white"
              style={{ fontFamily: 'Bruno Ace' }}>
              NO.OF OXYGEN CYLINDERS REQUIRED :
           </label>
           <input
             type="text"
             className="flex-grow p-3 bg-white text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             placeholder="Enter no. "
             value={bloodGroup}
             onChange={(e) => setBloodGroup(e.target.value)}
           />
         </div>
         
         {/* Units Required Input */}
         <div className="mb-4 flex items-center whitespace-nowrap">
           <label className=" font-normal text-white text-[20px]  leading-[30.77px] mr-9" style={{ fontFamily: 'Bruno Ace' }}>
           APPROXIMATE COSTING :
           </label>
           <input
             type="number"
             className="flex-grow p-3   bg-white text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             
             value={unitsRequired}
             onChange={(e) => setUnitsRequired(e.target.value)}
           />
         </div>
          {/* Search Button */}
          <div className='flex'>
          
          <button
            type="submit"
            className="w-[130px] mt-[20px] ml-[180px] bg-white text-black py-3 rounded-md shadow-lg flex items-center justify-center gap-2 hover:bg-gray-300 transition duration-300 ease-in-out"
            onClick={handleSearch}
          >
            <img src='/Search.png' alt="Search Icon" className="w-4 h-4 mr-2" />
            SEARCH
          </button>
       </div>


        </div>
      </div>
      
    
    </div>
    <div className=" ml-[8%] w-[80%] h-[1px] mt-[20px] bg-black "></div>

      {/* Bottom Section - Nearest Hospital Availability */}
      <div
        className="relative w-full h-[155px] bg-cover bg-center mt-7 bg-custom-hospital "
          // Replace with actual bottom image
      >
        <div className="absolute inset-0 flex flex-col whitespace-nowrap justify-center text-center text-[26px] font-normal  leading-[38.59px] text-white  w-[500px] h-[29px] mt-[64px] ml-[400px] text-shadow"
        style={{ fontFamily: 'Bruno Ace SC',
          lineHeight: '47.18px',
         }}>
          <p >
            NEAREST AVAILABILITY:   <span className='ml-[10px] text-[26px]' >HOSPITAL NAME</span>
          </p>
          <p>
            HOSPITAL'S CONTACT NUMBER:    <span className='ml-[10px] text-[26px]'>123-456-7890</span>
          </p>
        </div>
      </div>
      </>
  );
};

export default Oxygen;
