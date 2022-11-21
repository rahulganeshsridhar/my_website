import { Link } from 'gatsby';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Sorry, that page doesn't exist (yet)!</p>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default NotFound;
