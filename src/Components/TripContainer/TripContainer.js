import TripCard from "../TripCard/TripCard";
import Nav from "../Nav/Nav";
import { DELETE_TRIP } from "../../queries";
import { useMutation } from "@apollo/client";

function TripContainer({ data, refetch }) {
  const [deleteTrip] = useMutation(DELETE_TRIP, {
    onCompleted: refetch,
  });

  const handleDelete = (id) => {
    deleteTrip({
      variables: {
        id: id,
      },
    });
  };

  const displayTrips = () => {
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
