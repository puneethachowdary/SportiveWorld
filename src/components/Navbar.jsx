import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Cricket", link: "/cricket" },
    { name: "Formula 1", link: "/formula1" },
    { name: "Kabaddi", link: "/kabaddi" },
    { name: "Players", link: "/players" },
    { name: "Tournaments", link: "/tournaments" },
    { name: "Records", link: "/records" },
    { name: "About", link: "/about" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
  <img src="/World.png" alt="Sportive World" />
</NavLink>

        {/* Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              end={item.link === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="theme-toggle-wrapper">
          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        {/* Mobile Menu */}
        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;