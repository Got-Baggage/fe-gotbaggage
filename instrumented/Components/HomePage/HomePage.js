import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='homepage-container'>
      <div className="image-container">
        <img
          className="homepage-logo"
          src="/images/baggageLogo2.png"
          alt="suitcase logo"
        />
      </div>
      <div className="button-container">
        <Link to="/form">
          <button className="homepage-button">Create Trip</button>
        </Link>
        <Link to="/tripcontainer">
          <button className="homepage-button">Packing List</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage
