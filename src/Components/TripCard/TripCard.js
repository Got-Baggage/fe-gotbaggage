import React from 'react';
import { Link } from 'react-router-dom';

function TripCard({ tripName, category, traveler, id, image, handleDelete, handleCardDetail }) {
  return (
    <article className="trip-card">
      <div className="card-details">
        <Link className="link-list-detail" to={`/list/${id}`}>
          <h3 className="card-label">{traveler}</h3>
          <h3 className="card-label">{tripName}</h3>
        </Link>
        <button
          className="card-delete"
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
    </article>
  );
}

export default TripCard;
