import Image from "next/image"
import imagem from "./login.png"
import styles from "/styles/botoes.module.css"
export function Login() {
    const login = () => {
        console.log("yeye")
    }
    return (
        <div>
            <div class={styles.botaoLogin}><button onClick={() => ""}><img src="/login.png" /></button></div>
            oioioio
        </div>
    )
}