import styles from "./page.module.css";
import Advantages from "./components/main-components/Advantages/Advantages";
import Products from "./components/main-components/Products/Products";
import CustomSwiper from "./components/layout-components/CustomSwiper/CustomSwiper";
import { swiperData } from "./utils/swiperData";
import { ISlide } from "./components/layout-components/CustomSwiper/Slide";
import ButtonLink from "./components/layout-components/UI-UX elements/ButtonLink";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <CustomSwiper swiperData={swiperData as ISlide[]} />
        <Advantages />
        <Products />
        <ButtonLink href="/products" text="EXPLORE MORE OUR PRODUCTS" />
      </div>
    </main>
  );
}
