import styles from "./page.module.css";
import Image from "next/image";

const About = ({}) => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTop}>
        {" "}
        <h2>ABOUT US</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h4>GOOD MOOD FOOD</h4>
          <p>
            We know that a healthy mind is just as important as a healthy body.
            But should that thinking be limited to humans?
          </p>
          <p>
            We've created an enhanced series of natural meals, treats and
            supplements that does good and tastes good, to give your pet the
            optimal ingredients needed to boost their mood and behaviour, paw in
            paw with their physical health.
          </p>
          <p>
            And by delivering our knowledge in the clearest way possible, we
            give you the peace of mind you need to better support them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
