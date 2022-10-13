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

    function geraAleatorio(item) {
        const indiceRoupa = Math.floor(Math.random() * Roupas.length);
        
        setLookAtual(prevLook => ({...prevLook, [indiceRoupa.slot]: item }));
      }




    return (
        <div className={styles.container}>
            <NavBarSearch />
            <div className={styles.linhaDoCarrossel}>
                <div className={styles.filtros}>
                    <Filtro setData={setRoupaFiltrada} />
                </div>
                <div className={styles.look}>
                    <Look
                        top={lookAtual.top}
                        middle={lookAtual.middle}
                        bottom={lookAtual.bottom}
                    />
                    <span className={styles.mais}>
                        <button onClick={(e) => saveLook()}><img src='/images/plus.png' /></button>
                        <button onClick={geraAleatorio}><img src='/images/aleatorio.png' /></button>
                    </span>
                </div>
                <div className={styles.carrossel}>
                    <Carrosel
                        data={roupaFiltrada}
                        onEscolherLook={alterarLook} />
                </div>
            </div>
        </div >

    )
}