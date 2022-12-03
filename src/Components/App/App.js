
import { Route, Switch } from 'react-router-dom';
import Form from '../Form/Form';
import HomePage from '../HomePage/HomePage';
import ListContainer from '../ListContainer/ListContainer';
import ListDetails from '../ListDetails/ListDetails';
// import Nav from '../Nav/Nav';
// import Questions from '../Questions/Question';
import './App.css';

function App() {
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
          render={() => <Form />}
        />
        <Route 
          path="/trips"
          render={() => <ListContainer />}
        />
        <Route 
          path="/tripdetails"
          render={() => <ListDetails />}
        />
      </Switch>
    </div>
  );
}

export default App;
