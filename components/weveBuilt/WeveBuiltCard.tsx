import { FC } from "react";
import styles from "./WeveBuilt.module.css";
import Image from "next/image";
import { Typography } from "../ui";
import { TechCard } from "../types";

interface ICard {
  card: TechCard;
}

const WeveBuiltCard: FC<ICard> = ({ card }) => {
  return (
    <div className={styles.box}>
      <div className="rounded-2xl shadow-xl p-3 m-2 mt-3 max-h-32 max-w-fit relative">
        {
          <div className={styles.container}>
            <Image
              alt={card.title}
              src={card.picture ?? "/img/coding 1.svg"}
              layout="fill"
              objectFit="contain"
              className={styles.techImage}
            />
          </div>
        }
      </div>
      <div className="p-3 m-2">
        <span className={styles.title}>
          <Typography el="h3">{card.title}</Typography>
        </span>
        <span className={styles.description}>
          <Typography el="h6" variant="secondary">
            {card.description}
          </Typography>
        </span>
        <div className={styles.samplesContainer}>
          {card.samples.map((x, index) => (
            <div className={styles.samples} key={index}>
              <Typography el="h5" variant="secondary" key={x}>
                {x}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeveBuiltCard;
