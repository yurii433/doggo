import styles from "./Advantages.module.css";
import { arizonia } from "@/app/utils/fonts";

export default function Advantages() {
  return (
    <div className={styles.advantages}>
      <div className={styles.container}>
        <div className={styles.advantage}>
          <h4>
            <i className={arizonia.className}>Natural</i> <br />
            INGRIDIENTS
          </h4>
          <hr />
          <p>
            We harness the goodness of nature to enrich your pup's meals with
            wholesome ingredients, promoting vitality and well-being. Let your
            canine companion thrive with every wag of their tail.
          </p>
        </div>
        <div className={styles.advantage}>
          <h4>
            {" "}
            VET
            <br />
            <i className={arizonia.className}>Recommended</i>
          </h4>
          <hr />
          <p>
            Rest assured with our vet-endorsed formulas, ensuring that you're
            providing the optimal care for your beloved pooch. Join us in
            supporting them to live their happiest and healthiest dog life.
          </p>
        </div>
        <div className={styles.advantage}>
          <h4>
            <i className={arizonia.className}>Added</i> <br />
            SUPPLEMENTS
          </h4>
          <hr />
          <p>
            From a diverse selection of natural and health-focused supplements,
            we craft every meal to support your dog's longevity, fulfillment,
            and joy. Experience the difference in your furry friend's well-being
            as they thrive on our nourishing recipes.
          </p>
        </div>
      </div>
    </div>
  );
}
