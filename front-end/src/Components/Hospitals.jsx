import React from 'react';

const Hospitals = [
  {
    name: 'BABA SAHEB AMBEDKAR HOSPITAL',
    location: 'Rohini Sector 6, New Delhi',
    speciality: 'Specialized in all fields',
    contact: 'XXXXXX9567',
    img: 'Dr-Baba-Saheb-Ambedkar-Medical-College-and-Hospital-Delhi.jpg',
    type: 'government'
  },
  {
    name: 'GANGA RAM HOSPITAL',
    location: 'Old Rajendra Nagar, New Delhi',
    speciality: 'Specialized in all fields',
    contact: 'XXXXXX7895',
    img: 'Ganga Ram.jpg',
    type: 'government'
  },
  {
    name: 'RAJIV GANDHI HOSPITAL',
    location: 'Rohini sector 5, New Delhi',
    speciality: 'Neurology and Neurosurgery',
    contact: 'XXXXXX7489',
    img: 'rajiv-gandhi-hospital.webp',
    type: 'government'
  },
  {
    name: 'AIIMS',
    location: 'Ansari Nagar East, New Delhi',
    speciality: 'Specialized in all fields',
    contact: 'XXXXXX9834',
    img: 'Aiims.jpg',
    type: 'government'
  },
  {
    name: 'MANIPAL HOSPITAL',
    location: 'MTNL Building Dwarka Sector 6',
    speciality: 'Specialized in all fields',
    contact: 'XXXXXX7942',
    img: 'manipal.jpg',
    type: 'private'
  },
  {
    name: 'MAX SUPER SPECIALITY HOSPITAL',
    location: 'Street number 1086 Shalimar Bagh',
    speciality: 'Specialized in all fields',
    contact: 'XXXXXX6932',
    img: 'max.jpg',
    type: 'private'
  },
  {
    name: 'RS GROVER MEMORIAL HOSPITAL',
    location: 'Laxmi Nagar, New Delhi 110092',
    speciality: 'Gynecology, Orthopedics, ENT, Dermatology',
    contact: 'XXXXXX4896',
    img: '1644405196497_HospitalFacilityImages_Profile-w800-h800.webp',
    type: 'private'
  },
  {
    name: 'SHREE AGRASEN INTERNATIONAL HOSPITAL',
    location: 'Sector-22 Rohini, Delhi',
    speciality: 'Specialized in all fields',
    contact: 'XXXXXX9456',
    img: 'shree.jpg',
    type: 'private'
  }
];

const Hospital = () => {
  return (
    <div>
      <nav>
      <div className="text-center text-6xl font-extrabold p-4 mt-3 relative font-bruno" style={{ WebkitTextStroke: '2px black', color: 'transparent', textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)', fontFamily: 'Bruno Ace SC' }}  >
  <span className="relative inline-block">
    Top Recommended Hospitals
  </span>
</div>



      </nav>
      
      {/* Government Hospitals Section */}
      <h2 className="text-3xl ml-20 font-extrabold">Government Hospitals</h2>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Hospitals.filter(hospital => hospital.type === 'government').map((hospital, index) => (
            <div 
              key={index} 
              className="group max-w-sm bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                src={hospital.img} 
                alt={hospital.name} 
              />
              <div className="p-6">
                <h2 className="text-lg font-bold mb-2">{hospital.name}</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Location: {hospital.location}</span>
                  <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Speciality: {hospital.speciality}</span>
                  <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Contact no.: {hospital.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Private Hospitals Section */}
      <h2 className="text-3xl ml-20 font-extrabold">Private Hospitals</h2>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Hospitals.filter(hospital => hospital.type === 'private').map((hospital, index) => (
            <div 
              key={index} 
              className="group max-w-sm bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                src={hospital.img} 
                alt={hospital.name} 
              />
              <div className="p-6">
                <h2 className="text-lg font-bold mb-2">{hospital.name}</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Location: {hospital.location}</span>
                  <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Speciality: {hospital.speciality}</span>
                  <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Contact no.: {hospital.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hospital;
