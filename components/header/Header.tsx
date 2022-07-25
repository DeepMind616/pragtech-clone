import { Button, Typography } from "../ui";
import styles from "./Header.module.css";
import Image from "next/image";
import data from "../../data/data.json";
import { FC } from "react";

interface IHeader {
  variant?: "primary" | "secondary" | "tertiary";
  props?: {
    featuredImg: string;
    featuredAlt: string;
    title: string;
    subtitle: string;
  };
}

const renderHeaderIcons = () => {
  return data.header.icons.map((item, index) => {
    return (
      <div className={styles.headerIcon} key={index}>
        <Image src={item} layout="fill" objectFit="contain" alt={item} />
      </div>
    );
  });
};

const renderHeaderCards = () => {
  return data.header.descriptionIcons.map((item, index) => {
    return (
      <div className={styles.headerCard} key={index}>
        <div className={styles.imageContainer}>
          <Image src={item.icon} layout="fill" alt={item.title} />
        </div>
        <Typography variant="primary" el="h3">
          {item.title}
        </Typography>
        <Typography variant="secondary" el="h6">
          {item.subtitle}
        </Typography>
      </div>
    );
  });
};

const Header: FC<IHeader> = ({ variant = "primary", props }) => {
  return (
    <>
      {variant === "primary" ? (
        <header className={styles.primary}>
          <div className={styles.headerImageContainer}>
            <Image
              src={"/assets/headerImages/header_img.png"}
              alt="Header wavy office setup"
              className={styles.headerImage}
              layout="fill"
            />
          </div>
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>Leave the tech to us</h1>

            <p className={styles.subtitle}>
              Our team specializes in engineering top-class software according to your needs. We utilize the latest open-source
              technologies like Elixir/Phoenix, React Native, and more. Here at Pragtech, we can turn your ideas into reality.
            </p>

            <Button>Take a look at our work</Button>
          </div>
          <div className={styles.headerIcons}>{renderHeaderIcons()}</div>
        </header>
      ) : variant === "secondary" ? (
        <header className={styles.secondary}>
          {props?.featuredImg && (
            <div className={styles.backdropImage}>
              <Image
                src={props.featuredImg}
                alt={props?.featuredAlt}
                className={styles.headerImage}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}

          <div className={styles.headerContainer}>
            <h1 className={styles.title}>{props && props.title}</h1>
            <p className={styles.subtitle}>{props && props.subtitle}</p>
          </div>
        </header>
      ) : (
        <header className={styles.tertiary}>
          <div className={styles.headerContainer}>
            <div className={styles.backdropImage}>
              <Image
                src={props?.featuredImg ?? "/assets/placeholder.svg"}
                alt={props?.featuredAlt}
                className={styles.headerImage}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className={styles.title}>
              {props?.title} <br />
              <span className={styles.subtitle}>{props?.subtitle}</span>
            </h1>
          </div>
          <div className={styles.headerCardContainer}>{renderHeaderCards()}</div>
        </header>
      )}
    </>
  );
};

export default Header;
