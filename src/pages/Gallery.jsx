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
            <LazyImage src="image1.png" alt="image-cabinet" />
            <LazyImage src="image2.png" alt="image-cabinet" />
            <LazyImage src="image3.png" alt="image-cabinet" />
            <LazyImage src="image4.png" alt="image-cabinet" />
            <LazyImage src="image5.png" alt="image-cabinet" />
            <LazyImage src="image7.png" alt="image-cabinet" />
            <LazyImage src="image9.png" alt="image-cabinet" />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Gallery;
