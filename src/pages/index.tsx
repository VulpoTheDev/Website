import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button/Button'
import Blog from '../components/Home/Blog'
import Hero from '../components/Home/Hero'
import Working from '../components/Home/Working'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Blog />
      <Working />
    </div>
  )
}

export default Home
