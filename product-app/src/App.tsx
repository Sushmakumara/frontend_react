// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import UserDashboard from "./components/userdashboard";
import AdminDashboard from "./components/admindashboard";
function App() {
  return (
    <>
      
      <div className="row bg-warning text-center fixed-top m-0 p-0">
        <header>
          <h1 className="m-0 p-3">Product Management Application</h1>
        </header>
      </div>

      
      {/* <div className="container" style={{ marginTop: '80px' }}>
        <Home />
      </div> */}
       {/* <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh', marginTop: '0' }}
      >
        <Login />
      </div> */}
        
      <Routes>
        <Route path="/home" element={<Home />} />                {/* Home page */}
        <Route path="/login" element={<Login />} />         {/* Login page */}
        <Route path="/userdashboard" element={<UserDashboard />} /> 
        <Route path="/admindashboard" element={<AdminDashboard />} /> 
      </Routes>
    
    </>
  )
}

export default App;

