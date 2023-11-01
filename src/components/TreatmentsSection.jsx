import SectionInformation from "./SectionInformation";
import TreatmentPreview from "./TreatmentPreview";
import styles from "./TreatmentsSection.module.css";

const info = {
  header: "Tratamentele pe care Avangarde-Dent le oferă",
  detailsHeader: "Serviciile Cabinetului",
  detailsParagraph: "Detalii despre tratamentele oferite de echipa noastră.",
  padding: "pt-24",
};

const treatment1 = {
  title: "Paradontologie",
  description:
    "Consultația și evaluarea parodontală prin parodontometrie și determinarea unor indicii ne ajută să stabilim cauza afectării gingiilor, stadiul bolii și prognosticul.",
};

const treatment2 = {
  title: "Obturații fizionomice",
  description:
    "Obturațiile fizionomice sunt realizate din materiale de ultimă generație, care imită culoarea și forma dinților naturali.",
};

const treatment3 = {
  title: "Coroane, Fațete dentare și Punți",
  description:
    "Coroanele dentare sunt realizate din materiale de ultimă generație, care imită culoarea și forma dinților naturali.",
};

const treatment4 = {
  title: "Implantologie",
  description:
    "Implanturile dentare sunt realizate din materiale de ultimă generație, care imită culoarea și forma dinților naturali.",
};

const treatment5 = {
  title: "Chirurgie dentoalveolară",
  description:
    "Chirurgia dentoalveolară este realizată cu materiale de ultimă generație, care imită culoarea și forma dinților naturali.",
};

const treatment6 = {
  title: "Profilaxie dentară si Albiri Dentare",
  description:
    "Profilaxia dentară este realizată cu materiale de ultimă generație, care imită culoarea și forma dinților naturali.",
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
          <TreatmentPreview
            title={treatment1.title}
            treatmentDescription={treatment1.description}
          />
          <TreatmentPreview
            title={treatment2.title}
            treatmentDescription={treatment2.description}
          />
          <TreatmentPreview
            title={treatment3.title}
            treatmentDescription={treatment3.description}
          />
          <TreatmentPreview
            title={treatment4.title}
            treatmentDescription={treatment4.description}
          />
          <TreatmentPreview
            title={treatment5.title}
            treatmentDescription={treatment5.description}
          />
          <TreatmentPreview
            title={treatment6.title}
            treatmentDescription={treatment6.description}
          />
        </div>
      </div>
    </>
  );
}

export default TreatmentsList;
