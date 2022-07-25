import Image from "next/image";
import { Button, Footer, Navigation } from "../../components";
import styles from "./ContactUs.module.css";
import data from "./data.json";

const ContactUs = () => {
  const items = data.contacts.map((item) => (
    <div key={item.text} className={styles.itemContainer}>
      <div className={styles.iconContainer}>
        <Image src={item.svg} layout="fill" objectFit="contain" />
      </div>
      <div>{item.text}</div>
    </div>
  ));

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <Navigation variant="light" />
      </div>
      <div className={styles.contents}>
        <div className={styles.leftContainer}>
          <div className={styles.title}>Let us hear from you</div>
          <div className={styles.subText}>
            If you have any inquiries about our services, or if you would like to work on a project with us, send us a message and
            we'll reach out to you.
          </div>
          <div>
            <Button>Send us a message</Button>
          </div>
        </div>
        <div>
          <div className={styles.contacts}>{items}</div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
