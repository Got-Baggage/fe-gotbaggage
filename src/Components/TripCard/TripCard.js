import React from 'react'
import {Link} from 'react-router-dom'

function TripCard({tripName, category, traveler, id}) {
  return (
    <Link to={`/${id}`}>
      <article className="trip-card">
        <h3>{ tripName }</h3>
        <h3>{ traveler }</h3>
        {/* add images based on categories */}
      </article>
    </Link>
  )
}

export default TripCard