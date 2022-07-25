import cn from "classnames";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import Typography from "../Typography";
import styles from "./Button.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  padding?: "md" | "lg";
}

const Button: FC<IButton> = ({ variant = "primary", padding = "md", children, ...rest }) => {
  const rootStyle = cn(
    styles.root,
    {
      [styles.primary]: variant === "primary",
    },
    {
      [styles.secondary]: variant === "secondary",
    },
    {
      [styles.mdPadding]: padding === "md",
    },
    {
      [styles.lgPadding]: padding === "lg",
    }
  );

  return (
    <button className={rootStyle} {...rest}>
      <Typography el="p" type="button">
        {children}
      </Typography>
    </button>
  );
};

export default Button;
