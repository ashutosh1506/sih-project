import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phone: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // Added state for error message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, username, phone, password } = formData;

    if (name === "" || username === "" || phone === "" || password === "") {
      setErrorMessage("Please fill out all fields.");
      return false;
    }

    // Basic password validation pattern
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      setErrorMessage(
        "Password must contain at least one letter, one number, and one special character."
      );
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:4000/api/v1/users/signup", formData);
      toast.success("Signup Successful");
      navigate("/login"); // Redirect to login page after successful signup
    } catch (error) {
      toast.error("An error occurred during signup.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Container for the sign-up page */}
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl">
        {/* Left section with message */}
        <div className="w-1/2 bg-cover bg-center p-8 items-center flex justify-center bg-custom-bg3">
          <div
            className="bg-white w-60 rounded-3xl h-72 shadow-lg text-center"
            style={{ fontFamily: "Bruno Ace SC" }}
          >
            <h2 className="text-lg font-semibold mt-20">NEW HERE?</h2>
            <p className="mt-5 text-sm">
              To get rapid response related to your health!
            </p>
          </div>
        </div>

        {/* Right section with form */}
        <div className="w-1/2 bg-[linear-gradient(180deg,#ECDAF4_1.1%,#74F9F9_33.6%,_#343887_100%)] p-8 flex items-center justify-center">
          <div className="bg-pink-50 p-8 rounded shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
              First Time User?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Enter Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  htmlFor="username"
                >
                  Enter Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  htmlFor="phone"
                >
                  Enter Phone No.
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="+91-XXXXXXXXXX"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  htmlFor="password"
                >
                  Enter Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
                <p
                  className="text-xs text-gray-700 mt-1"
                  style={{ fontFamily: "Bruno Ace SC" }}
                >
                  Password must contain an alphabet, a number, and a special
                  character.
                </p>
              </div>

              {errorMessage && (
                <p className="text-red-600 text-center mb-4">{errorMessage}</p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                style={{ fontFamily: "Bruno Ace SC" }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
