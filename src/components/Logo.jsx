import styles from "./Logo.module.css";

function Logo() {
  return (
    <img
      src="src/assets/logo.png"
      alt="logo-avangarde-dent"
      className={styles.logo}
    />
  );
}

export default Logo;
