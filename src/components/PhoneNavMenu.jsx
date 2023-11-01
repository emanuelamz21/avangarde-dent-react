import styles from "./PhoneNavMenu.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

PhoneNavMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

function PhoneNavMenu(props) {
  return (
    <>
      <div
        className={`${styles.responsiveMenu} ${
          props.open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul>
          <li className={styles.link}>
            <NavLink to="/">Acasa</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/treatments">Tratamente</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/heritage">Echipa</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/gallery">Galerie</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {/* <li className={styles.link}>
            <LanguageSelector />
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default PhoneNavMenu;
