import React from 'react';
import '../styles/global.css';
import Navbar from './NavBar';

export default function Layout({ pageTitle, children }) {
  return (
    <div className='layout'>
      <Navbar />
      <h1>{pageTitle}</h1>
      <div className='content'>{children}</div>
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}
