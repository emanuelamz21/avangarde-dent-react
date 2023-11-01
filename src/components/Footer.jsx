import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3>Tratamente</h3>
        <ul>
          <NavLink to="/treatments">
            <li>Paradontologie</li>
          </NavLink>
          <NavLink to="/treatments">
            <li>Obturații fizionomice</li>
          </NavLink>
          <NavLink to="/treatments">
            <li>Coroane, Fațete dentare și Punți</li>
          </NavLink>
          <NavLink to="/treatments">
            <li>Implantologie</li>
          </NavLink>
          <NavLink to="/treatments">
            <li>Chirurgie dentoalveolară</li>
          </NavLink>
          <NavLink to="/treatments">
            <li>Profilaxie dentară si Albiri Dentare</li>
          </NavLink>
        </ul>
        <p>© Avangarde Dent 2023. Toate drepturile rezervate.</p>
      </div>
      <div className={styles.footerContainer}>
        <h3>Echipa Avangarde Dent</h3>
        <ul>
          <NavLink to="/">
            <li>Acasa</li>
          </NavLink>
          <NavLink to="/heritage">
            <li>Echipa</li>
          </NavLink>
          <NavLink to="/treatments">
            <li>Tratamente</li>
          </NavLink>
          <NavLink to="/gallery">
            <li>Galerie</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>

          <br />
        </ul>
        <img src="logo.png" alt="logo" className={styles.icon} />
      </div>
      <div className={styles.footerContainer}>
        <h3>Contact</h3>
        <ul>
          <li>Telefon</li>
          <li>+40 727 286 080</li>
          <li>+40 272 981 082</li>
          <br />
          <li>Mail:</li>
          <li>avangarde.dent@gmail.com</li>
        </ul>
        <p>Termeni si Conditii &nbsp Politica Cookies</p>
      </div>
    </div>
  );
}

export default Footer;
