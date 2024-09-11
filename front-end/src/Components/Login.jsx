import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [Phnnumber, setPhnnumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Basic validation logic
  const validateForm = () => {
    if (Phnnumber === "" || password === "") {
      setErrorMessage("Please fill out both fields.");
      return false;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
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
      await axios.post("http://localhost:4000/api/v1/users/login", {
        Phnnumber,
        password,
      });
      toast.success("Login Successful");
      navigate("/"); // Redirect to dashboard or another page
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        toast.error(
          `Login failed: ${error.response.data.message || "An error occurred."}`
        );
      } else if (error.request) {
        console.error("Error request data:", error.request);
        toast.error("No response from server.");
      } else {
        console.error("Error message:", error.message);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      {/* Navbar */}

      {/* Main Content */}
      <div
        className="flex justify-center items-center h-screen "
        style={{ fontFamily: "Bruno Ace SC" }}
      >
        <div className="bg-white w-8/12 rounded-lg flex shadow-lg">
          {/* Left Section */}
          <div className="w-1/2 bg-cover bg-center p-8 items-center flex justify-center bg-custom-bg3">
            <div className="bg-white w-60 rounded-3xl h-72 shadow-lg text-center">
              <h2 className="text-lg font-semibold mt-20">NEW HERE?</h2>
              <p className="mt-5 text-sm">
                SIGN UP OR LOGIN TO GET RAPID RESPONSE RELATED TO YOUR HEALTH!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="w-1/2 bg-[linear-gradient(180deg,#ECDAF4_1.1%,#74F9F9_33.6%,_#343887_100%)] p-8 flex items-center justify-center"
            style={{ fontFamily: "Bruno Ace SC" }}
          >
            <div className="bg-pink-50 p-8 rounded shadow-lg w-full max-w-sm">
              <div>
                <img
                  id="usericon"
                  src="material-symbols_person.png"
                  alt=""
                  className="w-12 mx-auto"
                />
              </div>
              <h2 className="text-xl font-serif text-center mb-1">Username</h2>
              <div className="w-full h-[0.3px] bg-gray-400 my-4"></div>

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="Phnnumber"
                    className="block text-sm font-serif"
                  >
                    Enter Phone No.:
                  </label>
                  <input
                    type="tel"
                    id="Phnnumber"
                    placeholder="+91-XXXXXXXXXX"
                    value={Phnnumber}
                    onChange={(e) => setPhnnumber(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block font-serif text-sm"
                  >
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
                    Password must contain an alphabet, a number, and a special
                    character.
                  </small>
                </div>

                {/*  Message */}
                {errorMessage && (
                  <p className="text-red-600 text-center mb-4">
                    {errorMessage}
                  </p>
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

export default Login;
