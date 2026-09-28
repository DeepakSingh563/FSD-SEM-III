import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
