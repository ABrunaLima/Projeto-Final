import { NavBar } from "../scr/components/navbar"
import styles from "../styles/mycloset.module.css"
import { useEffect, useState } from "react"

const top = {
    "id": "1",
    "pathToImage": "/images/roupas/blazerRoxo.png",
    "title": "Purple Blazer",
    "slot": "top",
    "type": "blazer",
    "color": "purple"
}

const bottom = {
    "id": "2",
    "pathToImage": "/images/roupas/tenisCreme.png",
    "title": "Pink Shoes",
    "slot": "bottom",
    "type": "shoes",
    "color": "pink"
}

const middle = {
    "id": "4",
    "pathToImage": "/images/roupas/calcasAzuisGanga1.png",
    "title": "Blue Jeans",
    "slot": "middle",
    "type": "pants",
    "color": "blue"
}

export default function BotoesClose() {
   
    const [receberLook, setReceberLook] = useState({})

    async function novoClosetVazio() {

        const res = await fetch("api/closet/look", {
            method: "POST",
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })


        getLooks()
    }

    async function getLooks(id) {
        const res = await fetch("api/closet/" + id, {
            method: "GET",
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
        const json = await res.json()
        console.log(json)
        setReceberLook(json)


    }

    useEffect(() => {
        getLooks()
    }, [])


    return (
        <div className={styles.pagina}>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.borda}>
                    <div className={styles.botoes}>
                        <button>Look 1</button>
                        <button>Look 2</button>
                        <button>Look 3</button>
                        <button>Look 4</button>
                        <button>Look 5</button>
                    </div>
                    <div style={{ height: "700px", width: "590px" }}>
                        <Look
                            top={top}
                            middle={middle}
                            bottom={bottom}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Look({ top = {}, bottom = {}, middle = {}, onDelete }) {


    console.log(top, middle, bottom)
    return <div>
        <div className={styles.top}>
            <span className={styles.minus}>
                <button onClick={() => onDelete(top)}><img src="/images/minus.png" /></button>
            </span>
            <img src={top.pathToImage} />
        </div>
        <div className={styles.middle}>
            <span className={styles.minus}>
                <button onClick={() => onDelete(middle)} ><img src="/images/minus.png" /></button>
            </span>
            <img src={middle.pathToImage} />
        </div>
        <div className={styles.bottom}>
            <span className={styles.minus}>
                <button onClick={() => onDelete(bottom)}><img src="/images/minus.png" /></button>
            </span>
            <img src={bottom.pathToImage} />
        </div>

    </div>

}