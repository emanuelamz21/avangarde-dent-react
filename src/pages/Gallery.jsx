import PageNav from "../components/PageNav";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <>
      <PageNav />

      <div className={styles.container}>
        <div className={styles.gallery}>
          <img src="image1.jpg" alt="image-cabinet" />
          <img src="image2.jpg" alt="image-cabinet" />
          <img src="image3.jpg" alt="image-cabinet" />
          <img src="image4.jpg" alt="image-cabinet" />
          <img src="image5.jpg" alt="image-cabinet" />
          <img src="image6.jpg" alt="image-cabinet" />
          <img src="image7.jpg" alt="image-cabinet" />
          <img src="image8.jpg" alt="image-cabinet" />
          <img src="image9.jpg" alt="image-cabinet" />
          <img src="image10.jpg" alt="image-cabinet" />
        </div>
      </div>
    </>
  );
}

export default Gallery;
