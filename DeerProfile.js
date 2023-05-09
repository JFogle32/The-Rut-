import React from 'react';
import { Link } from 'react-router-dom';

export const DeerProfile = ({ deerObject, onDelete }) => {

 const handleDelete = (evt) => {
    evt.preventDefault()
    onDelete(deerObject)
  }
  return (
    <div className="DeerProfile grid-item">
      <h3>Name:{deerObject.name}</h3>
      <p>Description{deerObject.description}</p>
      <p>Food: {deerObject.food}</p>
      <p>Date first seen: {deerObject.dateFirstSeen}</p>
      <p>Hand-feedable: {deerObject.handFeed ? 'Yes' : 'No'}</p>
      <Link to={`/deer/edit/${deerObject.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
