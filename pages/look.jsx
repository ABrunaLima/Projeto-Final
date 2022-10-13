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
    const [roupaFiltrada, setRoupaFiltrada] = useState(Roupas)
    const [lookAtual, setLookAtual] = useState({})


    console.log(lookAtual)



    const saveLook = () => {
        fetch("/api/look", {
            method: "POST",
            headers: {
                "Content-Type": "app",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(lookAtual)

        })
    }
    const alterarLook = (item) => {

        setLookAtual(prevLook => ({ ...prevLook, [item.slot]: item }))

    }
    return (

        <div>
            <NavBarSearch />
            <div className={styles.linhaDoCarrossel}>
                <div />
                <div />
                <Filtro setData={setRoupaFiltrada} />
                <Look
                    top={lookAtual.top}
                    middle={lookAtual.middle}
                    bottom={lookAtual.bottom}
                />
                <Carrosel
                    data={roupaFiltrada}
                    onEscolherLook={alterarLook} />
            </div>
            <button onClick={(e) => saveLook()}>Guardar Look</button>
        </div >

    )
}