import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button/Button'
import Blog from '../components/Home/Blog'
import Footer from '../components/Home/Footer'
import Hero from '../components/Home/Hero'
import Projects from '../components/Home/Projects'
import Working from '../components/Home/Working'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Blog />
      <Working />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
