
import { Route, Switch } from 'react-router-dom';
import Form from '../Form/Form';
import HomePage from '../HomePage/HomePage';
import ListContainer from '../ListContainer/ListContainer';
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
          path="/listcontainer"
          render={() => <ListContainer />}
        />
      </Switch>
    </div>
  );
}

export default App;
