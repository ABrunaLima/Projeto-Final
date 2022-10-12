import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/carrosel.module.css'

const closet =  [
  
]

export function Carrosel() {
    const roupas = [
        {
            "id": "1",
            "pathToImage": "blazerRoxo.png",
            "title": "Purple Blazer",
            "slot": "top",
            "type": "Blazer",
            "color": "Purple"
        },
        {
            "id": "6346a03acc6f3ed8b024e223",
            "pathToImage": "calçaBranca.png",
            "title": "White Pants",
            "slot": "middle",
            "type": "pants",
            "color": "white"
        },
        {
            "id": "6346a03a6cb094b8b89191f4",
            "pathToImage": "sapatoMarrom.png",
            "title": "Brown Shoes",
            "slot": "bottom",
            "type": "shoes",
            "color": "brown"
        },
        {
            "id": "6346a03a6b95e1f42a1d1155",
            "pathToImage": "shortBege",
            "title": "Shorts",
            "slot": "middle",
            "type": "short",
            "color": "white"
        },
        {
            "id": "6346a03a50d4e9c2bc5d5649",
            "pathToImage": "vestinoSocial.png",
            "title": "Dress",
            "slot": "top",
            "type": "dress",
            "color": "black",
        },
        {
            "id": "6346a03a42d7de0ecb8cf1af",
            "pathToImage": "sapatoDeVelho.png",
            "title": "Shoes",
            "slot": "bottom",
            "type": "shoes",
            "color": "brown"
        }

    ]

    const [data, setData] = useState(roupas)
    const carrosel = useRef(null)

    if (!data || !data.length) return null

    const handleLeftClick = (e) => {
        e.preventDefault()
        console.log("LEFT")
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth
        
    }
    const handleRightClick = (e) => {
        console.log("RIGHT")
        e.preventDefault()
        carrosel.current.scrollLeft += carrosel.current.offsetWidth
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.carrosel} ref={carrosel}>
                {data.map((item) => {
                    const { id, title, pathToImage } = item
                    return (
                        <div className={styles.item} key={id}>
                            <div className={styles.imagem}>
                                <img src={pathToImage} alt={title} />
                            </div>
                            <div className={styles.info}>
                                <span className={styles.titulo}>{title}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.botoes}>
                <button onClick={handleLeftClick}>
                    <img src='/images/arrow.png' alt='scroll left'/>
                </button>
                <button onClick={handleRightClick}>
                    <img src='/images/arrow.png' alt='scroll right'/>
                </button>
            </div>
        </div>
    )
}