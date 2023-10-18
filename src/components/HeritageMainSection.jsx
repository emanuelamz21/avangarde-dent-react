import DentistCard from "./DentistCard";
import styles from "./HeritageMainSection.module.css";
import SectionInformation from "./SectionInformation";

const info = {
  header: "Echipa Avangarde Dent",
  detailsHeader: "Echipa Noastra",
  detailsParagraph:
    "Experiență Profesională și Pasiune pentru Zâmbete Frumoase.",
  padding: "pt-32",
};

function HeritageMainSection() {
  return (
    <div className={styles.background}>
      <SectionInformation
        header={info.header}
        detailsHeader={info.detailsHeader}
        detailsParagraph={info.detailsParagraph}
        padding={info.padding}
      />

      <div className={styles.dentistsContainer}>
        <DentistCard />
        <DentistCard />
        <DentistCard />
      </div>
    </div>
  );
}

export default HeritageMainSection;
