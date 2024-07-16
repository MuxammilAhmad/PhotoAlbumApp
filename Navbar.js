import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {location.pathname !== '/' && (
          <li>
            <button className='homee'><Link to="/">Home</Link></button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;