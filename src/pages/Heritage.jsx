import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import styles from "./Heritage.module.css";
import DentistCard from "../components/DentistCard";

const dentist1 = {
  numeDentist: "Dr. Magdalena Mironiuc Cureu",
  pDentistLung:
    "Experiența de 17 ani ca și cadru didactic la Catedra de Parodontologie a Facultății de Medicină Dentară, UMF `Carol Davila` București, prin lucrările științifice elaborate și activitatea didactică cu studenții, a fost benefică pentru perfecționarea cunoștințelor, menținerea pasului cu cercetările științifice și păstrarea contactului cu generațiile tinere.",
  pDentistScurt:
    "Doctor în Științe Medicale, cu teza de doctorat în Parodontologie, Medic primar în Stomatologie Generală, cu supraspecializare în Parodontologie și Medic Specialist în Chirurgie Dento-Alveolară.",
  poza: "poza-magdalena.png",
};

const dentist2 = {
  numeDentist: "Dr. Calin Ioan Costache",
  pDentistLung:
    "El este angajat în dezvoltare profesională continuă, participând la cursuri de Reabilitare Orală, Estetică Dentară, Implantologie și Terapie Laser, el oferă tratamente avansate și personalizate. Cu accent pe satisfacția pacienților, este o alegere de încredere pentru servicii stomatologice de înaltă calitate.",
  pDentistScurt:
    "Dr. Calin Ioan-Costache, Medic Specialist în Stomatologie Generală, aduce o abordare blândă și prietenoasă la tratamentelor dentare. Atitudinea sa face ca vizitele la cabinetul său să fie lipsite de stres.",
  poza: "poza-magdalena.png",
};

const dentist3 = {
  numeDentist: "Asistenta Mihaela Cristina Oprea",
  pDentistScurt:
    "Mihaela aduce o experiență de peste doua decenii în asistența stomatologică in echipa noastră. Cu abilitățile și experiența sa, contribuie la desfășurarea eficientă a procedurilor stomatologice și la oferirea unei îngrijiri de calitate pacienților noștri. Ea se remarcă prin abilitatea sa de a comunica eficient cu pacienții și de a le oferi sprijin emoțional, fiind mereu atentă la nevoile și preocupările lor.",
  pDentistLung:
    "Pe lângă experiența sa, Mihaela are o sete constantă de cunoaștere și educație continuă în domeniul stomatologiei. Este la curent cu cele mai recente tehnologii și proceduri stomatologice pentru a asigura că pacienții noștri beneficiază de cele mai bune servicii posibile",
  poza: "poza-magdalena.png",
};

const dentist4 = {
  numeDentist: "Asistenta Madalina Elena Dumitru",
  pDentistScurt:
    "Mihaela aduce o experiență de peste doua decenii în asistența stomatologică in echipa noastră. Cu abilitățile și experiența sa, contribuie la desfășurarea eficientă a procedurilor stomatologice și la oferirea unei îngrijiri de calitate pacienților noștri. Ea se remarcă prin abilitatea sa de a comunica eficient cu pacienții și de a le oferi sprijin emoțional, fiind mereu atentă la nevoile și preocupările lor.",
  pDentistLung:
    "Pentru a-și îmbunătăți cunoștințele în medicină, Madalina a ales să lucreze ca voluntar pe o ambulanță, unde a învățat aspecte esențiale despre îngrijirea medicală de urgență. Cu entuziasmul și dorința ei de a se dezvolta, Madalina este o resursă valoroasă în echipa noastră și o viitoare expertă în asistența stomatologică.",
  poza: "poza-magdalena.png",
};

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
        <DentistCard
          numeDentist={dentist1.numeDentist}
          pDentistScurt={dentist1.pDentistScurt}
          pDentistLung={dentist1.pDentistLung}
          poza={dentist1.poza}
        />
        <DentistCard
          numeDentist={dentist2.numeDentist}
          pDentistScurt={dentist2.pDentistScurt}
          pDentistLung={dentist2.pDentistLung}
          poza={dentist2.poza}
        />
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
        <DentistCard
          numeDentist={dentist3.numeDentist}
          pDentistScurt={dentist3.pDentistScurt}
          pDentistLung={dentist3.pDentistLung}
          poza={dentist3.poza}
        />
        <DentistCard
          numeDentist={dentist4.numeDentist}
          pDentistScurt={dentist4.pDentistScurt}
          pDentistLung={dentist4.pDentistLung}
          poza={dentist4.poza}
        />
      </div>

      <Footer />
    </>
  );
}

export default Heritage;
