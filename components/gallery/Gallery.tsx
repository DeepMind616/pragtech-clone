import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./Gallery.module.css";
import { Container, ToggleButton } from "../ui";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import gallery from "../../data/data.json";
import GalleryCard from "./component/GalleryCard";

const Gallery = () => {
  const [active, setActive] = useState(1);
  const [currentData, setCurrentData] = useState(gallery.gallery.video);
  const xl = useMediaQuery({ query: "(min-width: 1280px)" });
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const sm = useMediaQuery({ query: "(min-width: 640px)" });

  useEffect(() => {
    //TODO Change the else to gallery.gallery.images if images are availble in data.json
    setCurrentData(active === 1 ? gallery.gallery.video : gallery.gallery.image);
  }, [active]);

  const perView = xl ? 3.5 : lg ? 2.8 : md ? 2.5 : sm ? 1.5 : 1.3;

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    // mode: "free-snap",
    slides: {
      perView,
      spacing: 10,
    },
  });

  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.title}>
          Gallery &#38; <span>videos</span>
        </div>

        <div className={styles.toggleContainer}>
          <ToggleButton texts={["videos", "gallery"]} active={active} setActive={setActive} />
        </div>

        <div ref={ref} className={`keen-slider ${styles.sliderContainer}`}>
          {currentData.map((data, index) => (
            <GalleryCard key={index} data={data} index={index + 1} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
