import styles from "./DentistCard.module.css";

function DentistCard() {
  return (
    <div className={styles.dentistCard}>
      <img
        src="src\assets\1.png"
        alt="dentist-photo"
        className={styles.dentistPhoto}
      />
      <h3>Doctor Matei Popescu</h3>
      <br />
      <p>
        Dr. Matei Popescu este un dentist cu totul special. Cu un zâmbet
        călduros și o atitudine blândă, el transformă temutele programări la
        dentist în experiențe plăcute.
      </p>
      <br />
      <p>
        Într-o locație pitorească, în mijlocul unui cartier suburban primitor,
        cabinetul stomatologic al Dr. Radu emană confort și liniște. Odată ce
        pășești înăuntru, sunetele melodiei clasice te întâmpină cu blândețe,
        iar mirosul delicat de lavandă îți inundă simțurile, alungând
        instantaneu orice anxietate
      </p>
    </div>
  );
}

export default DentistCard;
