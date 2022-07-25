import React, { FC } from "react";
import Image from "next/image";
import styles from "./GalleryCard.module.css";
import playButton from "../../../public/assets/gallery/playButton.svg";
interface paramType {
  src: string;
  alt: string;
}

const GalleryCard: FC<{ data: paramType; index: number }> = ({ data, index }) => {
  return (
    <div className={`keen-slider__slide number-slide${index} ${styles.item}`}>
      <div className={styles.imageContainer}>
        <Image alt={data.alt} src={data.src} layout="fill" objectFit="contain" className={styles.achievementImage} />
        <div className={styles.playButton}>
          <div>
            <Image alt="playbutton" src={playButton} objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
