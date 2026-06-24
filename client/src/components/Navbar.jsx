import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [darkMode, setDarkMode] =
    useState(false);

  const toggleDarkMode = () => {

    setDarkMode(!darkMode);

    document.body.classList.toggle(
      "dark-mode"
    );
  };

  return (

    <nav className="navbar">

      <div className="logo">

        🤖 AI CMS

      </div>

      <div className="nav-links">

        <Link to="/">🏠 Home</Link>

        <Link to="/login">
          🔐 Login
        </Link>

        <Link to="/register">
          📝 Register
        </Link>

        <Link to="/create-post">
          ✍️ Create Post
        </Link>

        <Link to="/dashboard">
          📊 Dashboard
        </Link>

        <button
          className="dark-btn"
          onClick={toggleDarkMode}
        >

          {darkMode
            ? "☀️"
            : "🌙"}

        </button>

      </div>

    </nav>
  );
}

export default Navbar;