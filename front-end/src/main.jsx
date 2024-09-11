import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import BloodBank from './Components/BloodBank'
import Oxygen from './Components/Oxygen'
import Hospitals from './Components/Hospitals'
import Area from './Components/Area'
import Signin from './Components/Signin.jsx'

//language

import './i18n'; // Import i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const route=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/'  element={<Navbar/>}>
    <Route index  element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/Signin' element={<Signin />} />
   </Route>
    <Route path='/area' element={<Area />} />
    <Route path='/hospital' element={<Hospitals />} />
    <Route path='/oxygen' element={<Oxygen />} />
    <Route path='/bloodbank' element={<BloodBank />} />
    </>
     
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>
    <RouterProvider router={route}/>
    </I18nextProvider>
  </React.StrictMode>,
)



