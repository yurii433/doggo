import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <form className={styles.footerSignUpForm}>
            <h3>NEWSLETTER</h3>
            <p>
              Keep in the loop with the newest insights from AnimalCare Experts,
              Bark Buzz updates, and exclusive deals by signing up for our
              newsletter!
            </p>
            <div className={styles.signUpFormInteractive}>
              <input type="email" required placeholder="Email Address" />
              <button>SIGN UP</button>
            </div>
          </form>
          <div className={styles.footerNav}>
            <div
              className={`${styles.footerNavBlock} ${styles.footerNavBlock1}`}
            >
              <h3>STORE</h3>

              <a href="">Delivery & Returns</a>
              <a href="">FAQ</a>
              <a href="">Subscribe</a>
              <a href="">Reviews</a>
            </div>
            <div
              className={`${styles.footerNavBlock} ${styles.footerNavBlock2}`}
            >
              <h3>ABOUT</h3>

              <a href="">Join The Pack</a>
              <a href="">Our Food</a>
              <a href="">Sustainability</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomFirst}>
            <p> © 2024 - All Rights Reserved</p>
            <a href="">Terms</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className={styles.footerBottomSecond}>
            <a href="https://twitter.com/" target="_blank">
              <img
                src="/x-social-media-black-icon.svg"
                alt="x (twitter) logo"
              />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src="/facebook-social-media-black-icon.svg"
                alt="facebook logo"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                src="/instagram-social-media-black-icon.svg"
                alt="instagram logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
