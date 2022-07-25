import { ComponentType, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Typography.module.css";
import cn from "classnames";

interface ITypography {
  children: ReactNode;
  el?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | ComponentType<HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>>;
  variant?: "primary" | "secondary";
  type?: "button";
}

const Typography: FC<ITypography> = ({ children, el, variant = "primary", type }) => {
  const Element = el || "p";

  const elStyle = cn(
    {
      [styles.title]: el === "h1" || el === "h2",
    },
    {
      [styles.subtitle]:
        el === "h3" || el === "h4",
    },
    {
      [styles.cardSubtitle]:
        el === "h6",
    },
    {
      [styles.headerFive]:
        el === "h5",
    },
    { [styles.paragraph]: el === "p" },
    {
      [styles.buttonText]: type === "button",
    }
  );

  return (
    <div className={styles.root}>
      <Element className={`${elStyle} ${variant === "primary" ? "text-primary-600" : "text-black"}`}>{children}</Element>
    </div>
  );
};

export default Typography;
