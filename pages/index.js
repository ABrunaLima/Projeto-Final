import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NavBar } from '../scr/components/navbar'
import styles from '../styles/initialPage.module.css'


export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.texto}>
        <h1>Make your looks and keep it on your virtual closets</h1>
      </div>
      <div className={styles.containerBotao}>
        <button onClick={() => router.push('/look')} className={styles.botao}>
          Start
        </button>
      </div>
    </div>
  )
}
