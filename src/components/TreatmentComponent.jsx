import styles from "./TreatmentComponent.module.css";

function TreatmentComponent() {
  return (
    <div className={styles.container}>
      {/* <div>
        <p>
          Clinica noastră este un centru de excelență în îngrijirea dentară,
          oferind o gamă variată de servicii pentru a satisface nevoile și
          dorințele pacienților noștri. Cu o echipă de specialiști cu experiență
          și pasionați de sănătatea dentară, suntem dedicați să vă oferim cele
          mai bune soluții pentru un zâmbet sănătos și frumos.
        </p>
        <br />
        <p>
          În cadrul clinicii noastre, punem accentul pe parodontologie,
          tratamentul gingiilor și restabilirea sănătății acestora. Prin metode
          precum parodontometria, tratamentele personalizate pentru gingivite și
          intervențiile chirurgicale pentru recuperarea dinților, vă asigurăm un
          suport cuprinzător pentru sănătatea gingivală.
        </p>
        <br />
        <p>
          Pentru îmbunătățirea esteticii dentare, oferim obturații fizionomice
          de înaltă calitate, incrustații din ceramică presată și coroane
          dentare, toate realizate cu materiale durabile și naturale, astfel
          încât să vă bucurați de un zâmbet impecabil.
        </p>
        <br />
        <p>
          În cazul în care aveți nevoie de soluții pentru înlocuirea dinților
          lipsă, echipa noastră de experți în implantologie vă poate ajuta să
          recăpătați funcționalitatea și estetica zâmbetului. Cu ajutorul
          implanturilor dentare și a procedurilor adiționale pentru creșterea
          masei osoase, puteți beneficia de o restaurare stabilă și de lungă
          durată.
        </p>
        <br />
        <p>
          Chirurgia dentoalveolară este, de asemenea, o parte importantă a
          serviciilor noastre, cu extracții dentare, rezecții apicale și
          regularizări de creastă alveolară efectuate cu atenție și competență.
        </p>
        <br />
        <p>
          În plus, oferim servicii de profilaxie dentară pentru menținerea
          sănătății orale, care includ detartraje profesionale și instrucțiuni
          de igienă orală pentru copii și adulți.
        </p>
        <br />
        <p>
          În ceea ce privește albirea dentară, folosim tehnologia laserului
          pentru a vă oferi rezultate rapide și eficiente, astfel încât să
          puteți avea un zâmbet mai strălucitor și mai atrăgător.
        </p>
        <br />
        <p>
          La clinica noastră, vă asigurăm că veți primi tratamente
          personalizate, de cea mai înaltă calitate, într-un mediu prietenos și
          confortabil. Suntem aici pentru a vă ajuta să vă mențineți sănătatea
          orală și să vă îmbunătățiți încrederea în propriul zâmbet.
        </p>
      </div> */}

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
            Dacă sunt prezente rezorbții osoase, se fac operații cu lambou cu
            adiție de biomateriale pentru recuperarea dinților.
          </li>
          <li>
            În cazul unor retracții gingivale, se repoziționează gingia și se
            fac grefe conjunctive.
          </li>
          <li>
            În paralel cu tratamentele parodontale se face și terapie laser
            pentru reducerea încărcării bacteriene, biostimulare și pentru o
            recuperare mai rapidă după intervențiile chirurgicale.
          </li>
        </p>
      </div>

      <div className={styles.treatmentContainer}>
        <h3>Obturații fizionomice</h3>
        <p>
          <li>
            Folosim materiale compozite cu nanoumplutura ceramică care au
            transluciditatea dinților naturali, rezistență mare și care nu- și
            modifică culoarea o perioadă foarte lungă de timp.
          </li>
          <li>
            Pentru o mai bună rezistență mecanică a restaurărilor se pot aplica
            pivoti de fibră de sticlă.
          </li>
          <li>
            Incrustațiile din ceramică presată sunt o alternativă de lux la
            obturațiile clasice de compozit.
          </li>
        </p>
      </div>

      <div className={styles.treatmentContainer}>
        <h3>Coroane, Fațete dentare și Punți</h3>
        <p>
          <li>
            Pentru lucrările executate în cabinetul nostru folosim ceramică de
            cea mai bună calitate care, prin nuanțele și transluciditatea sa,
            permite obținerea unor piese protetice cu estetică deosebită.
          </li>
          <li>
            Puteți alege ceramică integrală, ceramică pe zirconiu, total
            zirconiu sau lucrări metalo-ceramice.
          </li>
          <li>
            Când nu doriți implanturi dentare, puteți opta pentru o proteză
            mobilă.
          </li>
          <li>
            Protezele scheletate, prin sistemele de prindere tip capse sau
            culise, au o stabilitate foarte bună, iar confortul masticator este
            similar cu al dinților naturali.
          </li>
          <li>
            Protezele elastice sau acrilice clasice vă pot reda integritatea
            arcadelor dentare fără a mai fi necesară slefuirea dinților.
          </li>
        </p>
      </div>

      <div className={styles.treatmentContainer}>
        <h3>Implantologie</h3>
        <p>
          <li>
            Implanturile unidentare, punțile fixe pe 2-6 implanturi sau
            protezele mobilizabile pe 4 implanturi asigură restaurări dentare
            stabile, cu un confort masticator similar cu al dinților naturali.
          </li>
          <li>
            Adițiile osoase, ridicările de sinus se realizează cu biomateriale
            de cea mai bună calitate, care asigură o biointegrare superioară.
          </li>
          <li>
            Lucrările provizorii aplicate în aceeași ședință cu implanturile,
            acolo unde este posibil, vă asigură o estetică corespunzătoare și
            posibilitatea masticării în perioada de integrare a implanturilor,
            până la lucrările finale.
          </li>
        </p>
      </div>

      <div className={styles.treatmentContainer}>
        <h3>Chirurgie dentoalveolară</h3>
        <p>
          <li>Extracții dentare simple sau extracții de dinți incluși</li>
          <li>
            Rezecții apicale, îndepărtare chisturi, frenectomii și
            vestibuloplastii
          </li>
          <li>
            Regularizări de creastă alveolară pentru o mai bună stabilitate a
            protezelor.
          </li>
          <li>
            Intervențiile chirurgicale clasice sunt mai ușoare prin utilizarea
            laserului și a piezotomului.
          </li>
        </p>
      </div>

      <div className={styles.treatmentContainer}>
        <h3>Profilaxie dentară</h3>
        <p>
          <li>
            Detartrajele supra și subgingivale urmate de periaj profesional și
            Prophy jet vă asigură sănătatea gingivală și îndepărtarea
            colorațiilor inestetice de pe dinți.
          </li>
          <li>
            Profilaxia la copii prin controale periodice, instrucțiuni de periaj
            dentar, fluorizări și sigilări pregătesc un adult cu o denticie
            sănătoasă.
          </li>
        </p>
      </div>

      <div className={styles.treatmentContainer}>
        <h3>Albiri dentare</h3>
        <p>
          <li>
            Utilizarea laserului în procedura de albire crește eficiența și
            scurtează timpul de acțiune al substanțelor de albire.
          </li>
        </p>
      </div>
    </div>
  );
}

export default TreatmentComponent;
