import { ToggleButton, Typography } from "../ui";
import styles from "./WeveBuilt.module.css";
import Image from "next/image";
import data from "../../data/data.json";
import WeveBuiltGrid from "../ui/WeveBuiltGrid";
import { useState } from "react";
import WeveBuiltCard from "./WeveBuiltCard";

export interface CardImage {
  url: string;
  alt?: string;
}

const WeveBuilt = () => {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.root}>
      <div className="text-center">
        <Typography el="h2" variant="secondary">
          Take a look <span>at what we&apos;ve built</span>
        </Typography>
      </div>

      <div className="flex space-x-2 justify-center py-4">
        <ToggleButton
          texts={["local", "foreign"]}
          active={active}
          setActive={setActive}
        />
      </div>

      <WeveBuiltGrid>
        {data.weveBuilt.map(
          (
            card: {
              title: string | undefined;
              samples: string[];
              description: string;
              picture: any;
            },
            index
          ) => (
            <WeveBuiltCard card={card} key={index} />
          )
        )}
      </WeveBuiltGrid>
    </div>
  );
};

export default WeveBuilt;
