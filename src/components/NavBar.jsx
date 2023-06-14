/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false); // State to track whether the navbar is open or closed
  const ref = useRef(); // Reference to the navbar element

  useEffect(() => {
    // Event handler to close the navbar when clicking outside
    const handleClickOutside = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <>
      <nav ref={ref} className="navbar">
        <button
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? 'Close' : 'Open'}
        </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
