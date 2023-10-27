import styles from "./DentistCard.module.css";

function DentistCard(props) {
  return (
    <div className={styles.dentistCard}>
      <img src="1.png" alt="dentist-photo" className={styles.dentistPhoto} />
      <h3>{props.numeDentist}</h3>
      <br />
      <p>{props.pDentistScurt}</p>
      <br />
      <p>{props.pDentistLung}</p>
    </div>
  );
}

export default DentistCard;
