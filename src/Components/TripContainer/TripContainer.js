import React from 'react'
import TripCard from '../TripCard/TripCard'
import Nav from '../Nav/Nav'
import {GetAllTrips} from '../../queries'
import { DELETE_TRIP } from '../../queries'
import { useMutation } from '@apollo/client'

function TripContainer({ userTrips }) {
  let { data, error, loading } = GetAllTrips()

  const [deleteTrip] = useMutation(DELETE_TRIP);
  
  const handleDelete = (id) => {
    console.log(id)
    deleteTrip({
      variables: {
        id: id
      }
    })
  }

  const displayTrips = () => {
    if (!data) {
      return <p> loading </p>
    } else {
     return data.allTrips.map(trip => {
        return (
          <TripCard 
            tripName={trip.name}
            key={trip.id}
            id={trip.id}
            category={trip.category}
            traveler={trip.traveler}
            image={trip.image}
            handleDelete={handleDelete}
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