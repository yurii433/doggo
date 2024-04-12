import styles from "./Slide.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import parse from "html-react-parser";

export interface ISlide {
  id: number;
  image: {
    src: string;
    alt: string;
    priority?: boolean;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
    className?: string;
    width: number;
    height: number;
    objectPosition?: string;
  };
  content: {
    header: string;
    text: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const Slide: React.FC<ISlide> = ({ id, image, content }) => {
  const [isBigScreen, setIsBigScreen] = useState(true);

  useEffect(() => {
    setIsBigScreen(screen.width > 920 ? true : false);
  }, []);

  const slideText = parse(content.text);

  return (
    <li>
      <Image
        style={
          isBigScreen ? { objectPosition: image.objectPosition } : undefined
        }
        src={image.src}
        alt={image.alt}
        priority={image.priority}
        placeholder={image.placeholder}
        blurDataURL={image.blurDataURL}
        width={image.width}
        height={image.height}
      />
      <div className={`${styles.slideContentContainer} `}>
        <h3>{content.header}</h3>
        <p>{slideText}</p>

        <Link href={content.buttonLink} className={styles.buttonLink}>
          {content.buttonText}
        </Link>
      </div>
    </li>
  );
};
