import React from "react";
import { Link } from "react-router-dom";

function TripCard({ tripName, traveler, id, image, handleDelete }) {
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
      </div>
      <div className="card-image-container">
        <img className="card-image" src={image} alt="trip photograph" />
      </div>
    </article>
  );
}

export default TripCard;
