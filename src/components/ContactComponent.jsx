import styles from "./ContactComponent.module.css";

function ContactComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.contactInformation}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.3741490112798!2d26.063412576809178!3d44.466502999450064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203a85b679c2d%3A0x3e2ce83623a83d5e!2sAvangarde%20Dent!5e0!3m2!1sen!2sro!4v1697646501808!5m2!1sen!2sro"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className={styles.contactDetails}>
          <h3>Avangarde Dent</h3>
          <p>
            Bulevardul Ion Mihălache 140, Bloc A, Scara B, Apartament 22
            București
          </p>
          <br></br>
          {/* <h3>Program</h3>
          <p>Luni - Vineri: 10:00 - 18:00</p>
          <p>Sâmbătă: 10:00 - 14:00</p>
          <p>Duminică: Închis</p>
          <br></br> */}
          <h3>Contact</h3>
          <p>Telefon: 021.224.46.90</p>
          <p>Email: cabinetdrcureu@gmail.com</p>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
