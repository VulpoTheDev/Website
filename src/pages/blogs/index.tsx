import React, { useEffect, useState } from "react";
import Post from "../../components/Blogs/Post";
import styles from "../../styles/Blog.module.scss";
import Container from "../../components/Layout/Container";

export default function Blog() {
  // TODO: Get all the blog posts from DB
  // TODO: Sort blogs by months and display them as is
  const [blogs, setBlog] = useState<
    | null
    | {
        title: string;
        content: string;
        banner: string;
        blogID: string;
        date: Date;
      }[]
  >(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/blogs/fetch").then((res) => {
      res.json().then((data) => {
        if (data.message) {
          console.log(data.message);
          setBlog(null);
          setLoading(true);
          return;
        } else {
          setBlog(data);
          setLoading(false);
        }
      });
    });
  }, []);
  return (
    <Container>
      <div className={styles.blogPage}>
        <h2>January 2022</h2>
        <div className={styles.blogPosts}>
          {blogs !== null && !loading ? (
            blogs.map((blog) => {
              {
                console.log(blog);
              }
              return (
                <Post
                  description={blog.content.slice(0, 20)}
                  image={blog.banner}
                  link={`/blogs/${blog.blogID}`}
                  title={blog.title}
                  key={blogs.indexOf(blog)}
                />
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </Container>
  );
}
