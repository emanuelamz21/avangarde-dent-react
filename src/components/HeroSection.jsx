import styles from "./HeroSection.module.css";
import PageNav from "./PageNav";

function HeroSection() {
  return (
    <>
      <PageNav />
      <div className={styles.background}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>
            Verifică-ți Sănătatea Dentară Astăzi.
          </h1>
          <br />
          <br />
          <p className={styles.paragraph}>
            Cu tehnologie de ultimă generație și experiență vastă, suntem
            specialiștii în îngrijirea dentară.
          </p>
          <br />
          <p className={styles.paragraph}>
            Te așteptăm pentru a-ți verifica sănătatea dentară astăzi, pentru un
            zâmbet sănătos și strălucitor.
          </p>
          <br />
          <br />
          <button className={styles.contactButton}>Contacteaza-ne</button>
        </div>

        <div className={styles.dentistPhotoDiv}>
          <img
            className={styles.dentistPhoto}
            src="hero-section-dentist.png"
            alt="dentist"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
