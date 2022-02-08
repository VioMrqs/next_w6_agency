import { Link } from "react-router-dom";
import Button from "../Button"
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <ul>
        <Link to="/">Accueil</Link>
      </ul>
      <ul>
        <Link to="/about">A propos</Link>
      </ul>
      <ul>
        <Link to="/works">Projets</Link>
      </ul>
      <Button
        onClick={toggleDarkMode}
        text={darkMode ? "Jour" : "Nuit"}
        className={darkMode ? "button button-light" : "button button-dark"}
      />
    </nav>
  );
};

export default Navbar;

