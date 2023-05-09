import React from 'react';
import './Navbar.css';

export function Navbar() { // Named export
  return (
    <nav>
      <ul>
        <li>
          <a href="/deer">All Deer</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
}



