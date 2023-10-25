import PageNav from "../components/PageNav";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <img
          src="https://picsum.photos/800/600"
          alt="random"
          className={styles.mainPhoto}
        />
        <img src="https://picsum.photos/300/250" alt="random" />
        <img src="https://picsum.photos/300/250" alt="random" />
        <div className={styles.bottomRow}>
          <img src="https://picsum.photos/200/200" alt="random" />
          <img src="https://picsum.photos/200/200" alt="random" />
          <img src="https://picsum.photos/200/200" alt="random" />
        </div>
      </div>
    </>
  );
}
// 600.600
export default Gallery;
