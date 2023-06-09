import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { OutputNum } from "./components/type00/index";
import MiniSlider from "./components/MiniSlider/MiniSlider";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const lines: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Head>
        <title>This is add types.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <OutputNum lines={lines} />
        <MiniSlider />
      </main>
    </>
  )
}
