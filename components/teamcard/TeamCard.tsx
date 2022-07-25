// import { FC } from "react"
// import styles from "./TeamCard.module.css";
// import Image from "next/image"

// export interface Card {
//   id: string
//   name: string
//   title: string
//   image: string
// }

// interface Props{
//   card: Card
// }

// const TeamCards: FC<Props> = ({card}) => {

//   return (
//     <div className="flex flex-col background-color: transparent items-center pb-3">
//         <div className={styles.container}>
//             <div style={{width: '100%', height: '100%', position: 'relative'}}>
//                 <Image
//                     alt={card.name}
//                     src={card.image}
//                     layout='fill'
//                     objectFit='contain'
//                     className={styles.teamImage}
//                 />
//             </div>
//         </div>

//           <div className={styles.name}>
//             {card.name}
//           </div>
//           <div className={styles.title}>
//             {card.title}
//           </div>

//       </div>
//   )
// };

// export default TeamCards;

import { Typography } from "../ui";

import styles from "./TeamCard.module.css";
import Image from "next/image";
import data from "../../data/data.json";
import TeamCardsGrid from "../ui/teamCardsGrid";

export interface Image {
  url: string;
  alt?: string;
}

const TeamCards = () => {
  return (
    <div className={styles.root}>
      <div className="text-center py-10">
        <Typography el="h2" variant="secondary">
          Meet <span> The Team</span>
        </Typography>
      </div>
      <TeamCardsGrid>
        {data.teamcards.map((card, index) => (
          <div className="pt-8 flex flex-col background-color: transparent items-center" key={index}>
            <div className="p-2 m-2">
              <div className={styles.container}>
                <div style={{ width: "100%", height: "100%", position: "relative" }}>
                  <Image alt={card.name} src={card.image} layout="fill" objectFit="contain" className={styles.teamImage} />
                </div>
              </div>
            </div>

            <div className={styles.name}>{card.name}</div>
            <div className={styles.title}>{card.title}</div>
          </div>
        ))}
      </TeamCardsGrid>
    </div>
  );
};

export default TeamCards;
