import ContactComponent from "../components/ContactComponent";
import PageNav from "../components/PageNav";
import SectionInformation from "../components/SectionInformation";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";

const info = {
  header: "Contact - Avangarde Dent",
  detailsHeader: "Contact Cabinet",
  detailsParagraph:
    "Suntem aici pentru dumneavoastră. Contactați-ne acum și descoperiți unde suntem!",
  padding: "pt-12 ",
};

function Contact() {
  return (
    <div className={styles.background}>
      <PageNav />
      <SectionInformation
        header={info.header}
        detailsHeader={info.detailsHeader}
        detailsParagraph={info.detailsParagraph}
        padding={info.padding}
      />
      <ContactComponent />
      <Footer />
    </div>
  );
}

export default Contact;
