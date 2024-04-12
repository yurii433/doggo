import React from "react";
import styles from "./ButtonLink.module.css";
import Link from "next/link";

interface IButtonLink {
  text: string | number;
  href: string;
}

const ButtonLink: React.FC<IButtonLink> = ({ text, href }) => {
  return (
    <div className={styles.buttonContainer}>
      <Link href={href} className={styles.buttonLarge}>
        {text}
      </Link>
    </div>
  );
};

export default ButtonLink;
