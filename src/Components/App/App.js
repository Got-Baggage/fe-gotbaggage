
import { Route, Switch } from 'react-router-dom';
import Form from '../Form/Form';
import HomePage from '../HomePage/HomePage';
// import Nav from '../Nav/Nav';
// import Questions from '../Questions/Question';
import './App.css';
import { useState } from 'react'
import ListContainer from '../ListContainer/ListContainer'

function App() {
  let [userTrips, setUserTrips] = useState([])

  let addUserTrip = (newTrip) => {
    setUserTrips([...userTrips, newTrip])
  }

console.log(userTrips)
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage/>}
        />
        <Route
          path="/form"
          render={() => <Form addUserTrip={addUserTrip} />}
        />
        <Route
          path="/listcontainer"
          render={() => <ListContainer userTrips={userTrips} />}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
