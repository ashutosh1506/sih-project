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
    <div className=" bg-gray-200 w-screen h-full">

      {/* Logo at the top-left corner */}
      <img
        src="/image 4.png"  // Using original image path
        alt="Logo"
        className="absolute w-[206px] h-[93px] top-[26px] left-[33px] opacity-100"
      />

      {/* Main Menu and back arrow on the top-right corner */}
      <div className="absolute top-[26px] right-[30px] flex items-center space-x-4">
        <button className="flex items-center text-black">
          <span className="material-icons">arrow_back</span>
        </button>
        <button className="flex items-center text-black">
          <span className="material-icons">menu</span> Main Menu
        </button>
      </div>

      {/* Heading - Blood Bank Information */}
      <h1
        className="absolute top-[26px] left-1/2 transform -translate-x-1/2 text-[64px] font-normal text-left"
        style={{
          fontFamily: 'Bruno Ace SC',
          lineHeight: '77.18px',
        }}
      >
        BLOOD BANK INFORMATION
      </h1>

      {/* Form Section */}
      <div
        className="relative w-full bg-cover bg-center mt-32"
        style={{ backgroundImage: 'url(/image 3.png)' }} // Using original background image path
      >
        <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 w-[70%] max-w-2xl bg-opacity-70 bg-white bg-blur-lg p-6 rounded-lg backdrop-blur-md shadow-lg">
          {/* Blood Group Input */}
          <div className="mb-4">
            <label className="block text-white text-lg font-semibold mb-2">
              BLOOD GROUP REQUIRED:
            </label>
            <input
              type="text"
              className="w-full p-3 bg-white text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Blood Group"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
          </div>

          {/* Units Required Input */}
          <div className="mb-4">
            <label className="block text-white text-lg font-semibold mb-2">
              NO. OF UNITS REQUIRED:
            </label>
            <input
              type="number"
              className="w-full p-3 bg-white text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter No. of Units"
              value={unitsRequired}
              onChange={(e) => setUnitsRequired(e.target.value)}
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>

      {/* Bottom Section - Nearest Hospital Availability */}
      <div
        className="relative w-full h-[167px] bg-cover bg-center mt-8"
        style={{ backgroundImage: 'url(/image 2.png)' }} // Using original bottom background image path
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

    </div>
  );
};

export default BloodBank;
