import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  return (
    <nav>
      <h1>My Website</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/project'>Projects</Link>
      </div>
    </nav>
  );
}
