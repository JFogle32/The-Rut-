import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeerForm } from "./DeerForm";

const AddDeerProfile = () => {
  const navigate = useNavigate();

  const addDeerProfile = (deerData) => {
    return fetch("http://localhost:8088/deer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deerData),
    }).then(() => {
      navigate("/deer");
    });
  };

  return (
    <div>
      {/* <h1>Add a New Deer Profile</h1> */}
      <DeerForm onSubmit={addDeerProfile} />
    </div>
  );
};

export default AddDeerProfile;
