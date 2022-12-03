import React from 'react'

function TripCard({key, tripName, category, traveler}) {
  return (
    <article>
      <h3>{ tripName }</h3>
      <h3>{ traveler }</h3>
      {/* add images based on categories */}
    </article>
  )
}

export default TripCard