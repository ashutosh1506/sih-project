import React from "react";
import { Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import BloodBank from "./Components/BloodBank";
import Oxygen from "./Components/Oxygen";
import Hospitals from "./Components/Hospitals";
import Area from "./Components/Area";
import Signin from "./Components/Signin";
import Chatbot from "./Components/Chatbot.jsx";

//private route
import PrivateRoute from "./Components/PrivateRoute.jsx";
import { AuthProvider,useAuth } from "./context/AuthContext.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//language
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

import "./i18n"; // Import i18n configuration
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";




const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
       {/* Protect these routes */}
      <Route path="/area" element={<PrivateRoute element={<Area />} />} />
      <Route path="/hospital" element={<PrivateRoute element={<Hospitals />}/>} />
      <Route path="/oxygen" element={<PrivateRoute element={<Oxygen />}/>} />
      <Route path="/bloodbank" element={<PrivateRoute element={<BloodBank />}/>} />
      <Route path="/chatbot" element={<PrivateRoute element={<Chatbot/>}/>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
      <AuthProvider> {/* Wrap the app in AuthProvider */}
        <RouterProvider router={route} />
      </AuthProvider>
      </I18nextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
