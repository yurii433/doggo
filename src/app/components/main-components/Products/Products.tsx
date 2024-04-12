import styles from "./Products.module.css";
import { Product } from "./Product";

import { data as productsData } from "./data";

export default function Products() {
  return (
    <div className={styles.products} id="products">
      <div className={styles.container}>
        <h2>Here is everything your 4-paw friend need...</h2>
        <div className={styles.productsContainer}>
          {productsData.map((product) => {
            return (
              <Product
                title={product.title}
                subtitle={product.subtitle}
                src={product.src}
                alt={product.alt}
                key={product.key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
