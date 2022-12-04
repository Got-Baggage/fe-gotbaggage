
import { Route, Switch } from 'react-router-dom';
import Form from '../Form/Form';
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../HomePage/HomePage';
import TripContainer from '../TripContainer/TripContainer';
import ListDetails from '../ListDetails/ListDetails';
// import Nav from '../Nav/Nav';
// import Questions from '../Questions/Question';
import './App.css';
import { useState } from 'react'

function App() {
  let [userTrips, setUserTrips] = useState([])

  let addUserTrip = (newTrip) => {
    setUserTrips([...userTrips, newTrip])
  }



  return (
    <div className="App">
      <Switch>
        <Route
          exact path="/"
          render={() => <HomePage/>}
        />
        <Route
          path="/form"
          render={() => <Form addUserTrip={addUserTrip} />}
        />
        <Route
          path="/tripcontainer"
          render={() => <TripContainer userTrips={userTrips} />}>
        </Route>
        <Route 
          exact path="/list/:id"
          render={({ match }) => <ListDetails tripId={match.params.id}/>}
        />
        <Route
          path="*"
          render={() => <ErrorPage />}
        />
      </Switch>
    </div>
  );
}

export default App;
