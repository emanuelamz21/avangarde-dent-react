import styles from "./SectionInformation.module.css";

function SectionInformation(props) {
  return (
    <div className={styles.informationContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>{props.header}</h1>
        <div className={styles.underline1}></div>
      </div>

      <div className={styles.detailsContainer}>
        <h3 className={styles.detailsHeader}>{props.detailsHeader}</h3>
        <div className={styles.underline2}></div>

        <p className={styles.detailsParagraph}>{props.detailsParagraph}</p>
      </div>
    </div>
  );
}

export default SectionInformation;
