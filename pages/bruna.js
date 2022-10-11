import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../scr/components/navbar'
import styles from '../styles/initialPage.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.texto}>
        <h1>Make your looks and keep it on your virtual closets</h1>
      </div>
      <div className={styles.containerBotao}>
        <button className={styles.botao}>
          Start
        </button>
      </div>
    </div>
  )
}
