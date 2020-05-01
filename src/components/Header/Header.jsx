import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className={`navbar bg-primary`}>
        <div className="navbar-brand">
          <h2>
            <a href="/">Paxodev</a>
          </h2>
        </div>
        <div className="navbar-links">
          <ul className="navbar-links-items">
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
