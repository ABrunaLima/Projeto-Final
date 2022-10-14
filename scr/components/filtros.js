import { useState } from "react"
import { Roupas } from "../assets/roupas";
import styles from '../../styles/filtros.module.css'

export function Filtro({ data, setData }) {

    const categoriaFiltrada = (catItem) => {
        let result = Roupas
        if (catItem !== "all") {
            result = Roupas.filter((curDate) => {
                return curDate.type === catItem
            })
        }
        setData(result)
    }

    const corFiltrada = (catItem) => {
        let result = Roupas
        if (catItem !== "all") {
            result = Roupas.filter((curDate) => {
                return curDate.color === catItem
            })
        }
        setData(result)
    }

    return (
        <div className={styles.container}>
            <div className={styles.titulos}>
                <p>Category</p>
            </div>
            <div className={styles.categorias}>
                <button onClick={() => categoriaFiltrada("all")}>All</button>
                <button onClick={() => categoriaFiltrada('blazer')}>Blazers</button>
                <button onClick={() => categoriaFiltrada('sweat')}>Sweats</button>
                <button onClick={() => categoriaFiltrada('coat')}>Coats</button>
                <button onClick={() => categoriaFiltrada('pants')}>Pants</button>
                <button onClick={() => categoriaFiltrada('skirt')}>Skirts</button>
                <button onClick={() => categoriaFiltrada('shoes')}>Shoes</button>
            </div>
            <div className={styles.titulos}>
                <p>Color</p>
            </div>
            <div className={styles.cores}>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/all.jpeg" />
                    </span>
                    <button onClick={() => corFiltrada("all")}>All</button>
                </div>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/beige.jpeg" />
                    </span>
                    <button onClick={() => corFiltrada('beige')}>Beige</button>
                </div>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/black.jpeg" />
                    </span><button onClick={() => corFiltrada('black')}>Black</button>
                </div>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/green.png" />
                    </span><button onClick={() => corFiltrada('green')}>Green</button>
                </div>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/grey.jpeg" />
                    </span>
                    <button onClick={() => corFiltrada('grey')}>Grey</button>
                </div>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/blue.png" />
                    </span>
                    <button onClick={() => corFiltrada('blue')}>Blue</button>
                </div>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/pink.png" />
                    </span>
                    <button onClick={() => corFiltrada('pink')}>Pink</button>
                </div>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/purple.png" />
                    </span>
                    <button onClick={() => corFiltrada('purple')}>Purple</button>
                </div>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/red.png" />
                    </span>
                    <button onClick={() => corFiltrada('red')}>Red</button>
                </div>
                <div className={styles.botaoCores}>
                    <span className={styles.imagem}>
                        <img src="/cores/white.png" />
                    </span>
                    <button onClick={() => corFiltrada('white')}>White</button>
                </div>
            </div>


        </div>
    );
}