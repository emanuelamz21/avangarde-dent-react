import styles from "./TreatmentPreview.module.css";

function TreatmentPreview() {
  return (
    <div className={styles.treatmentContainer}>
      <div className={styles.textContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          className={styles.svgIcon}
        >
          <circle
            id="Ellipse_6"
            data-name="Ellipse 6"
            cx="17.5"
            cy="17.5"
            r="17.5"
            fill="#fff"
          />
          <g
            id="toothbrush-and-paste-svgrepo-com"
            transform="translate(11.864 8.63)"
          >
            <path
              id="Path_28"
              data-name="Path 28"
              d="M5.794,3.671,4.961,15.494h6.176L10.32,3.671ZM1.133,17.537c-.042-3.438-.085-5.153-.127-8.59.274-1.156.52-2.314.858-3.471l-.088-.323L.411,5.2A.21.21,0,0,1,.2,4.991v-.1a.21.21,0,0,1,.206-.206l1.36-.051-.007-.276L.341,4.409A.21.21,0,0,1,.128,4.2V4.1a.21.21,0,0,1,.206-.206l1.4-.051-.007-.274L.29,3.618a.21.21,0,0,1-.212-.212V3.3A.21.21,0,0,1,.284,3.1l1.431-.053-.006-.273L.276,2.825a.21.21,0,0,1-.212-.212v-.1A.21.21,0,0,1,.27,2.306L1.7,2.252l-.007-.274L.251,2.031a.21.21,0,0,1-.212-.212v-.1a.21.21,0,0,1,.206-.206l1.437-.053-.013-.274L.212,1.239A.21.21,0,0,1,0,1.027v-.1A.21.21,0,0,1,.206.719L1.669.664c.218-.469.1-.446.6-.446.159,0,.206.064.211.218L2.644,5.4h0c-.2,1.155-.349,2.31-.634,3.465l0,.212.127,8.455a.208.208,0,0,1-.208.208H1.337a.206.206,0,0,1-.2-.2ZM6.695,2.9,7.018,0H9.051L9.4,2.9ZM4.9,16.413l-.072,1.021h6.448L11.2,16.413Z"
              fill="#20c5af"
              fill-rule="evenodd"
            />
          </g>
        </svg>
        <h4>Grija Dentara</h4>

        <p className={styles.description}>
          Protezele dentare trebuie îngrijite astfel încât bacteriile și placa
          să nu se acumuleze și să cauzeze probleme de sănătate orală.
        </p>
        <button>
          <p className={styles.buttonText}>Învăță mai mult</p>
        </button>
      </div>
    </div>
  );
}

export default TreatmentPreview;
