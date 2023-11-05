import { useState } from "react";
import styles from "./TreatmentComponent.module.css";

function TreatmentComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === 0 ? styles.active : ""}`}
          onClick={() => handleTabClick(0)}
        >
          <h4>Paradontologie</h4>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 1 ? styles.active : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <h4>Obturații fizionomice</h4>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 2 ? styles.active : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <h4>Coroane, Fațete dentare și Punți</h4>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 3 ? styles.active : ""}`}
          onClick={() => handleTabClick(3)}
        >
          <h4>Implantologie</h4>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 4 ? styles.active : ""}`}
          onClick={() => handleTabClick(4)}
        >
          <h4>Chirurgie dentoalveolară</h4>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 5 ? styles.active : ""}`}
          onClick={() => handleTabClick(5)}
        >
          <h4>Profilaxie dentară si Albiri Dentare</h4>
        </div>
      </div>

      <div className={styles.content}>
        {activeTab === 0 && (
          <div className={styles.treatmentContainer}>
            <h3>Paradontologie</h3>
            <p>
              <li>
                Consultația și evaluarea parodontală prin parodontometrie și
                determinarea unor indicii ne ajută să stabilim cauza afectării
                gingiilor, stadiul bolii și prognosticul.
              </li>
              <li>Tratamentul gingivitelor în funcție de factorul cauzal.</li>
              <li>
                Dacă sunt prezente rezorbții osoase, se fac operații cu lambou
                cu adiție de biomateriale pentru recuperarea dinților.
              </li>
              <li>
                În cazul unor retracții gingivale, se repoziționează gingia și
                se fac grefe conjunctive.
              </li>
              <li>
                În paralel cu tratamentele parodontale se face și terapie laser
                pentru reducerea încărcării bacteriene, biostimulare și pentru o
                recuperare mai rapidă după intervențiile chirurgicale.
              </li>
            </p>
          </div>
        )}
        {activeTab === 1 && (
          <div className={styles.treatmentContainer}>
            <h3>Obturații fizionomice</h3>
            <p>
              <li>
                Folosim materiale compozite cu nanoumplutura ceramică care au
                transluciditatea dinților naturali, rezistență mare și care
                nu-și modifică culoarea o perioadă foarte lungă de timp.
              </li>
              <li>
                Pentru o mai bună rezistență mecanică a restaurărilor se pot
                aplica pivoti de fibră de sticlă.
              </li>
              <li>
                Incrustațiile din ceramică presată sunt o alternativă de lux la
                obturațiile clasice de compozit.
              </li>
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div className={styles.treatmentContainer}>
            <h3>Coroane, Fațete dentare și Punți</h3>
            <p>
              <li>
                Pentru lucrările executate în cabinetul nostru folosim ceramică
                de cea mai bună calitate care, prin nuanțele și transluciditatea
                sa, permite obținerea unor piese protetice cu estetică
                deosebită.
              </li>
              <li>
                Puteți alege ceramică integrală, ceramică pe zirconiu, total
                zirconiu sau lucrări metalo-ceramice.
              </li>
              <li>
                Pentru obținerea unor lucrări foarte precise, se folosește
                tehnologie digitală: prin scanare intraorala în cabinet,
                printare 3D și tehnologia CAD-CAM.
              </li>
              <li>
                Când nu doriți implanturi dentare, puteți opta pentru o proteză
                mobilă.
              </li>
              <li>
                Protezele scheletate, prin sistemele de prindere tip capse sau
                culise, au o stabilitate foarte bună, iar confortul masticator
                este similar cu al dinților naturali.
              </li>
              <li>
                Protezele elastice sau acrilice clasice vă pot reda integritatea
                arcadelor dentare fără a mai fi necesară slefuirea dinților.
              </li>
            </p>
          </div>
        )}
        {activeTab === 3 && (
          <div className={styles.treatmentContainer}>
            <h3>Implantologie</h3>
            <p>
              <li>
                Implanturile unidentare, punțile fixe pe 2-6 implanturi sau
                protezele mobilizabile pe 4 implanturi asigură restaurări
                dentare stabile, cu un confort masticator similar cu al dinților
                naturali.
              </li>

              <li>
                Adițiile osoase, ridicările de sinus se realizează cu
                biomateriale de cea mai bună calitate, care asigură o
                biointegrare superioară.
              </li>

              <li>
                Lucrările provizorii aplicate în aceeași ședință cu
                implanturile, acolo unde este posibil, vă asigură o estetică
                corespunzătoare și posibilitatea masticației în perioada de
                integrare a implanturilor, până la lucrările finale.
              </li>
            </p>
          </div>
        )}
        {activeTab === 4 && (
          <div className={styles.treatmentContainer}>
            <h3>Chirurgie dentoalveolară</h3>
            <p>
              <li>Extracții dentare simple sau extracții de dinți incluși</li>
              <li>
                Rezecții apicale, îndepărtare chisturi, frenectomii și
                vestibuloplastii
              </li>
              <li>
                Regularizări de creastă alveolară pentru o mai bună stabilitate
                a protezelor.
              </li>
              <li>
                Intervențiile chirurgicale clasice sunt mai ușoare prin
                utilizarea laserului și a piezotomului.
              </li>
              <li>
                Folosim tehnicile PRF pentru a îmbunătăți vindecarea după
                intervențiile chirurgicale.
              </li>
            </p>
          </div>
        )}
        {activeTab === 5 && (
          <div className={styles.treatmentContainer}>
            <h3>Profilaxie dentară si Albiri Dentare</h3>
            <p>
              <li>
                Detartrajele supra și subgingivale urmate de periaj profesional
                și Prophy jet vă asigură sănătatea gingivală și îndepărtarea
                colorațiilor inestetice de pe dinți.
              </li>
              <li>
                Profilaxia la copii prin controale periodice, instrucțiuni de
                periaj dentar, fluorizări și sigilări pregătesc un adult cu o
                dentiție sănătoasă.
              </li>
              <li>
                Utilizarea laserului în procedura de albire crește eficiența și
                scurtează timpul de acțiune al substanțelor de albire.
              </li>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TreatmentComponent;
