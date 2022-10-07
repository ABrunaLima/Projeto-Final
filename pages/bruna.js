import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import { NavBar } from '../scr/components/navbar'


export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar className ={styles.navBar}/>
    </div>
  )
}
