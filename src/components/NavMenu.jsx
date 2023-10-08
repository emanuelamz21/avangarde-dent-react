import styles from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavMenu() {
  return (
    <div className={styles.urls}>
      <NavLink to="/">
        <Logo />
      </NavLink>

      <div className="max-md:hidden">
        <ul className={styles.linkList}>
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
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
