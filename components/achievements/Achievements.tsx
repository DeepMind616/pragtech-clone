import { Typography } from "../ui";

import styles from "./Achievement.module.css";
import Image from "next/image";
import data from "../../data/data.json";
import AGrid from "../ui/achievementGrid";

export interface Image {
  url: string;
  alt?: string;
}

const Achievements = () => {
  return (
    <div className={styles.root}>
      <div className="text-center">
        <Typography el="h2" variant="secondary">
          Our <span>Achievements</span>
        </Typography>
      </div>
      <AGrid>
        {data.achievements.map((card, index) => (
          <div className={styles.rectangle} key={index}>
            <div className={styles.container}>
              <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <Image alt={card.label} src={card.image} layout="fill" objectFit="contain" className={styles.achievementImage} />
              </div>
            </div>
          </div>
        ))}
      </AGrid>
    </div>
  );
};

export default Achievements;
