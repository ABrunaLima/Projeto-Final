import { useRouter } from 'next/router'
import styles from '../styles/Closet.module.css'
import { NavBar } from '../scr/components/navbar'
import { NavBarCloset } from '../scr/components/navBarCloset'
import BotoesClose from './mycloset'
import { useEffect, useState } from 'react'

//teste PILOTO
const closets = [
    {
        id: "1",
        imagePath: "camisaDoFlamengo.png",
        title: "Closet 1"
    }

]


export default function closet() {

    const[receberCloset, setReceberCloset] = useState([])

    const router = useRouter()

    async function novoClosetVazio() {

        const res = await fetch("/api/closet", {
            method: "POST",
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })


        getClosets()
    }

    async function getClosets() {
        const res = await fetch("/api/closet", {
            method: "GET",
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
        const json = await res.json()
        console.log(json)
        setReceberCloset(json)


    }

    async function deleteCloset(){
        const res = await fetch("/api/closet", {
            method: "DELETE",
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
        getClosets()
    }
    

    useEffect(() => {
        getClosets()
    }, [])

    return (
        //**************************************************************************************************************
        <div>
            <div className={styles.fundoCloset}>
                <div>
                    <NavBarCloset />
                </div>

                <div>
                    <div className={styles.closet}>
                        <div className={styles.title}>
                            <h2>Closets</h2>
                        </div>

                        <section>

                            <div className={styles.lookEachArea}>
                                {receberCloset.map(closet => (
                                    <div>
                                        <span className={styles.tituloDiv}>{closet.title}</span>
                                        <div key={closet.id} className={styles.area}>
                                            <button onClick={() => router.push('/mycloset')}>
                                                Start
                                            </button>
                                            <div className={styles.imagem}>
                                                <img src={closet.imagePath} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </section>

                        <div className={styles.buttonCriaClosetVAzio}>
                            <button onClick={() => novoClosetVazio()}>clica em mim</button>
                            <button onClick={() => deleteCloset()}>clica em mim</button>
                        </div>

                        {/* ------------------------------------------------------------------------------------------------ */}
                    </div>
                </div>
            </div>
        </div>

    )

}