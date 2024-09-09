import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  // Step 1: Create state for phone and password
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Step 2: Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate phone and password fields
    if (phone === '' || password === '') {
      setErrorMessage('Please fill out both fields.');
      return;
    }

    // Basic password validation (adjust this logic as needed)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      setErrorMessage('Password must contain at least one letter, one number, and one special character.');
      return;
    }

  
    setErrorMessage('');

    // Simulate a login API call
    console.log('Logging in with:', { phone, password });
    alert(`Logged in with phone: ${phone}`);

    // Reset form
    setPhone('');
    setPassword('');
  };

  return (
    <div >
      {/* Navbar */}
      <div className="text-white p-4 flex justify-end items-center space-x-4 font-Bruno Ace SC" >
        <div>
          <img id="icon" src="icon-park-solid_back.png" alt="" className="w-8" />
        </div>

        {/* Hamburger Icon */}
        <button
          className="text-xl bg-transparent p-2"
          style={{ width: '50px', height: '50px', color: 'white', border: 'none' }}
        >
          <span className="text-black text-5xl">≡</span>
        </button>

        <button className="bg-[#137D94] hover:bg-cyan-200 text-white rounded py-2 px-6 mt-6">
          MAIN MENU
        </button>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center h-screen " style={{ fontFamily: 'Bruno Ace SC' }}>
        <div className="bg-white w-8/12 rounded-lg flex shadow-lg">
          {/* Left Section */}
          <div
            className="w-1/2 bg-cover bg-center p-8 items-center flex justify-center bg-custom-bg3" >
            <div className="bg-white w-60 rounded-3xl h-72 shadow-lg text-center">
              <h2 className="text-lg font-semibold mt-20">NEW HERE?</h2>
              <p className="mt-5 text-sm">
                SIGN UP OR LOGIN TO GET RAPID RESPONSE RELATED TO YOUR HEALTH!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 bg-[linear-gradient(180deg,#ECDAF4_1.1%,#74F9F9_33.6%,_#343887_100%)] p-8 flex items-center justify-center" style={{ fontFamily: 'Bruno Ace SC' }}>
            <div className="bg-pink-50 p-8 rounded shadow-lg w-full max-w-sm">
              <div>
                <img id="usericon" src="material-symbols_person.png" alt="" className="w-12 mx-auto" />
              </div>
              <h2 className="text-xl font-serif text-center mb-1">Username</h2>
              <div className="w-full h-[0.3px] bg-gray-400 my-4"></div>

              {/* Login Form */}
              <form onSubmit={handleLogin}>
                <div className="mb-4" >
                  <label htmlFor="phone" className="block text-sm font-serif">
                    Enter Phone No.:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="+91-XXXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block font-serif text-sm">
                    Enter Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="****"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                  <small className="text-gray-700">
                    Password must contain an alphabet, a number, and a special character.
                  </small>
                </div>

                {/*  Message */}
                {errorMessage && (
                  <p className="text-red-600 text-center mb-4">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  className="w-1/2 ml-20 bg-cyan-400 text-white py-2 rounded-xl font-extrabold"
                >
                  LOGIN
                </button>
              </form>
              <p className="text-center mt-4">OR</p>
              <p className="text-black text-center">FIRST TIME USER?</p>
              <button className="w-1/2 ml-20 bg-blue-500 text-white py-2 rounded mt-3">
                <Link to="/Signin">SIGN IN</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-gradient-to-r from-[#416E74] to-[#71D6E4] text-white py-6 text-center">
        <p className="text-2xl">##RUNNING INFORMATION PANEL</p>
      </footer>
    </div>
  );
};



export default Login