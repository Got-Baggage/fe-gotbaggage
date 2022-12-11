import React from 'react';
import { Link } from 'react-router-dom';

function TripCard({ tripName, category, traveler, id, image, handleDelete, handleCardDetail }) {
  return (
    <article className="trip-card">
      <div className="card-details">
        <Link to={`/list/${id}`}>
          <h3 className="card-label">{traveler}</h3>
          <h3 className="card-label">{tripName}</h3>
        </Link>
        <button
          className=""
          onClick={(e) => {
            handleDelete(id);
          }}
        >
          🗑️
        </button>

        {/* <button
            onClick={(e) => {
              handleCardDetail(id);
            }}
          >
            View List
          </button> */}
      </div>

      <div className="card-image-container">
        <img className="card-image" src={image} alt="trip photograph" />
      </div>
      {/* add images based on categories */}
    </article>
  );
}

export default TripCard;
