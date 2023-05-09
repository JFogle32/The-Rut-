import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import {Register} from "../Auth/Register";
import CreateDeerProfile from "../deer/CreateDeerProfile";
import { AllDeer } from "../deer/AllDeer";
import { DeerEdit } from "../deer/DeerEdit";


export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Deer Tracker</h1>} />

      {/* Add the new routes for the deer pages */}
      <Route path="/deer" element={<AllDeer/>} />
      <Route path="/deer/create" element={<CreateDeerProfile/>} />
      <Route path="/deer/edit/:id" element={<DeerEdit/>} />

      {/* Add the new route for the login and register pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Other routes */}
    </Routes>
  );
};



