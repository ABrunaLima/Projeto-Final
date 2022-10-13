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
            <div>
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
                    <button onClick={() => corFiltrada(data)}>All</button>
                    <button onClick={() => corFiltrada('beige')}>Beige</button>
                    <button onClick={() => corFiltrada('black')}>Black</button>
                    <button onClick={() => corFiltrada('blue')}>Blue</button>
                    <button onClick={() => corFiltrada('green')}>Green</button>
                    <button onClick={() => corFiltrada('grey')}>Grey</button>
                    <button onClick={() => corFiltrada('pink')}>Pink</button>
                    <button onClick={() => corFiltrada('purple')}>Purple</button>
                    <button onClick={() => corFiltrada('red')}>Red</button>
                    <button onClick={() => corFiltrada('white')}>White</button>
                </div>

            </div>
        );
    }