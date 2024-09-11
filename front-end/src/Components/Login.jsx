import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import customFetch from "../utils/customFetch";
// Server-side action function for login handling
export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post("/users/login", data);
      queryClient.invalidateQueries();
      console.log(toast.success());

      toast.success("Login Successful");
      return redirect("/");
    } catch (error) {
      toast.error("An error occurred during login.");
      return error;
    }
  };

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Basic validation logic that could be improved further
  const validateForm = () => {
    if (phone === "" || password === "") {
      setErrorMessage("Please fill out both fields.");
      return false;
    }

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
  console.log("Login component rendered");
  return (
    <Form method="post" onSubmit={(e) => validateForm() || e.preventDefault()}>
      <div>
        {/* Navbar */}
        <div className="text-white p-4 flex justify-end items-center space-x-4 font-Bruno Ace SC">
          <div>
            <img
              id="icon"
              src="icon-park-solid_back.png"
              alt=""
              className="w-8"
            />
          </div>

          {/* Hamburger Icon */}
          <button
            className="text-xl bg-transparent p-2"
            style={{
              width: "50px",
              height: "50px",
              color: "white",
              border: "none",
            }}
          >
            <span className="text-black text-5xl">≡</span>
          </button>

          <button className="bg-[#137D94] hover:bg-cyan-200 text-white rounded py-2 px-6 mt-6">
            MAIN MENU
          </button>
        </div>

        {/* Main Content */}
        <div
          className="flex justify-center items-center h-screen"
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
                <h2 className="text-xl font-serif text-center mb-1">
                  Username
                </h2>
                <div className="w-full h-[0.3px] bg-gray-400 my-4"></div>

                {/* Login Form */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-serif">
                    Enter Phone No.:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+91-XXXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    name="password"
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

                {/* Error Message */}
                {errorMessage && (
                  <p className="text-red-600 text-center mb-4">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-1/2 ml-20 bg-cyan-400 text-white py-2 rounded-xl font-extrabold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "submitting" : "submit"}
                </button>

                <p className="text-center mt-4">OR</p>
                <p className="text-black text-center">FIRST TIME USER?</p>

                <Link to="/Signin" className="w-1/2 ml-20">
                  <button className="bg-blue-500 text-white py-2 rounded mt-3">
                    SIGN IN
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full bg-gradient-to-r from-[#416E74] to-[#71D6E4] text-white py-6 text-center">
          <p className="text-2xl">##RUNNING INFORMATION PANEL</p>
        </footer>
      </div>
    </Form>
  );
};

export default Login;
