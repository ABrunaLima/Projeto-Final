import { useState } from "react"
import { Roupas } from "./roupas";
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
        <div className={styles.fora}>
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
            <div className={styles.tituloscores}>
                <p>Color</p>
            </div>

            <div className={styles.cores}>
                <div className={styles.divcores}>
                    <button onClick={() => corFiltrada(data)}>All</button>
                    <button onClick={() => corFiltrada('beige')}><img src="/cores/beige.jpeg" /></button>
                    <button onClick={() => corFiltrada('black')}><img src="/cores/black.jpeg" /></button>
                    <button onClick={() => corFiltrada('blue')}><img src="/cores/blue.png" /></button>
                    <button onClick={() => corFiltrada('green')}><img src="/cores/green.png" /></button>
                    <button onClick={() => corFiltrada('grey')}><img src="/cores/grey.jpeg" /></button>
                    <button onClick={() => corFiltrada('pink')}><img src="/cores/pink.png" /></button>
                    <button onClick={() => corFiltrada('purple')}><img src="/cores/purple.png" /></button>
                    <button onClick={() => corFiltrada('red')}><img src="/cores/red.png" /></button>
                    <button onClick={() => corFiltrada('white')}><img src="/cores/white.png" /></button>
                </div>
            </div>

        </div>
    );
}