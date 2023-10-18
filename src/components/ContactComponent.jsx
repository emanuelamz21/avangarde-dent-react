import styles from "./ContactComponent.module.css";

function ContactComponent() {
  const locations = [
    {
      name: "Avangarde Dent",
      address: "Bulevardul Ion Mihălache 140, București",
      hours: [
        "Luni - Vineri: 10:00 - 18:00",
        "Sâmbătă: 10:00 - 14:00",
        "Duminică: Închis",
      ],
      phone: "+4072861928",
      email: "avangarde.dent@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.3741490112798!2d26.063412576809178!3d44.466502999450064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203a85b679c2d%3A0x3e2ce83623a83d5e!2sAvangarde%20Dent!5e0!3m2!1sen!2sro!4v1697646501808!5m2!1sen!2sro",
    },
  ];

  return (
    <div className={styles.background}>
      {locations.map((location) => (
        <div key={location.name} className={styles.contactInformation}>
          <iframe
            src={location.map}
            width="639"
            height="406"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className={styles.contactDetails}>
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <h3>Program</h3>
            {location.hours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
            <h3>Contact</h3>
            <p>Telefon: {location.phone}</p>
            <p>Email: {location.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactComponent;
