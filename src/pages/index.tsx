import About from "../components/Home/AboutMe/About";
import Hero from "../components/Home/Hero/Hero";
import Projects from "../components/Home/Projects/Projects";
import SkillsSection from "../components/Home/Skills/Skills";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Layout>
        <About />
        <SkillsSection />
        <Projects />
      </Layout>
      <Footer />
    </div>
  );
}
