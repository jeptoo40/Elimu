import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // hamburger
  const [showDropdown, setShowDropdown] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>

        {/* ITEM LIST with popup */}
        <li className="menu-item">
          <span onClick={toggleDropdown} className="menu-title">
            ITEM LIST
          </span>

          {showDropdown && (
            <ul className="dropdown">
              <li>
                <NavLink to="/Articles">Articles</NavLink>
              </li>
              <li>
                <NavLink to="/Storybooks">Story Books</NavLink>
              </li>
              <li>
                <NavLink to="/Setbooks">Set Books</NavLink>
              </li>
            </ul>
          )}
        </li>

        <li><NavLink to="/books">BOOKS</NavLink></li>
        <li><NavLink to="/materials">MATERIALS</NavLink></li>
        <li><NavLink to="/Arttools">ART TOOLS</NavLink></li>
        <li><NavLink to="/Techtools">TECH TOOLS</NavLink></li>
        <li><NavLink to="/Purchase">TOOLS TO SHOP</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;