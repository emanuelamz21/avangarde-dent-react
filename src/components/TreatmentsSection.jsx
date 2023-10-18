import SectionInformation from "./SectionInformation";
import TreatmentPreview from "./TreatmentPreview";
import styles from "./TreatmentsSection.module.css";

const info = {
  header: "Cele mai Calitative Tratamente din Romania",
  detailsHeader: "Serviciile Cabinetului",
  detailsParagraph:
    "Pentru a menține sănătatea dentară, oferim o gamă largă de servicii.",
  padding: "pt-32",
};

function TreatmentsList() {
  return (
    <>
      <div className={styles.background}>
        <SectionInformation
          header={info.header}
          detailsHeader={info.detailsHeader}
          detailsParagraph={info.detailsParagraph}
          padding={info.padding}
        />

        <div className={styles.treatmentsContainer}>
          <TreatmentPreview />
          <TreatmentPreview />
          <TreatmentPreview />
          <TreatmentPreview />
          <TreatmentPreview />
          <TreatmentPreview />
        </div>
      </div>
    </>
  );
}

export default TreatmentsList;
