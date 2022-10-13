import Head from 'next/head'
import Image from 'next/image'
import { Carrosel } from '../scr/components/carrossel'
import { Filtro } from '../scr/components/filtros'
import { NavBarSearch } from '../scr/components/navBarSearch'
import styles from '../styles/lookPage.module.css'
import { Roupas } from '../scr/components/roupas'
import { useState } from 'react'

export default function Look() {
    const[roupaFiltrada, setRoupaFiltrada] = useState(Roupas)
    return (

        <div>
                <NavBarSearch />
            <div className={styles.linhaDoCarrossel}>
                <div />
                <div />
                <Filtro setData={setRoupaFiltrada}/>
                <Carrosel data={roupaFiltrada}/>
            </div>
        </div>

    )
}