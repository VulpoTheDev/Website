import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/Home/AboutMe/About";
import Hero from "../components/Home/Hero/Hero";
import Projects from "../components/Home/Projects/projects";
import SkillsSection from "../components/Home/Skills/Skills";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Layout/Navbar";
import Project from "../components/Project/Project";
import { projects as projectsList } from "../config/projects";
import config from "../config/skills.json";
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
