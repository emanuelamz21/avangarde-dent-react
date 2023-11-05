import styles from "./PageNav.module.css";
import NavMenu from "./NavMenu";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";
import PhoneNavMenu from "./PhoneNavMenu";

function PageNav() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className={styles.nav}>
        <NavMenu />

        {/* <div className="max-md:hidden">
          <LanguageSelector /> 
        </div> */}

        <svg
          className={styles.dropdownIcon}
          onClick={handleOpen}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </nav>

      <PhoneNavMenu open={open} />
    </>
  );
}

export default PageNav;
