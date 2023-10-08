import styles from "./TreatmentPreview.module.css";

function TreatmentPreview() {
  return (
    <div className={styles.treatmentContainer}>
      <h4>Grija Dentara</h4>

      <p className={styles.description}>
        Protezele dentare trebuie îngrijite astfel încât bacteriile și placa să
        nu se acumuleze și să cauzeze probleme de sănătate orală.
      </p>

      <button>
        <p className={styles.buttonText}>Învăță mai mult</p>
      </button>
    </div>
  );
}

export default TreatmentPreview;
