import HistorySectionLeft from "./HistorySectionLeft";
import HistorySectionRight from "./HistorySectionRight";
import styles from "./HistorySection.module.css";
import Footer from "./Footer";

function HistorySection() {
  return (
    <div className={styles.background}>
      <HistorySectionLeft />
      <HistorySectionRight />
    </div>
  );
}

export default HistorySection;
