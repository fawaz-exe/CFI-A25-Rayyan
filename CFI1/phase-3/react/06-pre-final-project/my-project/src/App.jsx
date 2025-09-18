import axois from 'axios';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Navbar from './components/Navbar';

//pages
import Login from './pages/Login';
import Register from './pages/Register';

function App(){
return (
  <>
  <Routes>
    <Route
          path="/"
          element={
            <>
              <Navbar />
            </>
          }
          ></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
  </Routes>
  
  </>
)


}

export default App