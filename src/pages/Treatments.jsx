import PageNav from "../components/PageNav";
import SectionInformation from "../components/SectionInformation";
import TreatmentComponent from "../components/TreatmentComponent";
import styles from "./Treatments.module.css";

const info = {
  header: "Tratamentele Avangarde Dent",
  detailsHeader: "Serviciile Cabinetului",
  detailsParagraph:
    "Toată priceperea, experiența și dăruirea noastră pentru sănătatea orală a pacienților noștri.",
  padding: "pt-12 ",
};

function Treatments() {
  return (
    <>
      <PageNav />
      <SectionInformation
        header={info.header}
        detailsHeader={info.detailsHeader}
        detailsParagraph={info.detailsParagraph}
        padding={info.padding}
      />

      <div className={styles.container}>
        <TreatmentComponent />
      </div>
    </>
  );
}

export default Treatments;
