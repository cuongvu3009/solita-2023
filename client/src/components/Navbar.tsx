import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title'>
        <h3>Solita Challenge 2023</h3>
      </div>

      <div className='buttons'>
        <button>Show stations</button>
        <button>Show journeys record</button>
      </div>
    </div>
  );
};

export default Navbar;
