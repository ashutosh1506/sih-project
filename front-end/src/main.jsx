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

const route=createBrowserRouter(createRoutesFromElements(
  <Route path='/'  element={<Navbar/>}>
    <Route index  element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/Signin' element={<Signin />} />
    <Route path='/area' element={<Area />} />
    <Route path='/hospital' element={<Hospitals />} />
    <Route path='/oxygen' element={<Oxygen />} />
    <Route path='/bloodbank' element={<BloodBank />} />
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)



