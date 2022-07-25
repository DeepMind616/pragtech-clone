import { FC } from "react";
import { TechCard } from "../types";
import { Typography } from "../ui";
import Image from "next/image";
import styles from "./Article.module.css";

interface IArticle {
  card: TechCard;
}

const Pills = ({ label }: { label: string }) => {
  return <div className={styles.samples}>{label}</div>;
};

const Article: FC<IArticle> = ({ card }) => {
  return (
    <div className={styles.root}>
      <div className={styles.headContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{card.title}</div>
          <div className={styles.pillsContainer}>
            {card.samples.map((item, index) => {
              return <Pills key={index} label={item} />;
            })}
          </div>
        </div>

        {!!card.article?.featuredImage && (
          <div className={styles.mainImageContainer}>
            <Image src={card.article.featuredImage} layout="fill" alt="Featured article" />
          </div>
        )}
      </div>

      <div className={styles.article}>
        {card.article?.content.map((item, index) => {
          return (
            <div className={styles.itemsContainer} key={index}>
              <div className={styles.articleContainer}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.body}>{item.body}</div>
              </div>

              {item?.featuredImage && (
                <div className={styles.articleImageContainer}>
                  <Image
                    src={item.featuredImage}
                    className="max-h-[368px] w-full"
                    objectFit="cover"
                    layout="fill"
                    alt={item.body}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
