
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./AllDeer.css"
import { DeerProfile } from "./DeerProfile";

export const AllDeer = () => {
  const [deerList, setDeerList] = useState([]);
  const navigate = useNavigate();

  const getAllDeerProfiles = () => {
    fetch("http://localhost:8088/deer")
      .then((response) => response.json())
      .then((deerArray) => {
        setDeerList(deerArray);
      });
  };

  const deleteDeerProfile = (singleDeer) => {
   return fetch(`http://localhost:8088/deer/${singleDeer.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        getAllDeerProfiles();
      })
      
  };

  useEffect(() => {
    getAllDeerProfiles();
  }, []);

  return (
    <>
      <button onClick={() => navigate("/deer/create")}>Add New Deer Profile</button>
      <h2>List of Deer Profiles</h2>
      <article className="deerProfiles">
        {deerList.map((deer) => (
          <DeerProfile key={deer.id} deerObject={deer} onDelete={deleteDeerProfile} />
        ))}
      </article>
    </>
  );
};


