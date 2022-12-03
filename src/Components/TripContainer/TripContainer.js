import React from 'react'
import TripCard from '../TripCard/TripCard'

function TripContainer({ userTrips }) {
  const cards = userTrips.map(trip => {
    return (
      <TripCard 
        tripName={trip.tripName}
        key={trip.id}
        category={trip.category}
        traveler={trip.traveler}
        />
    )
  })

  return (
    <section className="trips-container">
      { cards }
    </section>
  )
}

export default TripContainer