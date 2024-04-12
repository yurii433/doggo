/* "use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { register } from "swiper/element/bundle";

register();

import styles from "./HeaderSwiper.module.css";
import { url } from "inspector";
import Link from "next/link";

export const HeaderSwiper = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const params = {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "disabled_swiper_button",
      },
      arrows: false,
      pagination: {
        clickable: true,
      },

      breakpoints: {
        768: {},
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    };

    if (swiperElRef?.current) {
      Object.assign(swiperElRef.current, params);
      swiperElRef.current.initialize();
    }
  }, []);

  return (
    <swiper-container init="false" ref={swiperElRef}>
      <swiper-slide>
        <h1>text 1</h1>
        <Image
          src="/dog-rose-back.jpg"
          fill={true}
          alt="samoyed on rose background"
          className={`${styles.swiperSlideImg} ${styles.swiperSlideImg1}`}
          loading="lazy"
        />
        <div
          className={`
            ${styles.slideContentContainer} 
            ${styles.slideContentContainer1}`}
        >
          <h3>INDULGE YOUR PET'S PALATE</h3>
          <p>Spoil them with our Paw-some Chicken Jerky Bites</p>
          <Link href="#products" className={styles.buttonLink}>
            SHOP NOW
          </Link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h1>text 2</h1>
        <Image
          fill={true}
          src="/dog-peach-back.jpg"
          className={`
            ${styles.swiperSlideImg} 
            ${styles.swiperSlideImg2}`}
          alt="beagle on peach backround"
          loading="lazy"
        />
        <div
          className={`
            ${styles.slideContentContainer} 
            ${styles.slideContentContainer2}`}
        >
          <h3>TREAT YOUR FURRY FRIEND</h3>
          <p>
            Introducing our Crunchy Carrot Chews, <br /> packed with vitamins
            and minerals to support <br />
            your pet's overall well-being.
          </p>
          <Link href="#products" className={styles.buttonLink}>
            ORDER RIGHT NOW!
          </Link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h1>text 3</h1>
        <Image
          fill={true}
          src="/dog-blue-back.jpg"
          className={`${styles.swiperSlideImg} ${styles.swiperSlideImg3}`}
          alt="pug on blue backround"
          loading="lazy"
        />
        <div
          className={`${styles.slideContentContainer} ${styles.slideContentContainer3}`}
        >
          <h3>SUBSCRIBE AND SAVE</h3>
          <p>
            Subscribers get up to 40% off <br />{" "}
            <b>+ TWICE MORE PAWBONUS points</b>
          </p>

          <Link href="#products" className={styles.buttonLink}>
            SUBSCRIBE TODAY
          </Link>
        </div>
      </swiper-slide>
    </swiper-container>
  );
};

*/
