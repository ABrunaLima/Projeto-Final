import Image from "next/image"
import imagem from "./login.png"
export function Login() {
    const login = () => {
        console.log("yeye")
    }
    return (
        <div>
            <button><img src="/login.png" /></button>

            {/* <button onClick={login}><Image height={100} width={100} scr={"/login.png"} /></button> */}
        </div>
    )
}