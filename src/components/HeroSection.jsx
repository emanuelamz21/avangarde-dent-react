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
            Sănătatea cavității bucale este esențială pentru viața socială și
            cariera profesională, având un impact major asupra stării generale a
            organismului.
          </p>
          <br />
          <p className={styles.paragraph}>
            Cu tehnologie avansată și experiență vastă, oferim îngrijire dentară
            de cea mai înaltă calitate, într-o continuă dezvoltare profesională
            pentru a asigura cele mai bune soluții de tratament.
          </p>
          <br />
          <br />
          <button className={styles.contactButton}>Contactează-ne</button>
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
