import { Link } from "react-router-dom";
import Button from "../Button"
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
  <div className="navbar">
    <div className="navbar-right" >
      <ul>
        <Link to="/">Accueil</Link>
      </ul>
      <ul>
        <Link to="/about">A propos</Link>
      </ul>
      <ul>
        <Link to="/works">Projets</Link>
      </ul>
    </div>
    <div className="navbar-left">
      <ul>
        <Button
          onClick={toggleDarkMode}
          text={darkMode ? "Jour" : "Nuit"}
          className={darkMode ? "button button-light" : "button button-dark"}
        />
      </ul>
    </div>
  </div>
  );
};

export default Navbar;

