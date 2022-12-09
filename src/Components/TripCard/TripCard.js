import React from 'react';
import { Link } from 'react-router-dom';

function TripCard({ tripName, category, traveler, id, image, handleDelete }) {
  return (
    // <Link to={`/list/${id}`}>
      <article className="trip-card">
        <div className='card-details'>
          <h3 className='card-label'>{traveler}</h3>
          <h3 className='card-label'>{tripName}</h3>
        </div>
        <div className="card-image-container">
          <img className="card-image" src={image} />
        </div>
        {/* add images based on categories */}
        <button onClick={(e) => {handleDelete(id)}}>🗑️</button>
      </article>
    // </Link>
  );
}

export default TripCard;
