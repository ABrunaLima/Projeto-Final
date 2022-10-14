import { useRouter } from 'next/router'
import styles from '../styles/Closet.module.css'
import { NavBar } from '../scr/components/navbar'
import { NavBarCloset } from '../scr/components/navBarCloset'
import BotoesClose from './mycloset'

//teste PILOTO
const closets = [
    {
        id: "1",
        imagePath: "camisaDoFlamengo.png",
        title: "Closet 1"
    },
    {
        id: "2",
        imagePath: "camisaSocialpreta.png",
        title: "Closet 2"
    },
    {
        id: "3",
        imagePath: "armadura.png",
        title: "Closet 3"
    },
    {
        id: "4",
        imagePath: "camisaDoFlamengo.png",
        title: "Closet 4"
    },
    {
        id: "5",
        imagePath: "camisaSocialpreta.png",
        title: "Closet 5"
    },
    {
        id: "4",
        imagePath: "camisaDoFlamengo.png",
        title: "Closet 4"
    },
    {
        id: "5",
        imagePath: "camisaSocialpreta.png",
        title: "Closet 5"
    },
    {
        id: "4",
        imagePath: "camisaDoFlamengo.png",
        title: "Closet 4"
    },
    {
        id: "5",
        imagePath: "camisaSocialpreta.png",
        title: "Closet 5"
    }

]


export default function closet() {

    const router = useRouter()

    // function novoClosetVazio() {

    //     const res = await fetch("/api/closet", {
    //         method: "POST",
    //         headers: {
    //             "authorization": localStorage.getItem("token")
    //         }
    //     })

    //     if (res.status === 200) {
    //         const res = await fetch("/api/closet", {
    //             method: "GET",
    //             headers: {
    //                 "authorization": localStorage.getItem("token")
    //             }
    //         })
    //     }

    // }

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
                                {closets.map(closet => (
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
                        </div>

                        {/* ------------------------------------------------------------------------------------------------ */}
                    </div>
                </div>
            </div>
        </div>

    )

}