import styles from '../../styles/Blog.module.scss'
import Post from '../Blogs/Post'

export default function Blog() {
  return (
    <div className={styles.blog}>
      <h2>My Blog</h2>
      <div className={styles.posts}>
        <Post
          description="I don't have a summer with a lot going on, but I have a plan to work through it."
          image="/images/IMG_5909.jpeg"
          link="https://google.com"
          title="Shitty as Summer."
          key={1}
        />
        <Post
          description="This is my very first blog and I have updated the website once again."
          image="/images/banner.png"
          link="https://google.com"
          title="New Website new Shit."
          key={1}
        />
        <Post
          description="This goes over my experience being a Junior at High School and a College Student."
          image="/images/IMG_5909.jpeg"
          link="https://google.com"
          title="Experiences as a High School Junior"
          key={1}
        />
      </div>
    </div>
  );
}
