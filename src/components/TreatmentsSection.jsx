import SectionInformation from "./SectionInformation";
import TreatmentPreview from "./TreatmentPreview";
import styles from "./TreatmentsSection.module.css";

const info = {
  header: "Tratamentele pe care Avangarde-Dent le oferă",
  detailsHeader: "Serviciile Cabinetului",
  detailsParagraph: "Detalii despre tratamentele oferite de echipa noastră.",
  padding: "pt-24",
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
