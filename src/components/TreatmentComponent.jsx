import styles from "./TreatmentComponent.module.css";

function TreatmentComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <h6>Paradontologie</h6>
          <div className={styles.underline}></div>
          <ul>
            <li>
              Consultația și evaluarea parodontală prin parodontometrie și
              determinarea unor indici ne ajută să stabilim cauza afectării
              gingiilor, stadiul bolii și prognosticul.
            </li>
            <li>Tratamentul gingivitelor în funcție de factorul cauzal.</li>
            <li>
              Dacă sunt prezente rezorbții osoase, se fac operații cu lambou cu
              adiție de biomateriale pentru...
            </li>
          </ul>
        </div>
      </div>

      <img
        src="treatment.png"
        alt="treament-photo"
        className={styles.treatmentImage}
      />
    </div>
  );
}

export default TreatmentComponent;
