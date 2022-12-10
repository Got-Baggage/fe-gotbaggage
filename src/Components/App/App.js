import { Route, Switch } from "react-router-dom";
import Form from "../Form/Form";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../HomePage/HomePage";
import TripContainer from "../TripContainer/TripContainer";
import ListDetails from "../ListDetails/ListDetails";
import { GetAllTrips, GET_SINGLE_TRIP, ItemsByTrip} from "../../queries";
import "./App.css";
import { useState } from "react";
import { useQuery } from "@apollo/client";

function App() {
  let [userTrips, setUserTrips] = useState([]);
  let newId
  let addUserTrip = (newTrip) => {
    setUserTrips([...userTrips, newTrip]);
  };

  let {
    data,
    refetch,
    //  error, loading
  } = GetAllTrips();




 const handleCardDetail = (id) => {
    console.log(id);
    let newId = parseInt(id)
    return newId
    // console.log(newId)
    // console.log(ItemsByTrip)
    // ItemsByTrip({
    //   variables: {
    //     tripId: 1815,
    //   }
      
      // const { data, error, loading } = useQuery(GET_SINGLE_TRIP,{
      //   variables: {
      //   tripId: id,
      // }
      // });
      // return { data, error, loading };    
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          path="/form"
          render={() => <Form addUserTrip={addUserTrip} refetch={refetch} />}
        />
        <Route
          path="/tripcontainer"
          render={() => (
            <TripContainer
              handleCardDetail={handleCardDetail}
              data={data}
              refetch={refetch}
            />
          )}
        ></Route>
        <Route
          exact
          path="/list/:id"
          render={({ match }) => (
            <ListDetails
              refetch={refetch}
              newId={newId}
              tripId={match.params.id}
            />
          )}
        />
        <Route path="*" render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
}

export default App;
