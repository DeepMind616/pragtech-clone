import styles from "./companyList.module.css"
import data from "../../data/data.json";
import { Typography } from "../ui";
import Image from "next/image";

const CompanyList = () => {
    return (
        <div>
            <div className={styles.root}>
                <Image
                    src={"/assets/companyListImages/Rectangle 36.png"}
                    alt={"CompanyList"}
                    className={styles.companyListImage}
                    layout="fill"
                    priority={true}
                />
                <div className={styles.companyListContainer}>
            <h1 className={styles.title}>WE HAVE PROVIDED OUR SERVICES TO A</h1>
            <h1 className={styles.titleGreen}>GROWING NUMBER OF CLIENTS</h1>
            <div>
                <div className={styles.images_samples__container}>
                {data.companylist.map((x) => (
                        <li className={styles.images_container} key={x.id}>
                            <Image
                                alt={"companylistimages"}
                                src={x.image ?? "/img/coding 1.svg"}
                                layout="fill"
                                objectFit="contain"
                                />
                        </li>))}
                </div>
            </div>
            
          </div>
            </div>

            
        </div>
        
        )
}

export default CompanyList