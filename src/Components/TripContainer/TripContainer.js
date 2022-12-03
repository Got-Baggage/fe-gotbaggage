import React from 'react'
import TripCard from '../TripCard/TripCard'
import Nav from '../Nav/Nav'

function TripContainer({ userTrips }) {
  console.log(userTrips)
  const cards = userTrips.map(trip => {
    return (
      <TripCard 
        tripName={trip.tripName}
        key={trip.id}
        id={trip.id}
        category={trip.category}
        traveler={trip.traveler}
        />
    )
  })

  return (
    <div>
      <Nav />
      <section className="trip-container">
        { cards }
        <TripCard tripName={'my trip'}
          key={12}
          id={12}
          category={'beach'}
          traveler={'me'}/>
        <TripCard tripName={'my trip'}
          key={11}
          id={11}
          category={'beach'}
          traveler={'me'}/>
        <TripCard tripName={'my trip'}
          key={10}
          id={12}
          category={'beach'}
          traveler={'me'}/>
      </section>
    </div>
  )
}

export default TripContainer