import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/carrosel.module.css'
import { Roupas } from './roupas'

export function Carrosel() {
    const [data, setData] = useState(Roupas)
    const carrosel = useRef(null)

    if (!data || !data.length) return null

    const handleLeftClick = (e) => {
        e.preventDefault()
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth
        
    }
    const handleRightClick = (e) => {
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