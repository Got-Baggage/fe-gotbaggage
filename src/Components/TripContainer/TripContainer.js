import React, { useState, useEffect } from "react";
import TripCard from "../TripCard/TripCard";
import Nav from "../Nav/Nav";
import { GetAllTrips, ItemsByTrip } from "../../queries";
import { DELETE_TRIP } from "../../queries";
import { useMutation, useQuery } from "@apollo/client";

function TripContainer({ data, refetch }) {
 
  const [deleteTrip] = useMutation(DELETE_TRIP, {
    onCompleted: refetch,
  });

  const handleDelete = (id) => {
    console.log(id);
    deleteTrip({
      variables: {
        id: id,
      },
    });
  };

  const handleCardDetail = (id) => {
    console.log(id);
    ItemsByTrip({
      variables: {
        id: id,
      },
    });
  };

  const displayTrips = () => {
    console.log("data", data);
    if (!data) {
      return <p> loading </p>;
    } else {
      return data.allTrips.map((trip) => {
        return (
          <TripCard
            tripName={trip.name}
            key={trip.id}
            id={trip.id}
            category={trip.category}
            traveler={trip.traveler}
            image={trip.image}
            handleDelete={handleDelete}
            handleCardDetail={handleCardDetail}
          />
        );
      });
    }
  };

  return (
    <div>
      <Nav />
      <section className="trip-container">{displayTrips()}</section>
    </div>
  );
}

export default TripContainer;
