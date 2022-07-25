import { FC } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { Typography } from "../../ui";

export interface CardImage {
  url: string;
  alt?: string;
}
export interface Card {
  id: string;
  title: string;
  samples: string[];
  picture: string;
}

interface Props {
  card: Card;
}

const Card: FC<Props> = ({ card }) => {
  return (
    <div className={styles.box}>
      <div className="mb-2 md:mb-5"><Typography el="h3">{card.title}</Typography></div>
      {card.samples.map((s) => (
        <Typography key={s} el="h6" variant="secondary">
          {s}
        </Typography>
      ))}
      {
        <div className={styles.container}>
          <Image
            alt={card.title}
            src={card.picture ?? "/img/coding1.svg"}
            height={107}
            width={107}
            className={styles.techImage}
          />
        </div>
      }
    </div>
  );
};

export default Card;
