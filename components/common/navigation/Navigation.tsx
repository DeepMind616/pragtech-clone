import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CloseIcon, MenuIcon } from "../../icons";
import styles from "./Navigation.module.css";

interface INavigation {
  variant?: "light" | "dark";
}

const Navigation: FC<INavigation> = ({ variant = "dark" }) => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const isSmall = useMediaQuery({ query: "(max-width: 1024px)" });

  const NavLinks = [
    {
      name: "Case Studies",
      link: "/case-studies",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Who we are",
      link: "/who-we-are",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  const isActive = (href: string) => {
    return router.pathname === href ? "border-b-2" : "";
  };

  const isNotHome = () => {
    return router.pathname !== "/";
  };

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const renderNavLinks = () => {
    return NavLinks.map((item, index) => {
      return (
        <li key={index}>
          <Link href={item.link}>
            <a
              className={`${isActive(
                item.link
              )} z-50 uppercase hover:border-b-2 pb-2 px-0 lg:px-5`}
            >
              {item.name}
            </a>
          </Link>
        </li>
      );
    });
  };

  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  const navList = cn(
    "flex flex-col gap-5 py-4 px-4 md:py-0 md:flex md:flex-row md:gap-3 md:pb-0",
    {
      hidden: !open,
    },
    {
      "text-primary-50": isScrolled,
    },
    {
      "text-white": !isScrolled,
    },
    {
      "text-black bg-white": isSmall && !isNotHome() && !isScrolled, // Device should be small, not in home link and should not be scrolled to apply the style black text and white background
    }
  );

  const rootClass = cn(styles.root, {
    "bg-gray-900": isScrolled,
    "text-white bg-black/75 w-full": isSmall && isNotHome() && !isScrolled,
  });

  const toggleClass = cn(styles.toggle, {
    "text-primary-50": isScrolled,
    "text-white": isNotHome(),
  });

  return (
    <nav className={rootClass}>
      <div className={styles.nav}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <Image
                src={
                  !isScrolled && variant === "dark" && isActive("/")
                    ? "/assets/pragtechLogo/black_logo.svg"
                    : "/assets/pragtechLogo/white_logo.svg"
                }
                alt="Pragtech logo"
                layout="fill"
                priority={true}
              />
            </div>
          </a>
        </Link>

        <button className={toggleClass} onClick={toggleNavbar}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <ul className={`${navList}`}>{renderNavLinks()}</ul>
      </div>
    </nav>
  );
};
export default Navigation;
