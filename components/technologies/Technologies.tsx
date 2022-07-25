import styles from "./Technologies.module.css"
import data from "../../data/data.json";
import { Typography } from "../ui";
import Image from "next/image";

const Technologies = () => {
  return (
          <div className={styles.root}>
              
        {data.technologies.map(
            (card: {
                    id: number;
                    icon: string;
                    title: string;
                    description: string;
                    images?: string[];
                    samples?: string[];
                }) => (
            <div className={styles.card} key={card.id}>

              <div >
                <div className={styles.icon_container}>
                        <Image
                            alt={card.title}
                            src={card.icon ?? "/img/coding 1.svg"}
                            layout="fill"
                            objectFit="contain"
                        />
                </div>
                  <span className={styles.title}><Typography el="h3">{card.title}</Typography></span>
               
                  <span className={styles.title}><Typography el="h6" variant="secondary">{card.description}</Typography></span>
              </div>   

               <ul className={styles.images_samples__container}>
                    {card.samples?.map((x) => (
                        <li className={styles.samples_container} key={x}>
                            <Typography el="h5" variant="secondary" >
                                {x}
                            </Typography>
                        </li>))}
                    {card.images?.map((x) => (
                        <li className={styles.images_container} key={x}>
                            <Image
                                alt={card.title}
                                src={x ?? "/img/coding 1.svg"}
                                layout="fill"
                                objectFit="contain"
                                />
                        </li>))}
                </ul>
              
            </div>
          )
        )}
          </div>
  );
};

export default Technologies;
