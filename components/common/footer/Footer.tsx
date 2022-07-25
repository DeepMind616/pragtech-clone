import styles from "./Footer.module.css";
import Image from "next/image";
import pragtechLogo from "../../../public/assets/footerImages/pragtechLogo.svg";
import twitterIcon from "../../../public/assets/footerImages/twitter.svg";
import facebookIcon from "../../../public/assets/footerImages/facebook.svg";
import linkedinIcon from "../../../public/assets/footerImages/linkedin.svg";
import Link from "next/link";
import data from "../../../data/data.json";
import { FC } from "react";

const Footer: FC = () => {
  const footerValues = data.footerValues;

  const caseStudies = footerValues[0]["Case Studies"]?.map((item) => (
    <li key={item.name}>
      <Link href={item.path}>
        <a> {item.name}</a>
      </Link>
    </li>
  ));
  const quickLinks = footerValues[1]["Quick Links"]?.map((item) => (
    <li key={item.name}>
      <Link href={item.path}>
        <a> {item.name}</a>
      </Link>
    </li>
  ));

  return (
    <div className={styles.root}>
      <div className={styles.contents}>
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <div className={styles.column}>
              <div className={styles.columnTitle}>Case Studies</div>
              <ul>{caseStudies}</ul>
            </div>
            <div className={styles.column}>
              <div className={styles.columnTitle}>Quick Links</div>
              <ul>{quickLinks}</ul>
            </div>
            <div className={styles.column}>
              <div className={styles.columnTitle}>Contact Us</div>
              <ul>
                <li>Contact Us</li>
                <li className={styles.address}>16 Bronze St., SSS Village, Concepcion Dos, Marikina, 1811, Philippines</li>
                <li>0917-6289522</li>
              </ul>
            </div>

            <div className={styles.column}>
              <div className={styles.columnTitle}>Follow us on</div>
              <div className={styles.iconsContainer}>
                <div>
                  <Link href="/">
                    <a>
                      <Image src={twitterIcon} />
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <a>
                      <Image src={facebookIcon} />
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <a>
                      <Image src={linkedinIcon} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.logoContainer}>
          <div className={styles.logoContent}>
            <div className={styles.logo}>
              <Image className={styles.image} src={pragtechLogo} objectFit="contain" />
            </div>
            <div className={styles.logoText}>© 2018 Pragtechnologies Corp.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
