import React from 'react'
import TripCard from '../TripCard/TripCard'
import Nav from '../Nav/Nav'
import {GetAllTrips} from '../../queries'

function TripContainer({ userTrips }) {
  let { data, error, loading } = GetAllTrips()
  let cards 

  const displayTrips = () => {
    if (!data) {
      return <p> loading </p>
    } else {
     return data.allTrips.map(trip => {
        console.log(trip)
        return (
          <TripCard 
            tripName={trip.name}
            key={trip.id}
            id={trip.id}
            category={trip.category}
            traveler={trip.traveler}
            image={trip.image}
            />
        )
      })
    }
  }


  return (
    <div>
      <Nav />
      <section className="trip-container">
        { displayTrips() }
      </section>
    </div>
  )
}

export default TripContainer