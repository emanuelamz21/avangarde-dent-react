import { useState } from "react";
import styles from "./LanguageSelector.module.css";

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <button onClick={handleOpen}>
          {language ? `${language}` : "Romanian"}
        </button>
        {open ? (
          <ul className={styles.dropdown}>
            <li>
              <button onClick={handleSelect} value="Romanian">
                Romanian
              </button>
            </li>
            <li>
              <button onClick={handleSelect} value="English">
                English
              </button>
            </li>
            <li>
              <button onClick={handleSelect} value="French">
                French
              </button>
            </li>
            <li>
              <button onClick={handleSelect} value="Italian">
                Italian
              </button>
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default LanguageSelector;
