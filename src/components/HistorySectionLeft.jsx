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
              Cabinetul nostru dentar, fondat în anul 2002, este un etalon al
              profesionalismului și excelenței în îngrijirea dentară. Încă de la
              început, am investit și în aparatura de radiologie dentară pentru
              a asigura confortul pacientului și precizia diagnosticului, iar
              dotarea noastră tehnică a ținut mereu pasul cu ultimele tehnologii
              apărute în stomatologie. De-a lungul anilor, ne-am angajat să ne
              perfecționăm constant tehnicile de lucru pentru a oferi
              pacienților noștri cele mai bune servicii. Suntem în permanență la
              curent cu noile inovații și le implementăm în practică pentru
              rezultate de top.
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
