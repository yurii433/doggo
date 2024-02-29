import styles from "./page.module.css";
import AddButton from "./components/AddButton";
import Advantages from "./components/main-components/Advantages/Advantages";
import Products from "./components/main-components/Products/Products";
import { HeaderSwiper } from "./components/layout-components/HeaderSwiper/HeaderSwiper";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <HeaderSwiper />
        <Advantages />
        <Products />
        <AddButton />
      </div>
    </main>
  );
}
