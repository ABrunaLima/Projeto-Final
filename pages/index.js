import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import { NavBar } from '../scr/components/navBarSearch'
import { closet } from './closet'


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>MyVest</title>

        {/*tentando alterar o icon da pagina*/}

        <link rel="icon" href="avicon_io/vest.ico" />

        {/*<link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" /> */}

      </Head>

      <NavBar className={styles.navBar} />

      <closet />

    </div>
  )
}
