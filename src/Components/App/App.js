
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <div className="image-container">
        <img
          className="homepage-logo"
          src="/images/baggageLogo2.png"
          alt="suitcase logo"
        />
      </div>
      <div className="button-container">
        <Link to="/">
          <button className="homepage-button">Create Trip</button>
        </Link>
        <Link to="/">
          <button className="homepage-button">Packing List</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
