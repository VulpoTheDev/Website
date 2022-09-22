import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import Container from "../../components/Layout/Container";

export default function Blog() {
  // Get the blog ID from the URL
  const router = useRouter();
  const { blogID } = router.query;
  const [blogData, setBlogData] = React.useState<{
    title: string;
    content: string;
    banner: string;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);
  // Turn Banner Base64 into a URL
  const [banner, setBanner] = React.useState<string | null>(null);
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
        setLoading(false);
        setBanner(`data:image/png;base64,${data.banner}`);  
      });
  }, [blogID]);

  if (blogData && !loading) {
    return (
      <Container>
        <div>
          {/* @ts-ignore */}
          {banner !== null ?? <img src={banner} alt="banner" />}
          <h1>{blogData.title}</h1>
          <ReactMarkdown>{blogData.content}</ReactMarkdown>
        </div>
      </Container>
    );
  }
}
