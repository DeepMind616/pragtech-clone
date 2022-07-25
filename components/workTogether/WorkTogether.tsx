import React, { FC } from "react";
import styles from "./WorkTogether.module.css";
import Image from "next/image";
import workTogetherImg from "../../public/assets/workTogetherImages/workTogether.png";
import { Button, Typography } from "../ui";

const WorkTogether: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        {/* <Typography el="h2" variant="secondary"> */}
        <div className={styles.title}>
          Let&apos;s Work <span>Together</span>
        </div>
        {/* </Typography> */}
        <div className={styles.spanContainer}>
          {/* <Typography el="p" variant="secondary"> */}
          We take pride in our business, and we deliver quality work for all your tech and software development needs.
          {/* </Typography> */}
        </div>
        <div className={styles.btnContainer}>
          {/* <Button variant="secondary">Start a project with us </Button> */}
          <button>Start a project with us </button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <Image src={workTogetherImg} alt="footer image" objectFit="contain" priority={false} />
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
