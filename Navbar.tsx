import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import cartImage from '../images/cart.png'; // Update the path if necessary

interface NavbarProps {
  cartCount: number;
  onSearch: (query: string) => void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onSearch, darkMode, setDarkMode }) => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.querySelector('.app-container')?.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className={`navbar-logo ${darkMode ? 'dark-mode' : ''}`}>Kalisa shop</Link>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className={`navbar-search ${darkMode ? 'dark-mode' : ''}`}
        />
        <div className={`navbar-links ${menuActive ? 'active' : ''}`}>
          <Link to="/favorites" className="navbar-link">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/profile" className="navbar-link">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/cart" className="navbar-link">
            <img src={cartImage} alt="Cart" className="cart-icon" />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
        <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
