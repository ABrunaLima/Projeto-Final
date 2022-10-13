import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NavBar } from '../scr/components/navbar'
import { openForm } from '../scr/components/loginPina'
import { closeForm } from '../scr/components/loginPina'
import styles from '../styles/initialPage.module.css'
import styles2 from '../styles/loginPina.module.css'

export default function Home() {
    const router = useRouter()

    return (
        <div>
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

        </div>
    )
}
