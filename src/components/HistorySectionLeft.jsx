import styles from "./HistorySectionLeft.module.css";
import SectionInformation from "./SectionInformation";

const info = {
  header: "Istoria Avangarde Dent",
  detailsHeader: "O Evoluție a Excelenței Dentare",
  detailsParagraph:
    "Istoria noastră reflectă o călătorie de peste decenii în oferirea excelenței dentare.",
  padding: "pt-32",
};

function HistorySectionLeft() {
  return (
    <div className={styles.background}>
      <SectionInformation
        header={info.header}
        detailsHeader={info.detailsHeader}
        detailsParagraph={info.detailsParagraph}
        padding={info.padding}
      />

      <div className={styles.flexContainer}>
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
          src="poza-cabinet.jpg"
          alt="poza-cabinet"
          className={styles.historyImage}
        />
      </div>
    </div>
  );
}

export default HistorySectionLeft;
