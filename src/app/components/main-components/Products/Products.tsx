import styles from "./Products.module.css";

export default function Products() {
  return (
    <div className={styles.products} id="products">
      <div className={styles.container}>
        <h2>Here is everything your 4-paw friend need...</h2>
        <div className={styles.productsContainer}>
          <div className={styles.product}>
            <img src="/products/lovely-lamb-meaty-treats-pdp-2.webp" alt="" />
            <h4>Lamb probiotic meaty treats</h4>
            <p>
              Limited edition grain-free Love-ly lamb Meaty Treats for your
              true...
            </p>
          </div>
          <div className={styles.product}>
            <img src="/products/lovely-lamb-meaty-treats-pdp-2.webp" alt="" />
            <h4>Lamb probiotic meaty treats</h4>
            <p>
              Limited edition grain-free Love-ly lamb Meaty Treats for your
              true...
            </p>
          </div>
          <div className={styles.product}>
            <img src="/products/lovely-lamb-meaty-treats-pdp-2.webp" alt="" />
            <h4>Lamb probiotic meaty treats</h4>
            <p>
              Limited edition grain-free Love-ly lamb Meaty Treats for your
              true...
            </p>
          </div>
          <div className={styles.product}>
            <img src="/products/lovely-lamb-meaty-treats-pdp-2.webp" alt="" />
            <h4>Lamb probiotic meaty treats</h4>
            <p>
              Limited edition grain-free Love-ly lamb Meaty Treats for your
              true...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
