import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { arizonia } from "@/app/utils/fonts";
import { blogData } from "@/app/utils/blogData";
import Link from "next/link";
const posts = [...blogData];

export default function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const getPost = posts.filter((post) => {
    return post.postId.toString() === slug;
  });

  const thisPost = getPost[0];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>{thisPost?.postTitle}</h1>
        <div className={styles.postInfo}>
          <Link href={`/blog?query=` + thisPost.postInfo.category}>
            view all in &nbsp; {""}
            <i className={arizonia.className}>
              {thisPost.postInfo.category[0].toUpperCase() +
                thisPost.postInfo.category.substring(1)}
            </i>{" "}
          </Link>
          <p>
            Read time: <b> {thisPost.postInfo.time} mins</b>
          </p>
        </div>
        <img src={thisPost.postImage.src} alt={thisPost.postImage.alt} />
        <p>{thisPost.postText}</p>
      </div>
    </div>
  );
}
