import ContactComponent from "../components/ContactComponent";
import PageNav from "../components/PageNav";
import SectionInformation from "../components/SectionInformation";

const info = {
  header: "Contact - Avangarde Dent",
  detailsHeader: "Contact Cabinet",
  detailsParagraph:
    "Suntem aici pentru dumneavoastră. Contactați-ne acum și descoperiți unde suntem!",
  padding: "pt-12",
};

function Contact() {
  return (
    <>
      <PageNav />
      <SectionInformation
        header={info.header}
        detailsHeader={info.detailsHeader}
        detailsParagraph={info.detailsParagraph}
        padding={info.padding}
      />
      <ContactComponent />
    </>
  );
}

export default Contact;
