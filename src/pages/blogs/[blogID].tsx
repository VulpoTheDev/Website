import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import Container from "../../components/Layout/Container";
import styles from "../../styles/Blog.module.scss";

export default function Blog() {
  // Get the blog ID from the URL
  const router = useRouter();
  const { blogID } = router.query;
  const [blogData, setBlogData] = React.useState<{
    title: string;
    content: string;
    date: Date;
    banner: string;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);
  // Turn Banner Base64 into a URL
  const [banner, setBanner] = React.useState<string | null>(null);
  const [date, setDate] = React.useState<string | null>(null);
  useEffect(() => {
    fetch(`/api/blogs/${blogID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          setBlogData(null);
          setLoading(true);
          return;
        }
        setBlogData(data);
        const date = new Date(data.date);
        setDate(
          `${date.getMonth()}/${date.getDay()}/${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}`
        );
        setLoading(false);
        setBanner(data.banner);
      });
  }, [blogID]);

  if (blogData && !loading) {
    return (
      <Container>
        <div className={styles.blogPage}>
          {/* @ts-ignore */}
          <img src={banner} className={styles.banner} alt={blogData.title} />
          <h1>{blogData.title}</h1>
          <div className={styles.content}>
            <div className={styles.info}>
              <img src="/images/ozzy.png" alt="" />
              <p>Author: Jason Diaz Jimenez (Ozzy)</p>
              <p>{date}</p>
            </div>
            <ReactMarkdown>{blogData.content}</ReactMarkdown>
          </div>
        </div>
      </Container>
    );
  }
}
