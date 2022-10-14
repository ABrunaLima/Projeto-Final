import Image from "next/image"
import { useEffect, useState } from "react"
import imagem from "./login.png"
import styles from "/styles/botoes.module.css"
export function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState()

    const login = async () => {
        const res = await fetch("/api/user/login", { method: "POST" })
        if (res.status === 200) {
            const json = await res.json()
            localStorage.setItem("token", json.token)
            setIsLoggedIn(json.token)
        }


        // fetch("/api/closet", {
        //     method: "GET",
        //     headers: {
        //         "authorization": localStorage.getItem("token")
        //     }
        // })
        // fetch("/api/closet", {
        //     method: "POST",
        //     headers: {
        //         "authorization": localStorage.getItem("token")
        //     }
        // })
    }

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("token"))
    }, [])


    return (
        <div>
            <div className={styles.botaoLogin}><button onClick={() => login()}><img src="/login.png" /></button></div>
        </div>
    )
}