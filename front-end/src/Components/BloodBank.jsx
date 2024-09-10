import React, { useState } from 'react';

const BloodBank = () => {
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
    <div className="relative h-[100px]">

      {/* Logo at the top-left corner */}
      <img
        src="/image 4.png"  // Replace with actual logo path
        alt="Logo"
        className="absolute w-[206px] h-[93px] top-[26px] left-[33px] opacity-100"
      />

      {/* Main Menu and back arrow on the top-right corner */}
      <div className="absolute top-[30px] right-[20px] flex items-center space-x-4">
        <button className="flex items-center text-black">
          <span className="material-icons">arrow_back</span>
        </button>
        <button className="flex items-center text-black">
          <span className="material-icons"><img src='/menu.png'/></span> Main Menu
        </button>
    </div>
       {/* Heading - Blood Bank Information */}
       <h1
        className="absolute border-t border-transparent  ml-[98px] m-[-6px] text-[64px] font-normal text-left w-[238px] h-[38px] md:left-[50px] lg:left-[98px] lg:w-[1238px] lg:h-[68px] lg:top-[186px]"
        style={{
          fontFamily: 'Bruno Ace SC',
          lineHeight: '77.18px',
        }}
      >
        BLOOD BANK INFORMATION
      </h1>
      </div>

      {/* Background Image Section with Inputs */}
      <div
        className="relative w-full h-[450px] bg-cover bg-center mt-[100px] bg-custom-blood"
          // Replace with actual background image path
      >
        {/* Form Section for Input */}
        <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[80%] max-w-lg  -md p-6 rounded-lg md:w-[60%] lg:w-[50%]">

          {/* Blood Group Input */}
          <div className="mb-4 flex items-center">
           <label className="text-white text-lg font-semibold mr-4">
             BLOOD GROUP REQUIRED:
           </label>
           <input
             type="text"
             className="flex-grow p-3 bg-white text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             placeholder="Enter Blood Group"
             value={bloodGroup}
             onChange={(e) => setBloodGroup(e.target.value)}
           />
         </div>
         
         {/* Units Required Input */}
         <div className="mb-4 flex items-center">
           <label className="text-white text-lg font-semibold mr-4">
             NO. OF UNITS REQUIRED:
           </label>
           <input
             type="number"
             className="flex-grow p-3 bg-white text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             placeholder="Enter No. of Units"
             value={unitsRequired}
             onChange={(e) => setUnitsRequired(e.target.value)}
           />
         </div>
          {/* Search Button */}
          <button
            type="submit"
            className="w-[120px] ml-[180px] bg-black text-white py-3 rounded-md shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
            onClick={handleSearch}
          >
            SEARCH
          </button>

        </div>
      </div>
      
    
    </div>
      {/* Bottom Section - Nearest Hospital Availability */}
      <div
        className="relative w-full h-[167px] bg-cover bg-center mt-5 bg-custom-hospital"
          // Replace with actual bottom image
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-lg text-white">
          <p className="font-semibold">
            NEAREST AVAILABILITY: <span className="text-black">Hospital Name</span>
          </p>
          <p>
            HOSPITAL'S CONTACT NUMBER: <span className="text-black">123-456-7890</span>
          </p>
        </div>
      </div>
      </>
  );
};

export default BloodBank;
