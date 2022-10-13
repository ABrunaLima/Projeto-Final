import Image from "next/image"
import imagem from "./login.png"
import styles from "/styles/botoes.module.css"
export function Login() {
    const login = async () => {
        const res = await fetch("/api/login", { method: "POST" })
        const json = await res.json()

        localStorage.setItem("token", json.token)

        localStorage.getItem("token")
    }
    return (
        <div>
            <div className={styles.botaoLogin}><button onClick={() => login()}><img src="/login.png" /></button></div>
        </div>
    )
}