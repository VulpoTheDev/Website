import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button/Button'
import Blog from '../components/Home/Blog'
import Hero from '../components/Home/Hero'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Blog />
    </div>
  )
}

export default Home
