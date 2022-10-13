import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NavBar } from '../scr/components/navbar'
import { openForm } from '../scr/components/loginPina'
import { closeForm } from '../scr/components/loginPina'
import styles from '../styles/initialPage.module.css'
// import styles from '../styles/loginPina.module.css'

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

            {/* <button class="open-button" onclick="openForm()">Open Form</button> */}

            {/* < div classNAme={styles.form - popup} id="myForm" >
    <form action="/action_page.php" className={styles.form - container}>
        <h1>Login</h1>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>

                <button type="submit" class="btn">Login</button>
                <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
            </form>
        </div>
</div> */}

        </div>
    )
}
