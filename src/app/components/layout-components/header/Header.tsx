"use client";

import styles from "./header.module.css";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import navRoots from "./navRoots";
import { handleThrottle } from "@/app/utils/optimisation-tools";

const Header = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const navElRef = useRef(null);
  const headerElRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (navElRef?.current && headerElRef?.current) {
      const observer = new IntersectionObserver((entries) => {
        entries[0].isIntersecting
          ? setIsIntersecting(true)
          : setIsIntersecting(false);
      });
      observer.observe(headerElRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <header className={styles.header} ref={headerElRef}>
      <div
        className={`${styles.desctopNavContainer} ${
          !isIntersecting && styles.bgWhite
        }`}
        ref={navElRef}
      >
        <nav className={styles.nav}>
          <Link href="/">
            <img src="/logo.svg" alt="dogo logo" className={styles.img} />{" "}
          </Link>
          <ul className={styles.ulHeaderFirst}>
            {navRoots.map((root) => {
              return (
                <li key={root.title} className={styles.li}>
                  {" "}
                  <Link
                    href={root.href}
                    className={`${pathname === root.href ? "activeLink" : ""} ${
                      styles.navLink
                    }`}
                  >
                    {root.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <ul className={styles.ulHeaderSecond}>
          <button className={styles.btnLogin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 101 101"
              id="user"
              className={styles.loginImg}
            >
              <path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"></path>
            </svg>
          </button>
          <button className={styles.btnLanguage}>Language</button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
