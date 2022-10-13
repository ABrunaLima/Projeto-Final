import Head from 'next/head'
import Image from 'next/image'
import { Carrosel } from '../scr/components/carrossel'
import { Filtro } from '../scr/components/filtros'
import { NavBarSearch } from '../scr/components/navBarSearch'
import styles from '../styles/lookPage.module.css'
import { Roupas } from '../scr/assets/roupas'
import { useState } from 'react'
import { Look } from './mycloset'

export default function LookPage() {
    const[roupaFiltrada, setRoupaFiltrada] = useState(Roupas)
    const[lookAtual, setLookAtual] = useState(Roupas)
    
    return (

        <div>
                <NavBarSearch />
            <div className={styles.linhaDoCarrossel}>
                <div />
                <div />
                <Filtro setData={setRoupaFiltrada}/>
                <Look />
                <Carrosel data={roupaFiltrada}/>
            </div>
        </div>

    )
}