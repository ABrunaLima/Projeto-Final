import Head from 'next/head'
import Image from 'next/image'

import { NavBar } from '../scr/components/navbar'
import { Login } from '../scr/components/login'
import styles from "../styles/botoes.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Login />
        </div>
    )
}
