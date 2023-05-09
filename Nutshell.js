import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import { ApplicationViews } from './components/views/ApplicationViews';
//ignore these two errors
import { Navbar } from './components/Nav/Navbar';
import { Register } from './components/Auth/Register';




function Nutshell() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<>
        <Navbar/>
        <ApplicationViews/>
      </>} />
    </Routes>
  );
}

export default Nutshell;
