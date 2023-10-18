import styles from "./HistorySectionRight.module.css";

function HistorySectionRight() {
  return (
    <div className={styles.background}>
      <div className={styles.flexContainer}>
        <img
          src="/src\assets\poza-cabinet.jpg"
          alt="poza-cabinet"
          className={`${styles.historyImage} ${styles.firstImage}`}
        />
        <div className={styles.firstSection}>
          <div className={styles.textContainer}>
            <h3>Inceputul Avangarde Dent </h3>
            <br />
            <p>
              Cu o istorie bogată și o tradiție îndelungată în îngrijirea
              dentară de înaltă calitate, Avangarde Dent este o clinică dentară
              de încredere și respectată în comunitatea noastră. Fondată acum
              mai bine de două decenii, povestea noastră a început cu un
              angajament ferm de a oferi servicii stomatologice de excepție și o
              atenție personalizată fiecărui pacient.
            </p>
          </div>
        </div>
        <img
          src="/src\assets\poza-cabinet.jpg"
          alt="poza-cabinet"
          className={`${styles.historyImage} ${styles.secondImage}`}
        />
      </div>
    </div>
  );
}

export default HistorySectionRight;
