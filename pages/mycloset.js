import { NavBarSearch } from "../scr/components/navBarSearch"
import { NavBarMyCloset } from "../scr/components/navBarMyCloset"
import styles from "../styles/mycloset.module.css"
import { useState } from "react"

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

    fetch("/api/clothing", {
        method: "GET",
        headers: {
            "authorization": 'localStorage.getItem("token")'
        },

    })

    return (
        <div className={styles.pagina}>
            <NavBarMyCloset />
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

export function Look({ top = {}, bottom = {}, middle = {} }) {


    console.log(top, middle, bottom)
    return <div>
        <div className={styles.top}>
            <img src={top.pathToImage} />
        </div>
        <div className={styles.middle}>
            <img src={middle.pathToImage} />
        </div>
        <div className={styles.bottom}>
            <img src={bottom.pathToImage} />
        </div>

    </div>

}