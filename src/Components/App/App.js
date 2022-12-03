
import { Route, Switch } from 'react-router-dom';
import Form from '../Form/Form';
import HomePage from '../HomePage/HomePage';
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
      </Switch>
    </div>
  );
}

export default App;
