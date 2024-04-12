"use client";
import styles from "./CustomSwiper.module.css";
import React, { useRef, useState, useEffect, useId } from "react";
import { Slide, ISlide } from "./Slide";

const CustomSwiper = ({ swiperData }: { swiperData: ISlide[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalState, setIntervalState] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);
  const intervalIdRef = useRef<number | NodeJS.Timeout | null>(null);

  useEffect(() => {
    sliderAutoScroll(10000);
    return () => {
      resetAutoSwipe(10000);
    };
  }, [intervalState]);

  const sliderAutoScroll = (delay: number) => {
    if (!intervalIdRef.current) {
      intervalIdRef.current = setInterval(autoNextSlide, delay);
    }
  };

  const autoNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === swiperData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const resetAutoSwipe = (delay: number) => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
      setTimeout(function () {
        setIntervalState((prevState) => prevState + 1);
      }, delay);
    }
  };

  return (
    <div className={styles.container} onClick={() => resetAutoSwipe(10000)}>
      <ul
        className={styles.itemsContainer}
        ref={sliderRef}
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {swiperData.map((slide) => {
          return (
            <Slide
              key={slide.id}
              id={slide.id}
              image={{
                ...slide.image,
                placeholder: slide.image.placeholder as "blur" | "empty",
              }}
              content={slide.content}
            />
          );
        })}
      </ul>
      <button
        className={`
          ${styles.SlideButton} 
          ${styles.SlideButtonLeft}
          ${currentIndex === 0 && styles.ButtonDisabled}`}
        disabled={currentIndex === 0}
        onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
      >
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </button>
      <button
        className={`
          ${styles.SlideButton} 
          ${styles.SlideButtonRight}
          ${currentIndex === swiperData.length - 1 && styles.ButtonDisabled}`}
        disabled={currentIndex === swiperData.length - 1}
        onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>

      <div className={styles.indicatorsWrap}>
        {swiperData.map((slide, index) => {
          return (
            <button
              key={slide.id}
              className={styles.indicatorRadio}
              onClick={() => setCurrentIndex(slide.id - 1)}
            >
              <span className="material-symbols-outlined">
                {" "}
                {index === currentIndex
                  ? "radio_button_checked"
                  : "radio_button_unchecked"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSwiper;
