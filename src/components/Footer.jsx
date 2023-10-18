import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3>Tratamente</h3>
        <ul>
          <li>Grija Dentara</li>
          <li>Implant Dentar</li>
          <li>Stomatologie Generala</li>
          <li>Extractii Dentare</li>
          <li>Stomatologie Restaurative</li>
          <li>Parodontologie</li>
        </ul>
        <p>© Avangarde Dent 2023. Toate drepturile rezervate.</p>
      </div>
      <div className={styles.footerContainer}>
        <h3>Echipa Avangarde Dent</h3>
        <ul>
          <li>Acasa</li>
          <li>Echipa</li>
          <li>Tratamente</li>
          <li>Galerie</li>
          <li>Contact</li>
          <br />
        </ul>
        <img src="src\assets\logo.png" alt="logo" className={styles.icon} />
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
