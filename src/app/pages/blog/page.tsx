import styles from "./page.module.css";
import { arizonia } from "@/app/utils/fonts";

const Blog = ({}) => {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <div className="blogTop">
          <h2>
            The Dog <i className={arizonia.className}> Blog</i>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
