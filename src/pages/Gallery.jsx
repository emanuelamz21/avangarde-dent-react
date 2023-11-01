import PageNav from "../components/PageNav";
import styles from "./Gallery.module.css";
import { lazy, Suspense } from "react";

const LazyImage = lazy(() => import("../components/LazyImage"));

function Gallery() {
  return (
    <>
      <PageNav />

      <div className={styles.container}>
        <div className={styles.gallery}>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage src="image1.jpg" alt="image-cabinet" />
            <LazyImage src="image2.jpg" alt="image-cabinet" />
            <LazyImage src="image3.jpg" alt="image-cabinet" />
            <LazyImage src="image4.jpg" alt="image-cabinet" />
            <LazyImage src="image5.jpg" alt="image-cabinet" />
            <LazyImage src="image6.jpg" alt="image-cabinet" />
            <LazyImage src="image7.jpg" alt="image-cabinet" />
            <LazyImage src="image8.jpg" alt="image-cabinet" />
            <LazyImage src="image9.jpg" alt="image-cabinet" />
            <LazyImage src="image10.jpg" alt="image-cabinet" />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Gallery;
