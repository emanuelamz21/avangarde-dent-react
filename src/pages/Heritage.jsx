import DentistCard from "../components/DentistCard";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import styles from "./Heritage.module.css";

function Heritage() {
  return (
    <>
      <PageNav />
      <div className={styles.textContainer}>
        <p>
          Echipa noastră din cadrul cabinetului dentar este alcătuită dintr-un
          grup de profesioniști dedicați și extrem de experimentați, care au
          adunat o bogată experiență în domeniul stomatologiei de-a lungul
          anilor. Cu trei medici stomatologi și o asistentă cu experiență,
          suntem aici pentru a vă oferi cea mai înaltă calitate în îngrijirea
          orală și pentru a vă ajuta să zâmbiți cu încredere.
        </p>
        <br />
        <p>
          Fiecare membru al echipei noastre aduce cu sine un nivel ridicat de
          competență, cunoștințe actualizate și o pasiune profundă pentru
          servirea pacienților. Suntem mândri să oferim tratamente dentare
          personalizate, îmbunătățind sănătatea orală și estetica zâmbetului
          dumneavoastră cu cele mai noi tehnologii și metode disponibile în
          stomatologie.
        </p>
        <br />
        <p>
          Pregătiți-vă să fiți în mâini sigure și să experimentați cea mai bună
          îngrijire stomatologică de la echipa noastră dedicată și
          profesionistă.
        </p>
      </div>

      <div className={styles.dentistsContainer}>
        <DentistCard />
        <DentistCard />
        <DentistCard />
      </div>

      <div className={styles.textContainer}>
        <p>
          Elena Mihai este inima și sufletul cabinetului nostru stomatologic. Cu
          o carieră dedicată îngrijirii pacienților și o experiență bogată de
          peste 12 ani în domeniul asistenței stomatologice, Elena este un
          membru esențial al echipei noastre.
        </p>
        <br />
        <p>
          Cu un zâmbet cald și o abordare atentă, Elena face ca fiecare vizită
          la cabinetul nostru să fie o experiență plăcută pentru pacienți.
        </p>
      </div>

      <div className={styles.mainDentistSection}>
        <DentistCard />

        <div className={styles.dentistText}>
          <p>
            <h3>Experiență Bogată: </h3>
            <br />
            Cu mai mult de un deceniu de experiență în asistența stomatologică,
            Elena aduce o expertiză valoroasă în desfășurarea eficientă a
            procedurilor stomatologice.
          </p>
          <br />
          <p>
            <h3>Empatie și Atentie:</h3>
            <br />
            Elena este cunoscută pentru capacitatea sa de a comunica eficient cu
            pacienții și de a le oferi suport emoțional în timpul tratamentelor.
            Ea este mereu atentă la nevoile și preocupările pacienților și face
            tot posibilul pentru a le oferi confort și liniște.
          </p>
          <br />
          <p>
            <h3>Calificare Tehnică:</h3>
            <br />
            Elena Mihai este bine pregătită în toate aspectele asistenței
            stomatologice, de la pregătirea echipamentului la asistența
            medicilor în timpul procedurilor. Ea se asigură că totul este în
            ordine pentru ca medicii să poată oferi cea mai bună îngrijire
            posibilă.
          </p>
          <br />
          <p>
            <h3>Educație Continuă:</h3>
            <br />
            Elena este un adept al învățării continue și rămâne mereu la curent
            cu cele mai noi tehnologii și proceduri din domeniul stomatologiei.
            Această sete de cunoaștere o ajută să ofere pacienților noștri cele
            mai bune servicii posibile.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Heritage;
