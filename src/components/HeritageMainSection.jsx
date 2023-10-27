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

const dentist1 = {
  numeDentist: "Dr. Magdalena Mironiuc Cureu",
  pDentistLung:
    "Experiența de 17 ani ca și cadru didactic la Catedra de Parodontologie a Facultății de Medicină Dentară, UMF `Carol Davila` București, prin lucrările științifice elaborate și activitatea didactică cu studenții, a fost benefică pentru perfecționarea cunoștințelor, menținerea pasului cu cercetările științifice și păstrarea contactului cu generațiile tinere.",
  pDentistScurt:
    "Doctor în Științe Medicale, cu teza de doctorat în Parodontologie, Medic primar în Stomatologie Generală, cu supraspecializare în Parodontologie și Medic Specialist în Chirurgie Dento-Alveolară.",
};

const dentist2 = {
  numeDentist: "Dr. Calin Ioan Costache",
  pDentistLung:
    "El este angajat în dezvoltare profesională continuă, participând la cursuri de Reabilitare Orală, Estetică Dentară, Implantologie și Terapie Laser, el oferă tratamente avansate și personalizate. Cu accent pe satisfacția pacienților, este o alegere de încredere pentru servicii stomatologice de înaltă calitate.",
  pDentistScurt:
    "Dr. Calin Ioan-Costache, Medic Specialist în Stomatologie Generală, aduce o abordare blândă și prietenoasă la tratamentelor dentare. Atitudinea sa face ca vizitele la cabinetul său să fie lipsite de stres.",
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
        <DentistCard
          numeDentist={dentist1.numeDentist}
          pDentistScurt={dentist1.pDentistScurt}
          pDentistLung={dentist1.pDentistLung}
        />
        <DentistCard
          numeDentist={dentist2.numeDentist}
          pDentistScurt={dentist2.pDentistScurt}
          pDentistLung={dentist2.pDentistLung}
        />
      </div>
    </div>
  );
}

export default HeritageMainSection;
