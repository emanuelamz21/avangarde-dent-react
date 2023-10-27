import styles from "./HistorySectionRight.module.css";

function HistorySectionRight() {
  return (
    <div className={styles.background}>
      <div className={styles.flexContainer}>
        <img
          src="poza-cabinet.jpg"
          alt="poza-cabinet"
          className={`${styles.historyImage} ${styles.firstImage}`}
        />
        <div className={styles.firstSection}>
          <div className={styles.textContainer}>
            <h3>Inceputul Avangarde Dent </h3>
            <br />
            <p>
              Am reușit să menținem standardele de calitate în domeniu și suntem
              mândri să fim un reper în comunitatea noastră medicală. Prin
              îmbinarea tratamentelor stomatologice uzale cu tratamentele
              parodontale primare și chirurgicale, am oferit un plus de sănătate
              orală pacienților. Echipa noastră de specialiști este dedicată și
              bine pregătită, având cunoștințe profunde în utilizarea
              tehnologiei de vârf la cel mai înalt nivel. Ne străduim să oferim
              fiecărui pacient o experiență pozitivă în cabinetul nostru,
              asigurându-ne că toate nevoile lor dentare sunt îndeplinite.
            </p>
          </div>
        </div>
        <img
          src="poza-cabinet.jpg"
          alt="poza-cabinet"
          className={`${styles.historyImage} ${styles.secondImage}`}
        />
      </div>
    </div>
  );
}

export default HistorySectionRight;
