import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}
