import { url } from "inspector";
import Link from 'next/link'
import styles from "../../styles/BlogPost.module.scss";

interface IPost {
  title: string;
  link: string;
  image: string;
  description: string;
}

export default function Post({ title, link, image, description }: IPost) {
  return (
    //  Makes a card showing the image with
    <Link href={link}>
    <div className={styles.blogPost} style={{ backgroundImage: `url("${image}")` }}>
      {/* <img src={} alt={description} /> */}
      <div className={styles.information}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
        </Link>
  );
}
