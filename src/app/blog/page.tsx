"use client";
import styles from "./page.module.css";
import { arizonia } from "@/app/utils/fonts";
import { FaRegClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "../utils/blogData";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";

const Blog = ({}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [filteredBlogData, setFilteredBlogData] = useState([...blogData]);
  const [activeButton, setActiveButton] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const initialCategory = params.get("query");
    if (initialCategory) {
      handleFiltering(initialCategory);
    }
    setIsLoading(false);
  }, []);

  const handleFiltering = (category: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (category === null) {
      // Initial render with query parameter
      category = params.get("query");
    }
    if (category) {
      params.set("query", category);
      setFilteredBlogData(
        blogData.filter(
          (post) => category && post.postInfo.category === category
        )
      );
      setActiveButton(category);
    } else {
      params.delete("query");
      setFilteredBlogData(blogData);
      setActiveButton("all");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const activeButtonStyle = {
    borderBottom: "2px solid black",
    fontWeight: "800",
  };

  return (
    <Suspense>
      <div className={styles.blog}>
        <div className={styles.container}>
          <div className={styles.blogTop}>
            <h1>
              The Dog <i className={arizonia.className}> Blog</i>
            </h1>

            <nav className={styles.filterNav}>
              <button
                style={activeButton === "all" ? activeButtonStyle : {}}
                onClick={() => handleFiltering("")}
              >
                All
              </button>
              <button
                onClick={() => handleFiltering("nutrition")}
                style={activeButton === "nutrition" ? activeButtonStyle : {}}
              >
                Nutrition
              </button>
              <button
                onClick={() => handleFiltering("supplements")}
                style={activeButton === "supplements" ? activeButtonStyle : {}}
              >
                Supplements
              </button>
              <button
                onClick={() => handleFiltering("lifestyle")}
                style={activeButton === "lifestyle" ? activeButtonStyle : {}}
              >
                Lifestyle
              </button>
            </nav>
          </div>
          {isLoading ? (
            <h2>Blog posts are loading...</h2>
          ) : (
            <div className={styles.blogBody}>
              {filteredBlogData.length > 0 ? (
                filteredBlogData.map((post) => {
                  return (
                    <Link
                      href={`/blog/${post.postId}`}
                      className={styles.blogPost}
                      key={post.postId}
                    >
                      <Image
                        width={400}
                        height={400}
                        src={post.postImage.src}
                        alt={post.postImage.alt}
                        className={styles.postImg}
                        loading="lazy"
                      />
                      <div className={styles.postInfo}>
                        <i className={arizonia.className}>
                          {" "}
                          {post.postInfo.category[0].toUpperCase() +
                            post.postInfo.category.substring(1)}
                        </i>
                        <div className={styles.vLine}></div>
                        <p>{post.postInfo.time}</p>
                        <FaRegClock />
                      </div>
                      <h3 className={styles.postHeader}>{post.postTitle}</h3>
                    </Link>
                  );
                })
              ) : (
                <h2>Sorry, blog posts are not availiable</h2>
              )}
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Blog;
