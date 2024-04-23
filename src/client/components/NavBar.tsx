import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function NavBar(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};